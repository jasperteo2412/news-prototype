import {
  Breadcrumb,
  Button,
  Card,
  Col,
  Row,
  Space,
  theme,
  Typography,
} from "antd";
import { Content } from "antd/es/layout/layout";
import React from "react";
import { useHistory, useLocation } from "react-router";
import { Link, Outlet } from "react-router-dom";

export default function Home() {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const { Title, Text } = Typography;

  return (
    <Content style={{ padding: "0 48px" }}>
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
      </Breadcrumb>
      <div
        style={{
          padding: 24,
          minHeight: 380,
          background: colorBgContainer,
          borderRadius: borderRadiusLG,
        }}
      >
        <Space style={{ marginBottom: "20px" }}>
          <Card style={{ width: 1340 }}>
            <Col span={24}>
              <Row>
                <Col span={12}>
                  <img
                    src="https://static1.straitstimes.com.sg/s3fs-public/styles/large30x20/public/articles/2024/12/01/LYNXNPEKAT04J-1.jpg?VersionId=imH4aFbq_3BXx.KIhr12UYteD6VEW3m9&itok=vNK7tdNf"
                    width={"600px"}
                  />
                </Col>
                <Col span={12}>
                  <Link to="/article">
                    <Title level={2} className="link-button">
                      12 die in South Thailand, 7 in Malaysia as both countries
                      face worst floods in decades
                    </Title>
                    <Text>Dec 01, 2024, 11:48 PM</Text>
                  </Link>
                </Col>
              </Row>
            </Col>
          </Card>
        </Space>

        <Space direction="horizontal">
          <Card style={{ width: 680 }}>
            <Col span={24}>
              <Row>
                <Col span={12}>
                  <img
                    src="https://www.allkpop.com/upload/2024/11/content/301201/1732986092-image.png"
                    width={"300px"}
                  />
                </Col>
                <Col span={12}>
                  <Link to="/">
                    <Title level={4} className="link-button">
                    (G)I-DLE reveals they all renewed their contracts with Cube Entertainment
                    </Title>
                    <Text>Nov 30, 2024, 9:32 PM</Text>
                  </Link>
                </Col>
              </Row>
            </Col>
          </Card>
          <Card style={{ width: 680 }}>
            <Col span={24}>
              <Row>
                <Col span={12}>
                  <img
                    src="https://tnp.straitstimes.com/sites/default/files/styles/rl780/public/articles/2024/12/02/20241121_43197850_mkb_2519.png?itok=ebVkL6TH"
                    width={"300px"}
                  />
                </Col>
                <Col span={12}>
                  <Link to="/">
                    <Title level={4} className="link-button">
                      Sembawang mosque built by villagers stands on borrowed
                      time
                    </Title>
                    <Text>Dec 02, 2024, 07:15 AM</Text>
                  </Link>
                </Col>
              </Row>
            </Col>
          </Card>
        </Space>
      </div>
    </Content>
  );
}
