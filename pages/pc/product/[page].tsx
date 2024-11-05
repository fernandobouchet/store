import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import React from "react";
import Head from "next/head";
import getSingleProduct from "../../../lib/getSingleProduct";
import { product } from "../../../types";

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
      <div>
        <h1>{product.titulo}</h1>
        <p>{page}</p>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({
  params,
}: GetStaticPropsContext) => {
  const page = Number(params?.page) || 1;
  const res = await fetch(`${process.env.API_URL}/pcs`);

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
    },
    revalidate: 60 * 60 * 24, // <--- ISR cache: once a day
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`${process.env.API_URL}/pcs`);

  const data = await res.json();

  return {
    // Prerender the next 5 pages after the first page, which is handled by the index page.
    // Other pages will be prerendered at runtime.
    paths: data.map((product: product) => `/pc/product/${product.id}`),
    // Block the request for non-generated pages and cache them in the background
    fallback: "blocking",
  };
};

export default PaginatedPage;
