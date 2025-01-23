import { Button, Column, Heading, Hr, Html, Img, Row, Section, Text } from "@react-email/components";
import * as React from "react";
import "../app/globals.css";

type TWelcomeProps = {
  firstName: string;
};

export default function Welcome({ firstName }: TWelcomeProps) {
  return (
    <Html>
      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          padding: "0 20px",
        }}
      >
        <Img
            alt="Netcompany-Intrasoft"
            style={{ width: "100%",
              borderRadius: "12px",
              objectFit: "cover"}}
            height="320"
            src="https://www.netcompany-intrasoft.com/themes/custom/isatheme/images/seo/share.jpg"
          />
        <Heading>Hello, {firstName}</Heading>
        <Section style={{ margin: "16px 0" }}>
          <Section>
            <Row style={{ display: "flex", alignItems: "flex-start" }}>
              <Text
                style={{
                  margin: 0,
                  fontSize: "24px",
                  fontWeight: "600",
                  lineHeight: "32px",
                  color: "#1F2937",
                }}
              >
                Welcome to Netcompany-Intrasoft
              </Text>
              <Text
                style={{
                  marginTop: "8px",
                  fontSize: "16px",
                  lineHeight: "24px",
                  color: "#6B7280",
                }}
              >
                At Netcompany-Intrasoft, we combine innovation and expertise to deliver cutting-edge solutions for the
                public and private sectors worldwide.
              </Text>
            </Row>
          </Section>
          <Hr style={{ margin: "24px 0", width: "100%", border: "1px solid #D1D5DB" }} />

          <Section>
            <Row>
              <Column style={{ verticalAlign: "baseline" }}>
                <div
                  style={{
                    height: "40px",
                    width: "40px",
                    borderRadius: "50%",
                    backgroundColor: "#C7D2FE",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text style={{ margin: 0, fontWeight: "600", color: "#4338CA" }}>1</Text>
                </div>
              </Column>
              <Column style={{ width: "90%" }}>
                <Text style={{ margin: 0, fontSize: "20px", fontWeight: "600", lineHeight: "28px", color: "#1F2937" }}>
                  Public Sector Transformation
                </Text>
                <Text style={{ margin: "8px 0 0", fontSize: "16px", lineHeight: "24px", color: "#6B7280" }}>
                  We empower governments to provide efficient and user-centric digital services. From e-government
                  solutions to large-scale system integration, our projects enhance public service delivery globally.
                </Text>
              </Column>
            </Row>
          </Section>
          <Hr style={{ margin: "24px 0", width: "100%", border: "1px solid #D1D5DB" }} />

          <Section>
            <Row>
              <Column style={{ verticalAlign: "baseline" }}>
                <div
                  style={{
                    height: "40px",
                    width: "40px",
                    borderRadius: "50%",
                    backgroundColor: "#C7D2FE",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text style={{ margin: 0, fontWeight: "600", color: "#4338CA" }}>2</Text>
                </div>
              </Column>
              <Column style={{ width: "90%" }}>
                <Text style={{ margin: 0, fontSize: "20px", fontWeight: "600", lineHeight: "28px", color: "#1F2937" }}>
                  Financial and Banking Solutions
                </Text>
                <Text style={{ margin: "8px 0 0", fontSize: "16px", lineHeight: "24px", color: "#6B7280" }}>
                  We design and implement robust financial platforms that support banking operations, risk management,
                  and regulatory compliance. Our solutions ensure security, scalability, and efficiency.
                </Text>
              </Column>
            </Row>
          </Section>
          <Hr style={{ margin: "24px 0", width: "100%", border: "1px solid #D1D5DB" }} />

          <Section>
            <Row>
              <Column style={{ verticalAlign: "baseline" }}>
                <div
                  style={{
                    height: "40px",
                    width: "40px",
                    borderRadius: "50%",
                    backgroundColor: "#C7D2FE",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text style={{ margin: 0, fontWeight: "600", color: "#4338CA" }}>3</Text>
                </div>
              </Column>
              <Column style={{ width: "90%" }}>
                <Text style={{ margin: 0, fontSize: "20px", fontWeight: "600", lineHeight: "28px", color: "#1F2937" }}>
                  Cybersecurity Excellence
                </Text>
                <Text style={{ margin: "8px 0 0", fontSize: "16px", lineHeight: "24px", color: "#6B7280" }}>
                  Protect your business with our state-of-the-art cybersecurity solutions. From vulnerability assessments
                  to proactive threat management, we ensure your data is safe and secure.
                </Text>
              </Column>
            </Row>
          </Section>
          <Hr style={{ margin: "24px 0", width: "100%", border: "1px solid #D1D5DB" }} />

          <Section>
            <Row>
              <Column style={{ verticalAlign: "baseline" }}>
                <div
                  style={{
                    height: "40px",
                    width: "40px",
                    borderRadius: "50%",
                    backgroundColor: "#C7D2FE",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text style={{ margin: 0, fontWeight: "600", color: "#4338CA" }}>4</Text>
                </div>
              </Column>
              <Column style={{ width: "90%" }}>
                <Text style={{ margin: 0, fontSize: "20px", fontWeight: "600", lineHeight: "28px", color: "#1F2937" }}>
                  Advanced Analytics and AI
                </Text>
                <Text style={{ margin: "8px 0 0", fontSize: "16px", lineHeight: "24px", color: "#6B7280" }}>
                  Unlock the power of data with our AI and advanced analytics solutions. We help businesses gain
                  actionable insights to improve decision-making and drive innovation.
                </Text>
              </Column>
            </Row>
          </Section>
          <Hr style={{ margin: "24px 0", width: "100%", border: "1px solid #D1D5DB" }} />
        </Section>
        <Button
          href="https://www.netcompany-intrasoft.com/"
          style={{
            backgroundColor: "#000",
            color: "#fff",
            padding: "12px 20px",
            display: "block",
            textAlign: "center",
            margin: "20px auto 0",
          }}
        >
          Learn more about us
        </Button>
      </div>
    </Html>
  );
}
