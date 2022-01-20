import React from "react";
import ProductsWrapper from "../../src/components/organism/ProductsWrapper";
const Products = ({ data }: any) => {
  console.log("got", data);
  return <ProductsWrapper {...data} />;
};

export async function getServerSideProps() {
  const res = await fetch(`https://fakestoreapi.com/products?limit=40`);
  const data = await res.json();
  console.log("res", res);
  return { props: { data } };
}
export default Products;
