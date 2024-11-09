import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import React from "react";
import getProducts from "../../lib/getProducts";
import Head from "next/head";
import PaginationPage from "../../components/PaginatedPage";
import { product } from "../../types";

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
        category="desktop"
      />
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({
  params,
}: GetStaticPropsContext) => {
  const page = Number(params?.page) || 1;
  const res = await fetch(`${process.env.API_URL}/pcs`);
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

  // Redirect the first page to `/pc` to avoid duplicated content
  if (page === 1) {
    return {
      redirect: {
        destination: "/desktop",
        permanent: false,
      },
    };
  }

  return {
    props: {
      products,
      totalProducts: total,
      currentPage: page,
    },
    revalidate: 60 * 60 * 24, // <--- ISR cache: once a day
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    // Prerender the next 5 pages after the first page, which is handled by the index page.
    // Other pages will be prerendered at runtime.
    paths: Array.from({ length: 5 }).map((_, i) => `/desktop/${i + 2}`),
    // Block the request for non-generated pages and cache them in the background
    fallback: "blocking",
  };
};

export default PaginatedPage;
