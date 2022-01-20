import React from "react";
import Link from "next/link";
import { Card, Col, Row, Typography } from "antd";
import { HeartOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";
import ProductsWrapper from "../../src/components/organism/ProductsWrapper";

const { Title } = Typography;
const Category = ({ data }: any) => {
  const router = useRouter();
  console.log("ct", router);
  return (
    <>
      <div
        style={{
          margin: "20px 0px",
          padding: 10,
          backgroundColor: "white",
          textAlign: "center",
          borderRadius: 10,
        }}
      >
        <Title style={{ fontVariantCaps: "all-petite-caps" }} level={3}>
          Showing {router.query.type}
        </Title>
      </div>

      <ProductsWrapper data={data} />
    </>
  );
};

export async function getServerSideProps(context: any) {
  const { type } = context.query;
  const res = await fetch(`https://fakestoreapi.com/products/category/${type}`);
  const data = await res.json();
  console.log("res", res);
  return { props: { data } };
}
export default Category;
