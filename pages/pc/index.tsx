import { GetStaticProps } from "next";
import getProducts from "../../lib/getProducts";
import { PER_PAGE } from "./[page]";
import PaginationPage from "../../components/PaginatedPage";

function Pc({ products, totalProducts, currentPage }: any) {
  return (
    <>
      <PaginationPage
        products={products}
        currentPage={currentPage}
        totalProducts={totalProducts}
        perPage={PER_PAGE}
        category="pc"
      />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`${process.env.API_URL}/pcs`);
  const data = await res.json();
  const { products, total } = await getProducts({
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

export default Pc;
