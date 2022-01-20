import React from "react";
import Navbar from "./Navbar";
import { Layout } from "antd";

const { Content } = Layout;
const LayoutWrapper = ({ children }: any) => {
  return (
    <>
      <Layout style={{ height: "100vh" }}>
        <Navbar />
        <Content
          className="site-layout"
          style={{ padding: "0 50px", marginTop: 64 }}
        >
          {children}
        </Content>
      </Layout>
    </>
  );
};

export default LayoutWrapper;
