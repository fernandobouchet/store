import Pagination from "./Pagination";

type PageProps = {
  products: any[];
  currentPage: number;
  totalProducts: number;
  perPage: number;
  category: string;
};

const ProductCard = ({ titulo, descripcion, precio }: any) => (
  <div className="my-10 border-2 border-sky-500 p-3">
    <p>{titulo}</p>
    <p className="my-3">${precio}</p>
    <p className="my-8">{descripcion.en}</p>
  </div>
);

const PaginationPage = ({
  currentPage,
  totalProducts,
  perPage,
  products,
  category,
}: PageProps): JSX.Element => {
  return (
    <div>
      <p>Page {currentPage}</p>
      <Pagination
        totalItems={totalProducts}
        currentPage={currentPage}
        itemsPerPage={perPage}
        renderPageLink={(page) => `/${category}/${page}`}
      />
      <div className="grid grid-cols-3 gap-8">
        {products.map((product, i) => (
          <ProductCard key={i} {...product} />
        ))}
      </div>
    </div>
  );
};

export default PaginationPage;
