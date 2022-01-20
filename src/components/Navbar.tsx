import React from "react";
import { Layout, Menu, Typography, Row, Col, Badge } from "antd";
import {
  HeartOutlined,
  UserOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";

const { Header } = Layout;
const { Title } = Typography;

const Navbar = () => {
  return (
    <Header
      style={{
        position: "fixed",
        zIndex: 1,
        width: "100%",
        backgroundColor: "white",
      }}
    >
      <Row justify="space-between" align="middle">
        <Col span={4}>
          <Title level={2} style={{ margin: 0 }}>
            Remix Js
          </Title>
        </Col>
        <Col span={2}>
          <Row justify="space-between">
            <Col span={2}>
              <HeartOutlined style={{ fontSize: 20 }} />
            </Col>
            <Col span={2}>
              <UserOutlined style={{ fontSize: 20 }} />
            </Col>
            <Col span={2}>
              <Badge count={5} style={{ fontSize: 10 }} size={"small"}>
                <ShoppingCartOutlined style={{ fontSize: 20 }} />
              </Badge>
            </Col>
          </Row>
        </Col>
      </Row>
    </Header>
  );
};

export default Navbar;
