import type { NextPage } from "next";
import { Card, List, Typography } from "antd";
import Link from "next/link";
import ProductsWrapper from "../src/components/organism/ProductsWrapper";
import product from "../src/store/product";
import { observer } from "mobx-react";

const { Title } = Typography;
const Home: NextPage = ({ products, categories }: any) => {
  console.log("lll", product.products);
  product.products = products;

  console.log("dd", products, categories);
  return (
    <div style={{ margin: 10 }}>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <List
          grid={{ column: 4 }}
          size="large"
          dataSource={categories}
          renderItem={(item: any) => (
            <Link href={`/category/${item}`}>
              <Card
                style={{
                  width: 400,
                  margin: 10,
                  padding: 0,
                  textAlign: "center",
                  cursor: "pointer",
                }}
              >
                <Title style={{ fontVariantCaps: "all-petite-caps" }} level={4}>
                  {item}
                </Title>
              </Card>
            </Link>
          )}
        />
      </div>
      <ProductsWrapper data={products} />
    </div>
  );
};
export async function getServerSideProps() {
  const [categoriesRes, productsRes] = await Promise.all([
    fetch(`https://fakestoreapi.com/products/categories`),
    fetch(`https://fakestoreapi.com/products`),
  ]);
  const [categories, products] = await Promise.all([
    categoriesRes.json(),
    productsRes.json(),
  ]);

  return { props: { categories, products } };
}
export default observer(Home);
