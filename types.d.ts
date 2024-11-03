type product = {
  titulo: string;
  precio: number;
  descripcion: {
    es: string;
    en: string;
  };
  rating: number;
  stock: number;
  imagen: string;
};

export type { product };
