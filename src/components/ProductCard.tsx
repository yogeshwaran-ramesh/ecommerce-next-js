import React from "react";
import { Card, Col, Row, Typography } from "antd";
import { HeartOutlined } from "@ant-design/icons";
import { observer } from "mobx-react";
import { HeartIcon } from "./Icons";
import Link from "next/link";
import product from "../store/product";
import { ProductType } from "../models";
const { Paragraph, Text } = Typography;

const ProductCard = (data: ProductType) => {
  const { image, title, price, id }: ProductType = data;
  const [ellipsis, setEllipsis] = React.useState(true);

  return (
    // <Link href={`/product/${id}`}>
    <Card
      hoverable
      style={{
        width: 300,
        height: 450,
        borderRadius: 15,
        margin: 20,
      }}
      className="product-card"
      cover={
        <div
          style={{
            backgroundColor: "white",
            padding: 20,
            borderRadius: 20,
            position: "relative",
          }}
        >
          {product.likedProductIds.includes(id) ? (
            <HeartIcon
              style={{ color: "hotpink" }}
              onClick={() => {
                product.unLike();
                product.selected = data;
              }}
            />
          ) : (
            <HeartOutlined
              onClick={() => {
                product.like();
                product.selected = data;
              }}
              style={{ position: "absolute", top: 0, right: 0, fontSize: 18 }}
            />
          )}
          <img
            alt="example"
            src={image}
            style={{
              width: "100%",
              borderRadius: 10,
              height: 280,
            }}
          />
        </div>
      }
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "70%",
        }}
      >
        <span style={{ fontWeight: "bold" }}>Rs. {price}</span>
        <Paragraph
          style={ellipsis ? { width: 200 } : undefined}
          ellipsis={ellipsis ? { tooltip: title } : false}
        >
          {title}
        </Paragraph>
      </div>
    </Card>
    // </Link>
  );
};

export default observer(ProductCard);
