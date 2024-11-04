import { GetStaticProps } from "next";
import getProducts from "../../lib/getProducts";
import { PER_PAGE } from "./[page]";
import PaginationPage from "../../components/PaginatedPage";
import { product } from "../../types";

interface Props {
  products: product[];
  totalProducts: number;
  currentPage: number;
}

function Laptop({ products, totalProducts, currentPage }: Props) {
  return (
    <PaginationPage
      products={products}
      currentPage={currentPage}
      totalProducts={totalProducts}
      perPage={PER_PAGE}
      category="laptop"
    />
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`${process.env.API_URL}/laptops`);

  const data = await res.json();

  const { products, total } = getProducts({
    limit: PER_PAGE,
    page: 1,
    products: data,
  });
  return {
    props: {
      products,
      totalProducts: total,
      currentPage: 1,
    },
  };
};

export default Laptop;
