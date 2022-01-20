import React from "react";
import { Typography, Card } from "antd";
import ProductCard from "../ProductCard";
const { Title } = Typography;
const ProductsWrapper = ({ data }: any) => {
  return (
    <div style={{ margin: 5, borderRadius: 20, height: "100%" }}>
      {/* <Title style={{ fontVariantCaps: "all-petite-caps" }} level={2}>
        Products
      </Title> */}
      <div className="cards-container">
        {data.map((product: any) => (
          <ProductCard {...product} />
        ))}
      </div>
    </div>
  );
};
export default ProductsWrapper;
