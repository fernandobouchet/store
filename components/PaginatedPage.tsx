import { product } from "../types";
import Pagination from "./Pagination";
import ProductCard from "./productCard";

type PageProps = {
  products: product[];
  currentPage: number;
  totalProducts: number;
  perPage: number;
  category: string;
};

const PaginationPage = ({
  currentPage,
  totalProducts,
  perPage,
  products,
  category,
}: PageProps): JSX.Element => {
  return (
    <div className="pb-20">
      <Pagination
        totalItems={totalProducts}
        currentPage={currentPage}
        itemsPerPage={perPage}
        renderPageLink={(page) => `/${category}/${page}`}
      />
      <div className="grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} category={category} />
        ))}
      </div>
      <Pagination
        totalItems={totalProducts}
        currentPage={currentPage}
        itemsPerPage={perPage}
        renderPageLink={(page) => `/${category}/${page}`}
      />
    </div>
  );
};

export default PaginationPage;
