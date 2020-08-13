import React from "react";
import { Row, Col } from "antd";
import { Content } from "src/components/Content";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import { Sider } from "src/components/Sider";
import classes from "./MainLayout.module.scss";

export const MainLayout: React.FC = ({ children }) => {
  return (
    <Row>
      <Col span="3" className={classes["layout-left"]}>
        <Sider />
      </Col>
      <Col span="21" className={classes["layout-right"]}>
        <Header />
        <Content>{children}</Content>
        <Footer />
      </Col>
    </Row>
  );
};
