import { ProductType } from "../../models";
import product from "../product";

const likeProduct = (
  products: ProductType[],
  likedProducts: ProductType[],
  likedProductIds: number[],
  productId: null | number
): [ProductType, ProductType[], number[]] => {
  const selectedProduct = getProductById(products, productId);

  return [
    selectedProduct as ProductType,
    [...likedProducts, selectedProduct] as ProductType[],
    [...likedProductIds, productId] as number[],
  ];
};

const unLikeProduct = (
  products: ProductType[],
  likedProducts: ProductType[],
  likedProductIds: number[],
  productId: null | number
): [ProductType, ProductType[], number[]] => {
  const selectedProduct = getProductById(products, productId);
  return [
    selectedProduct as ProductType,
    [...likedProducts, selectedProduct] as ProductType[],
    likedProductIds.filter((id) => id !== productId) as number[],
  ];
};

const getProductById = (products: ProductType[], productId: number | null) => {
  return products.find((data) => data.id === productId) as ProductType;
};

export { likeProduct, unLikeProduct };
