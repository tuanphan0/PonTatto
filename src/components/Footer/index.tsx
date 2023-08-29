import * as React from "react"
import { Avatar, Card, Col, Layout, List, Row } from "antd"
import "./index.less"
import image1 from "../../images/PTT.png"
import { useLocation, useParams } from "react-router-dom"
import face from "../../assets/images/facebook.png"
import twitter from "../../assets/images/twitter.png"
import instagram from "../../assets/images/instagram.png"
import youtube from "../../assets/images/youtube.png"
import PhoneWhite from "../../assets/images/phonewhite.png"
import PlaceWhite from "../../assets/images/placeWhite.png"
import EmailWhite from "../../assets/images/emailWhite.png"

declare var abp: any
const FooterPage = () => {
  const { pathname } = useLocation()
  const data = [
    {
      title: "PON TATTOO – PIERCING SAI GON",
    },
    {
      des: "Pon Tattoo Studio, 71/2 Cô Giang, Phường 1, Phú Nhuận, Thành phố Hồ Chí Minh",
      avatar: PlaceWhite,
    },
    {
      des: "077 678 6782",
      avatar: PhoneWhite,
    },
    {
      des: "quocphong102200@gmail.com",
      avatar: EmailWhite,
    },
    {
      des: (
        <iframe
          src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FPontattoostudio%2F&tabs=timeline&width=500&height=70&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=187446993246326"
          width="100%"
          height="100%"
          style={{ border: "none", overflow: "hidden" }}
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
      ),
    },
  ]
  const btnFace = () => {
    window.open(
      "https://www.facebook.com/Pontattoostudio",
      "_blank",
    )
  }
  const btnIngram = () => {
    window.open(
      "https://www.facebook.com/Pontattoostudio",
      "_blank",
    )
  }
  return (
    <>
      {pathname != "/user/login" ? (
        <Layout.Footer className={"footer"}>
          <Row
            style={{
              fontSize: "20px",
              fontStyle: "Serif",
            }}
          >
            <Col
              xs={{ span: 24, offset: 0 }}
              sm={{ span: 24, offset: 0 }}
              md={{ span: 24, offset: 0 }}
              lg={{ span: 11, offset: 0 }}
              xl={{ span: 11, offset: 0 }}
              xxl={{ span: 11, offset: 0 }}
            >
              <iframe
                src="https://maps.google.com/maps?q=Pon%20Tattoo%20Studio,%2071/2%20C%C3%B4%20Giang,%20Ph%C6%B0%E1%BB%9Dng%201,%20Ph%C3%BA%20Nhu%E1%BA%ADn,%20Th%C3%A0nh%20ph%E1%BB%91%20H%E1%BB%93%20Ch%C3%AD%20Minh&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
                id="gmap_canvas"
                style={{ width: "100%", height: "100%" }}
              ></iframe>
              <a href="https://www.eireportingonline.com"></a>
            </Col>
            <Col
              xs={{ span: 24, offset: 0 }}
              sm={{ span: 24, offset: 0 }}
              md={{ span: 24, offset: 0 }}
              lg={{ span: 8, offset: 4 }}
              xl={{ span: 8, offset: 4 }}
              xxl={{ span: 8, offset: 4 }}
              style={{ fontSize: "20px" }}
            >
              <List
                itemLayout="horizontal"
                dataSource={data}
                renderItem={(item, index) => (
                  <List.Item style={{ fontFamily: "Exo" }}>
                    {item.title && !item.avatar && !item.des && (
                      <List.Item.Meta
                        title={
                          <span style={{ color: "#fff" }}>{item.title}</span>
                        }
                      />
                    )}
                    {item.avatar && (
                      <List.Item.Meta
                        avatar={<Avatar src={item.avatar} />}
                        description={
                          <span style={{ color: "#fff" }}>{item.des}</span>
                        }
                      />
                    )}
                    {!item.avatar && !item.title && (
                      <List.Item.Meta
                        description={
                          <span style={{ color: "#fff" }}>{item.des}</span>
                        }
                      />
                    )}
                  </List.Item>
                )}
              />
            </Col>
          </Row>
          <Row className="footer-end">
            <Col
              style={{ fontFamily: "Exo" }}
              xs={{ span: 24, offset: 0 }}
              sm={{ span: 24, offset: 0 }}
              md={{ span: 12, offset: 0 }}
              lg={{ span: 12, offset: 0 }}
              xl={{ span: 12, offset: 0 }}
              xxl={{ span: 12, offset: 0 }}
            >
              <span>
                VietNam @2023 -<a>License Belongs To Pon Tattoo</a>| Created By
                WABI
              </span>
            </Col>
            <Col
              xs={{ span: 24, offset: 0 }}
              sm={{ span: 24, offset: 0 }}
              md={{ span: 12, offset: 0 }}
              lg={{ span: 12, offset: 0 }}
              xl={{ span: 12, offset: 0 }}
              xxl={{ span: 12, offset: 0 }}
            >
              <Col
                xs={{ span: 24, offset: 0 }}
                sm={{ span: 24, offset: 0 }}
                md={{ span: 8, offset: 16 }}
                lg={{ span: 6, offset: 18 }}
                xl={{ span: 6, offset: 18 }}
                xxl={{ span: 6, offset: 18 }}
                style={{ fontSize: "18px" }}
                className="footer-icon"
              >
                <img onClick={btnFace} className="circle1" src={face} />
                {/* <img className="circle1" src={twitter} />{" "} */}
                <img className="circle1" onClick={btnIngram} src={instagram} />
                {/* <img className="circle1" src={youtube} />{" "} */}
              </Col>
            </Col>
          </Row>
        </Layout.Footer>
      ) : null}
    </>
  )
}
export default FooterPage
