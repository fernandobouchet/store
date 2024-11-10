import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import React from "react";
import Head from "next/head";
import getSingleProduct from "../../../lib/getSingleProduct";
import { product } from "../../../types";
import SingleProductPageContainer from "../../../components/singleProductPageContainer";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

type PageProps = {
  product: product;
  page: number;
};

function PaginatedPage({ product, page }: PageProps) {
  return (
    <>
      <Head>
        <title>{`Page ${page} - SSG Pagination Example`}</title>
        <meta
          name="description"
          content={`Statically generated page ${page}`}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SingleProductPageContainer product={product} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({
  params,
  locale,
}: GetStaticPropsContext) => {
  const page = Number(params?.page) || 14;
  const res = await fetch(`${process.env.API_URL}/laptops`);

  const data = await res.json();

  const product = getSingleProduct({
    products: data,
    page: page,
  });

  if (!product) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      product,
      page: page,
      ...(await serverSideTranslations(locale!, [
        "common",
        "singleProduct",
        "footer",
      ])),
    },
    revalidate: 60 * 60 * 24, // <--- ISR cache: once a day
  };
};

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  const res = await fetch(`${process.env.API_URL}/laptops`);

  const data = await res.json();

  const paths = data.flatMap((product: product) =>
    locales?.map((locale) => ({
      params: { page: product.id.toString() },
      locale,
    }))
  );

  return {
    paths,
    fallback: "blocking",
  };
};

export default PaginatedPage;
