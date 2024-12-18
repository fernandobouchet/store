type product = {
  id: number;
  titulo: string;
  precio: number;
  descripcion: {
    es: string;
    en: string;
  };
  rating: number;
  stock: number;
  imagen: string;
  cantidad: number;
};

export type { product };
