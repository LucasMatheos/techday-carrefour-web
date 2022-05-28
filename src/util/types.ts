interface ProductSellers {
  commertialOffer: {
    Price: number;
  };
}

interface ProductImage {
  imageUrl: string;
}

interface ProductItems {
  images: Array<ProductImage>;
  sellers: Array<ProductSellers>;
}

export interface ProductAPI {
  productId: number;
  productName: string;
  items: Array<ProductItems>;
}
