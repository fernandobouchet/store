import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import React from "react";
import getProducts from "../../lib/getProducts";
import Head from "next/head";
import PaginationPage from "../../components/PaginatedPage";
import { product } from "../../types";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

type PageProps = {
  products: product[];
  currentPage: number;
  totalProducts: number;
};

export const PER_PAGE = 6;

function PaginatedPage({ products, currentPage, totalProducts }: PageProps) {
  return (
    <>
      <Head>
        <title>Page {currentPage} - SSG Pagination Example</title>
        <meta
          name="description"
          content={`Statically generated page ${currentPage}`}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PaginationPage
        products={products}
        currentPage={currentPage}
        totalProducts={totalProducts}
        perPage={PER_PAGE}
        category="laptop"
      />
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({
  params,
  locale,
}: GetStaticPropsContext) => {
  const page = Number(params?.page) || 1;
  const res = await fetch(`${process.env.API_URL}/laptops`);

  const data = await res.json();
  const { products, total } = getProducts({
    limit: PER_PAGE,
    page: page,
    products: data,
  });
  if (!products.length) {
    return {
      notFound: true,
    };
  }

  // Redirect the first page to `/laptop` to avoid duplicated content
  if (page === 1) {
    return {
      redirect: {
        destination: "/laptop",
        permanent: false,
      },
    };
  }

  return {
    props: {
      products,
      totalProducts: total,
      currentPage: page,
      ...(await serverSideTranslations(locale!, ["common", "footer"])),
    },
    revalidate: 60 * 60 * 24, // <--- ISR cache: once a day
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: Array.from({ length: 5 }).map((_, i) => ({
      params: { page: (i + 2).toString() },
    })),
    fallback: "blocking",
  };
};

export default PaginatedPage;
