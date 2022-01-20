import { makeAutoObservable, autorun } from "mobx";
import { ProductType } from "../models";
import { likeProduct, unLikeProduct } from "./actions/product";

class Product {
  selectedId: null | number = null;
  selected: ProductType = {} as ProductType;
  products: ProductType[] = [];
  selectedProduct: number | null = null;
  likedProductIds: number[] = [];
  likedProducts: ProductType[] = [];
  productsInCart: ProductType[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  like() {
    console.log("B3Liked", this.products);

    const [selected, likedProducts, likedProductIds] = likeProduct(
      this.products,
      this.likedProducts,
      this.likedProductIds,
      this.selectedId
    );
    this.selected = selected;
    this.likedProducts = likedProducts;
    this.likedProductIds = likedProductIds;
    console.log("Liked", likedProducts, selected);
  }
  unLike() {
    const [selected, likedProducts, likedProductIds] = unLikeProduct(
      this.products,
      this.likedProducts,
      this.likedProductIds,
      this.selectedId
    );
    this.selected = selected;
    this.likedProducts = likedProducts;
    this.likedProductIds = likedProductIds;
  }
}

const product = new Product();
export default product;
