import React from "react";
import { Button, Card, Typography } from "antd";
import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons";
const { Title } = Typography;

const SingleProduct = ({ data }: any) => {
  console.log("got single", data);

  return (
    <Card style={{ margin: 20, borderRadius: 20 }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Card hoverable style={{ width: 300 }}>
          <div
            style={{
              backgroundColor: "white",
              padding: 20,
              position: "relative",
              textAlign: "center",
            }}
          >
            <img
              alt="example"
              src={data.image}
              style={{
                width: "100%",
                borderRadius: 10,
              }}
            />
          </div>
        </Card>
        <div
          style={{
            width: "80%",
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
          }}
        >
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Title level={2}>{data.title}</Title>
              <HeartOutlined style={{ fontSize: 20 }} />
            </div>

            <Title level={3}>Rs.{data.price * 100}</Title>
            <Title level={5}>Cateogory: {data.category}</Title>
            <Title level={5}>{data.description}</Title>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Button
              type="primary"
              size={"large"}
              style={{
                backgroundColor: "#d49b00",
                borderColor: "#d49b00",
                width: "50%",
                margin: 5,
              }}
            >
              Buy Now
            </Button>
            <Button
              type="primary"
              icon={<ShoppingCartOutlined />}
              size={"large"}
              style={{
                width: "50%",
                margin: 5,
              }}
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};
export async function getServerSideProps(context: any) {
  const { id } = context.query;
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const data = await res.json();
  console.log("got single", res, id);
  return { props: { data } };
}

export default SingleProduct;
