import {
  Breadcrumb,
  Card,
  Col,
  Divider,
  Row,
  Space,
  theme,
  Typography,
} from "antd";
import { Content } from "antd/es/layout/layout";
import React from "react";
import { Link } from "react-router-dom";

export default function ArticlePage() {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const { Title, Text } = Typography;

  return (
    <Content style={{ padding: "0 48px" }}>
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>News</Breadcrumb.Item>
      </Breadcrumb>
      <Space
        align="center"
        style={{
          padding: 24,
          minHeight: 380,
          background: colorBgContainer,
          borderRadius: borderRadiusLG,
        }}
      >
        <Space style={{ marginBottom: "20px" }}>
          <Col span={24}>
            <Row>
              <Space align="center">
                <Col span={24}>
                  <img
                    src="https://static1.straitstimes.com.sg/s3fs-public/styles/large30x20/public/articles/2024/12/01/LYNXNPEKAT04J-1.jpg?VersionId=imH4aFbq_3BXx.KIhr12UYteD6VEW3m9&itok=vNK7tdNf"
                    width={"1000px"}
                  />
                </Col>
              </Space>
            </Row>
            <Row>
              <Col span={24}>
                <Title level={2}>
                  12 die in South Thailand, 7 in Malaysia as both countries face
                  worst floods in decades
                </Title>
                <Text>Dec 01, 2024, 11:48 PM</Text>
              </Col>
            </Row>
            <Divider />
            <Row>
              <Col span={24} style={{ marginBottom: "10px" }}>
                <Text className="article-content">
                  At least 12 people have died and more than 600,000 households
                  have been affected by the worst flooding in southern Thailand
                  in decades, according to a government agency. The heavy
                  downpours and flash floods that have persisted across the
                  country’s south since Nov 22 have affected about 640,580
                  households in 10 provinces, causing around 13,000 people to
                  evacuate and seek refuge in the 200 temporary shelters set up
                  as at Dec 1, the Department of Disaster Prevention and
                  Mitigation said in a statement. Seven provinces in the area
                  are still experiencing floods, it said. Prime Minister
                  Paetongtarn Shinawatra’s administration said it is monitoring
                  the situation “every hour” and on Nov 29 approved a 70 million
                  baht (S$2.74 million) emergency budget to ease the impact of
                  the floods. The government also plans an additional cash
                  handout, debt restructuring and a rice subsidy worth a
                  combined 166 billion baht to help support the nation’s nascent
                  economic recovery.
                </Text>
              </Col>

              <Col span={24} style={{ marginBottom: "10px" }}>
                <Text className="article-content">
                  Ms Paetongtarn on Dec 1 rebutted criticism that she ignored
                  the floods in the southern provinces because her Pheu Thai
                  party’s political base was in the north and north-east of the
                  country, not in the south. She said she wanted the local
                  agencies to focus on helping flood victims, instead of being
                  distracted to make preparations to welcome and take care of
                  her, Thai media outlet The Nation reported. Also, she had to
                  attend Cabinet meetings in Chiang Mai and Chiang Rai that were
                  planned in advance. She added that she had assigned Deputy
                  Prime Minister Phumtham Wechayachai and Interior Minister
                  Anutin Charnvirakul to lead efforts to help flood victims.
                </Text>
              </Col>

              <Col span={24} style={{ marginBottom: "10px" }}>
                <Text className="article-content">
                  The death toll from the disaster was seven: a one-year-old and
                  two elderly men were reported to have drowned in Kelantan on
                  Nov 30 and Dec 1 respectively, according to the Malay Mail.
                  The National Disaster Management Agency had reported on Nov 30
                  that four men had died across Kelantan, Sarawak and Terengganu
                  on Nov 27 and 28. The number of people displaced surpassed the
                  118,000 during one of the country’s worst floods in 2014.
                  Malaysia’s meteorological department warned that heavy rain
                  would continue in Kelantan and adjacent state Terengganu, with
                  thunderstorms in the northern parts of the country on Dec 1.
                  Deputy Prime Minister Zahid Hamidi told Malaysian media at an
                  event on Dec 1 that the situation may worsen because the
                  floods are happening in a period when the tides in the South
                  China Sea and the Strait of Malacca would typically rise to a
                  peak. “We do not want the death toll to rise, so preparedness
                  and early warnings must be fully followed to prevent loss of
                  life,” he said. He advised affected residents to follow any
                  advice to evacuate their homes early, with more than 82,000
                  people mobilised to help flood victims. Prime Minister Anwar
                  Ibrahim earlier instructed his Cabinet to visit flood-hit
                  areas to provide assistance. He said ministers and their
                  deputies have been prohibited from taking leave as the crisis
                  continues.
                </Text>
              </Col>
            </Row>
          </Col>
        </Space>
      </Space>
    </Content>
  );
}
