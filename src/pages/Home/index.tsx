import * as React from "react"
import {
  Avatar,
  Button,
  Card,
  Carousel,
  Col,
  List,
  Menu,
  Row,
  Space,
  Typography,
  Image,
  MenuProps,
} from "antd"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { useEffect, useRef, useState } from "react"
import "./index.less"
import slider2 from "../../assets/images/sliderpiercing.jpg"
import slider1 from "../../assets/images/sliderTatto.jpg"
import slider3 from "../../assets/images/informationUs.jpg"
import teacher2 from "../../assets/images/nguyen-hieu_thumb.jpg"
import LogoPon from "../../assets/images/logopon.png"
import {
  ABOUT_MENU,
  BOOKING_MENU,
  PIERCING_MENU,
  REVIEW_MENU,
  ROUTE_BOOKING,
  ROUTE_HOME,
  TATTOO_MENU,
} from "../../utils/constants"

declare var SnowflakeJs: any
const Home = () => {
  const navigate = useNavigate()
  const tattooRef = useRef<any>(null)
  const piercingRef = useRef<any>(null)
  const aboutRef = useRef<any>(null)
  const bookingRef = useRef<any>(null)
  const reviewRef = useRef<any>(null)
  const { hash } = useLocation()
  const [hashMenu, setHashMenu] = useState("")
  const settingCarousels = {
    dots: true, // Show navigation dots
    infinite: true, // Infinite loop
    speed: 500, // Transition speed in milliseconds
    autoplaySpeed: 3000, // Transition speed in milliseconds
    slidesToShow: 3, // Initial number of slides to show
    slidesToScroll: 1, // Number of slides to scroll on next/prev
    autoplay: true,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1000, // Screen width less than 1000px
        settings: {
          slidesToShow: 1, // Show two slides
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1480, // Screen width less than 1480px
        settings: {
          slidesToShow: 2, // Show two slides
          slidesToScroll: 1,
        },
      },
      // Add more breakpoints as needed
    ],
  }
  const settingCarouselTattoos = {
    ...settingCarousels,
    responsive: [
      {
        breakpoint: 900, // Screen width less than 1000px
        settings: {
          slidesToShow: 1, // Show two slides
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200, // Screen width less than 1480px
        settings: {
          slidesToShow: 2, // Show two slides
          slidesToScroll: 1,
        },
      },
      // Add more breakpoints as needed
    ],
  }
  const settingCarouselAbouts = {
    ...settingCarouselTattoos,
  }
  const settingCarouselPiercings = {
    ...settingCarouselTattoos,
  }
  const settingCarouselTattooContents = {
    ...settingCarousels,
    slidesToShow: 1, // Initial number of slides to show
    responsive: [],
  }
  const settingCarouselPiercingContents = {
    ...settingCarousels,
    slidesToShow: 1, // Initial number of slides to show
    responsive: [],
  }
  const items: MenuProps["items"] = [
    {
      label: <Link to={`${ROUTE_HOME}${BOOKING_MENU}`}>BOOKING</Link>,
      key: "#booking",
    },
    {
      label: <Link to={`${ROUTE_HOME}${TATTOO_MENU}`}>TATTOO</Link>,
      key: "#tattoo",
    },

    {
      label: <Link to={`${ROUTE_HOME}${PIERCING_MENU}`}>PIERCING</Link>,
      key: "#piercing",
    },
    {
      label: <Link to={`${ROUTE_HOME}${ABOUT_MENU}`}>ABOUT</Link>,
      key: "#about",
    },
    {
      label: <Link to={`${ROUTE_HOME}${REVIEW_MENU}`}>REVIEW</Link>,
      key: "#review",
    },
  ]
  useEffect(() => {
    // const snowflake = new SnowflakeJs(25, 50, 2000, 5, 20)
    // snowflake.init()
  }, [])
  useEffect(() => {
    setHashMenu(hash)
    switch (hash) {
      case TATTOO_MENU:
        tattooRef.current.scrollIntoView({ behavior: "smooth" })
        return
      case PIERCING_MENU:
        piercingRef.current.scrollIntoView({ behavior: "smooth" })
        return
      case ABOUT_MENU:
        aboutRef.current.scrollIntoView({ behavior: "smooth" })
        return
      case BOOKING_MENU:
        bookingRef.current.scrollIntoView({ behavior: "smooth" })
        return
      case REVIEW_MENU:
        reviewRef.current.scrollIntoView({ behavior: "smooth" })
        return
      default:
        return
    }
  }, [hash])
  const { Text } = Typography
  return (
    <Row>
      <Col className="col-page-slider-container" span={24}>
        <Carousel autoplay pauseOnHover={false} draggable autoplaySpeed={5000}>
          <div className="header-container-main-home">
            <img src={slider1} />
            <Col className="header-container-img">
              <Col span={24} className="header-container-content">
                <img src={LogoPon} className="header-container-content-img" />
                <p className="content-header-text-title-home">
                  Welcome To Pon Tattoo
                </p>
                <p className="content-header-text-home">
                  Our Love On Your Skin
                </p>
                <div className="group-btn">
                  <button onClick={() => navigate(ROUTE_BOOKING)}>
                    BOOKING
                  </button>
                </div>
              </Col>
            </Col>
          </div>
          <div className="header-container-main-home">
            <img src={slider2} />
            <Col className="header-container-img">
              <Col span={24} className="header-container-content">
                <img src={LogoPon} className="header-container-content-img" />
                <p className="content-header-text-title-home">
                  Place Includes Piercing And Tattoo
                </p>
                <p className="content-header-text-home">
                  All Quick And Painless
                </p>
                <button onClick={() => navigate(ROUTE_BOOKING)}>BOOKING</button>
              </Col>
            </Col>
          </div>
          <div className="header-container-main-home">
            <img src={slider3} />
            <Col className="header-container-img">
              <Col span={24} className="header-container-content">
                <img src={LogoPon} className="header-container-content-img" />
                <p className="content-header-text-title-home">
                  Information About Us
                </p>
                <p className="content-header-text-home">
                  Professional, responsible and happy working environment
                </p>
                <button onClick={() => navigate(`${ROUTE_HOME}${ABOUT_MENU}`)}>
                  MORE
                </button>
              </Col>
            </Col>
          </div>
        </Carousel>
      </Col>
      <Col className="col-page-menu-container" span={24}>
        <Row>
          <Col
            className="col-page-menu-home"
            xs={{ span: 24, offset: 0 }}
            sm={{ span: 24, offset: 0 }}
            md={{ span: 24, offset: 0 }}
            lg={{ span: 24, offset: 0 }}
            xl={{ span: 24, offset: 0 }}
            xxl={{ span: 24, offset: 0 }}
          >
            <Menu
              selectedKeys={[hashMenu]}
              mode="horizontal"
              className="menu-content"
              items={items}
            />
          </Col>
        </Row>
      </Col>
      <Col ref={bookingRef} span={24} className="home-content booking">
        <Text className="content-text">Your Choice for Body Art</Text>
        <Text
          className="content-text"
          style={{ fontSize: "36px", fontWeight: 400 }}
        >
          Ready for your piercing or tattoo? Contact us for a consultation!
        </Text>
        <div className="group-btn">
          <button>ĐẶT LỊCH</button>
          <button>BẢNG GIÁ DỊCH VỤ</button>
        </div>
      </Col>
      <Col ref={tattooRef} span={24} className="tattoo">
        <Row className="home-information-tattoo-container">
          <Col
            xs={{ span: 24, offset: 0 }}
            sm={{ span: 24, offset: 0 }}
            md={{ span: 24, offset: 0 }}
            lg={{ span: 11, offset: 1 }}
            xl={{ span: 11, offset: 1 }}
            xxl={{ span: 9, offset: 1 }}
          >
            <Col span={24}>
              <Carousel
                className="carousel-image"
                {...settingCarouselTattooContents}
              >
                <Row>
                  <Col span={24}>
                    <Card className="card-carousel-content-home-image">
                      <img src={teacher2} />
                    </Card>
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <Card className="card-carousel-content-home-image">
                      <img src={slider3} />
                    </Card>
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <Card className="card-carousel-content-home-image">
                      <img src={slider1} />
                    </Card>
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <Card className="card-carousel-content-home-image">
                      <img src={slider2} />
                    </Card>
                  </Col>
                </Row>
              </Carousel>
            </Col>
          </Col>
          <Col
            xs={{ span: 24, offset: 0 }}
            sm={{ span: 24, offset: 0 }}
            md={{ span: 24, offset: 0 }}
            lg={{ span: 11, offset: 1 }}
            xl={{ span: 11, offset: 1 }}
            xxl={{ span: 11, offset: 1 }}
            className="home-content"
          >
            <Space direction="vertical" style={{ marginBottom: "30px" }}>
              <Text className="content-text title-text title-epic">TATTOO</Text>
              <Text className="content-text submidtitle-text">
                TRẢI NGHIỆM MỘT KHÔNG GIAN ĐẦY NGHỆ THUẬT
              </Text>
              <Text className="content-text title-text">
                Tại sao chọn PON Tattoo?
              </Text>
              <Text className="content-text">
                Chúng tôi sử dụng những dụng cụ tốt nhất và có những nghệ sĩ xăm
                tài năng nhất?
              </Text>
              <Text className="content-text">
                Lời quảng cáo chung chung mà tất cả tiệm xăm sử dụng có lẽ sẽ
                không mang lại nhiều ý nghĩa với bạn.
              </Text>
              <Text className="content-text">
                Nghệ thuật xấu hay đẹp sẽ khác nhau trong mắt của mỗi người và
                chính bạn là người đánh giá điều đó khi xem những tác phẩm được
                thực hiện tại tiệm xăm của chúng tôi.
              </Text>
              <Text className="content-text">
                Điều khác biệt mà chúng tôi tự hào là trải nghiệm của bạn mỗi
                khi đến với chúng tôi và cái đó thì sẽ khó để diễn tả bằng lời.
              </Text>
              <Text className="content-text">
                Có một điều chúng tôi có thể đảm bảo khi bạn đến với PON Tattoo
                là bạn sẽ không có rủi ro về tài chính. Hãy đến để thấy sự khác
                biệt và chỉ trả tiền khi bạn hài lòng với kết quả bạn nhận được.
              </Text>
            </Space>
            <div className="group-btn">
              <button>ĐẶT LỊCH</button>
              <button>TRÒ CHUYỆN</button>
            </div>
          </Col>
          <Row style={{ marginTop: "100px" }}>
            <Col
              xs={{ span: 24, offset: 0 }}
              sm={{ span: 24, offset: 0 }}
              md={{ span: 24, offset: 0 }}
              lg={{ span: 11, offset: 1 }}
              xl={{ span: 11, offset: 1 }}
              xxl={{ span: 11, offset: 1 }}
              className="home-content"
            >
              <Space direction="vertical" style={{ marginBottom: "30px" }}>
                <Text className="content-text submidtitle-text">
                  CHÚNG TÔI XĂM NHỮNG GÌ BẠN TƯỞNG TƯỢNG
                </Text>
                <Text className="content-text title-text">
                  PON Tattoo có thể xăm phong cách nào?
                </Text>
                <Text className="content-text">
                  PON Tattoo là nơi quy tụ 8 nghệ sĩ kinh nghiệm với niềm đam mê
                  và theo đuổi những phong cách xăm hình khác nhau
                </Text>
                <Text className="content-text">
                  Chúng tôi sẽ đảm bảo chọn cho bạn một nghệ sĩ phù hợp nhất với
                  phong cách mà bạn lựa chọn.
                </Text>
                <Text className="content-text">
                  Làm tròn vai không phải là điều chúng tôi hướng tới, thể hiện
                  tác phẩm vượt qua sự mong đợi của bạn mới là mục tiêu của
                  chúng tôi.
                </Text>
                <Text className="content-text">
                  Đừng ngần ngại kể với chúng tôi bất kì những gì bạn muốn,
                  chúng tôi sẽ giúp bạn làm nốt phần còn lại.
                </Text>
              </Space>
              <div className="group-btn">
                <button>ĐẶT LỊCH</button>
                <button>TRÒ CHUYỆN</button>
              </div>
            </Col>
            <Col
              xs={{ span: 24, offset: 0 }}
              sm={{ span: 24, offset: 0 }}
              md={{ span: 24, offset: 0 }}
              lg={{ span: 11, offset: 1 }}
              xl={{ span: 11, offset: 1 }}
              xxl={{ span: 9, offset: 1 }}
            >
              <Col span={24}>
                <Carousel
                  className="carousel-image"
                  {...settingCarouselTattooContents}
                >
                  <Row>
                    <Col span={24}>
                      <Card className="card-carousel-content-home-image">
                        <img src={teacher2} />
                      </Card>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={24}>
                      <Card className="card-carousel-content-home-image">
                        <img src={slider2} />
                      </Card>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={24}>
                      <Card className="card-carousel-content-home-image">
                        <img src={slider1} />
                      </Card>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={24}>
                      <Card className="card-carousel-content-home-image">
                        <img src={slider3} />
                      </Card>
                    </Col>
                  </Row>
                </Carousel>
              </Col>
            </Col>
          </Row>
        </Row>
        <Col span={24} className="home-content tattoo-end">
          <Text className="content-text subtitle-text">
            Tất cả các hình ảnh trong thư viện là ảnh hình xăm thật được thực
            hiện bởi các nghệ sĩ xăm hình của Pon Tattoo
          </Text>
        </Col>
        <Col span={24} className="carousel-image-container">
          <Col span={24} className="carousel-image-content">
            <Carousel className="carousel-image" {...settingCarouselTattoos}>
              <Row>
                <Col span={24}>
                  <Card className="card-carousel-home-image">
                    <img src={teacher2} />
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <Card className="card-carousel-home-image">
                    <img src={slider2} />
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <Card className="card-carousel-home-image">
                    <img src={slider1} />
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <Card className="card-carousel-home-image">
                    <img src={slider3} />
                  </Card>
                </Col>
              </Row>
            </Carousel>
          </Col>
        </Col>
      </Col>
      <Col ref={piercingRef} span={24} className="piercing">
        <Row className="home-information-tattoo-container">
          <Col
            xs={{ span: 24, offset: 0 }}
            sm={{ span: 24, offset: 0 }}
            md={{ span: 24, offset: 0 }}
            lg={{ span: 11, offset: 1 }}
            xl={{ span: 11, offset: 1 }}
            xxl={{ span: 9, offset: 1 }}
          >
            <Col span={24}>
              <Carousel
                className="carousel-image"
                {...settingCarouselPiercingContents}
              >
                <Row>
                  <Col span={24}>
                    <Card className="card-carousel-content-home-image">
                      <img src={teacher2} />
                    </Card>
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <Card className="card-carousel-content-home-image">
                      <img src={slider2} />
                    </Card>
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <Card className="card-carousel-content-home-image">
                      <img src={slider1} />
                    </Card>
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <Card className="card-carousel-content-home-image">
                      <img src={slider3} />
                    </Card>
                  </Col>
                </Row>
              </Carousel>
            </Col>
          </Col>
          <Col
            xs={{ span: 24, offset: 0 }}
            sm={{ span: 24, offset: 0 }}
            md={{ span: 24, offset: 0 }}
            lg={{ span: 11, offset: 1 }}
            xl={{ span: 11, offset: 1 }}
            xxl={{ span: 11, offset: 1 }}
            className="home-content"
          >
            <Space direction="vertical" style={{ marginBottom: "30px" }}>
              <Text className="content-text title-text title-epic">
                PIERCING
              </Text>
              <Text className="content-text submidtitle-text">
                TRẢI NGHIỆM MỘT KHÔNG GIAN ĐẦY NGHỆ THUẬT
              </Text>
              <Text className="content-text title-text">
                Tại sao chọn PON Tattoo?
              </Text>
              <Text className="content-text">
                PON Tattoo được dành riêng để trở thành một nơi an toàn khi đặt
                câu hỏi về việc xỏ khuyên của bạn.
              </Text>{" "}
              <Text className="content-text">
                Bạn được hướng dẫn trong việc lựa chọn trang sức, vị trí xỏ,
                chăm sóc sau xỏ. PON Tattoo yêu quý khách hàng, luôn muốn bạn
                được hạnh phúc và khỏe mạnh.
              </Text>
              <Text className="content-text">
                PON Tattoo sẽ từ chối các xỏ khuyên không khả thi, hoặc không tự
                tin về mức độ an toàn của nó. và nói không với việc kiêng ăn rau
                muống, thịt bò, hải sản,..v..v khi xỏ khuyên.
              </Text>
            </Space>
            <div className="group-btn">
              <button>ĐẶT LỊCH</button>
              <button>TRÒ CHUYỆN</button>
            </div>
          </Col>
          <Row style={{ marginTop: "100px" }}>
            <Col
              xs={{ span: 24, offset: 0 }}
              sm={{ span: 24, offset: 0 }}
              md={{ span: 24, offset: 0 }}
              lg={{ span: 11, offset: 1 }}
              xl={{ span: 11, offset: 1 }}
              xxl={{ span: 11, offset: 1 }}
              className="home-content"
            >
              <Space direction="vertical" style={{ marginBottom: "30px" }}>
                <Text className="content-text submidtitle-text">
                  CHÚNG TÔI XỎ NHỮNG GÌ BẠN YÊU CẦU
                </Text>
                <Text className="content-text title-text">
                  PON Tattoo có thể xỏ những khuyên nào?
                </Text>
                <Text className="content-text">
                  PON Tattoo là đơn vị đầu tiên: mang đến Việt Nam và đang là
                  duy nhất sử dụng 100% các khuyên chất lượng đạt chuẩn theo
                  ASTM F136 F138 từ các hãng uy tín tại Mỹ, sử dụng kim xỏ cao
                  cấp đến từ Nhật Bản - Kiwami.
                </Text>
                <Text className="content-text">
                  Và cơ sở của PON Tattoo tuân theo nguyên tắc: sử dụng 1 lần,
                  các dụng cụ vô trùng là an toàn nhất cho cả khách hàng và thợ
                  xỏ.
                </Text>
                <Text className="content-text">
                  Làm tròn vai không phải là điều chúng tôi hướng tới, thể hiện
                  tác phẩm vượt qua sự mong đợi của bạn mới là mục tiêu của
                  chúng tôi.
                </Text>
                <Text className="content-text">
                  Đừng ngần ngại kể với chúng tôi bất kì những gì bạn muốn,
                  chúng tôi sẽ giúp bạn làm nốt phần còn lại.
                </Text>
              </Space>
              <div className="group-btn">
                <button>ĐẶT LỊCH</button>
                <button>TRÒ CHUYỆN</button>
              </div>
            </Col>
            <Col
              xs={{ span: 24, offset: 0 }}
              sm={{ span: 24, offset: 0 }}
              md={{ span: 24, offset: 0 }}
              lg={{ span: 11, offset: 1 }}
              xl={{ span: 11, offset: 1 }}
              xxl={{ span: 9, offset: 1 }}
            >
              <Col span={24}>
                <Carousel
                  className="carousel-image"
                  {...settingCarouselTattooContents}
                >
                  <Row>
                    <Col span={24}>
                      <Card className="card-carousel-content-home-image">
                        <img src={teacher2} />
                      </Card>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={24}>
                      <Card className="card-carousel-content-home-image">
                        <img src={slider2} />
                      </Card>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={24}>
                      <Card className="card-carousel-content-home-image">
                        <img src={slider1} />
                      </Card>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={24}>
                      <Card className="card-carousel-content-home-image">
                        <img src={slider3} />
                      </Card>
                    </Col>
                  </Row>
                </Carousel>
              </Col>
            </Col>
          </Row>
        </Row>
        <Col span={24} className="home-content piercing-end">
          <Text className="content-text subtitle-text">
            Tất cả các hình ảnh trong thư viện là ảnh Xỏ khuyên thật được thực
            hiện bởi các nghệ sĩ của Pon Tattoo
          </Text>
        </Col>
        <Col span={24} className="carousel-image-container">
          <Col span={24} className="carousel-image-content">
            <Carousel className="carousel-image" {...settingCarouselPiercings}>
              <Row>
                <Col span={24}>
                  <Card className="card-carousel-home-image">
                    <img src={teacher2} />
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <Card className="card-carousel-home-image">
                    <img src={slider2} />
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <Card className="card-carousel-home-image">
                    <img src={slider1} />
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <Card className="card-carousel-home-image">
                    <img src={slider3} />
                  </Card>
                </Col>
              </Row>
            </Carousel>
          </Col>
        </Col>
      </Col>
      <Col ref={aboutRef} span={24} className="about">
        <Row className="home-about-container">
          <Col
            xs={{ span: 24, offset: 0 }}
            sm={{ span: 24, offset: 0 }}
            md={{ span: 24, offset: 0 }}
            lg={{ span: 15, offset: 0 }}
            xl={{ span: 20, offset: 0 }}
            xxl={{ span: 20, offset: 0 }}
          >
            <Col span={24}>
              <Carousel className="carousel-image" {...settingCarouselAbouts}>
                <Row>
                  <Col span={24}>
                    <Card className="card-carousel-home-about-image">
                      <Col className="col-text-about-container">
                        <Text className="text-about-position">
                          <Text className="text-about-position-title"></Text>{" "}
                          WABI
                        </Text>
                        <Text className="text-about-name">
                          <Text className="text-about-name-title">
                            Position:
                          </Text>{" "}
                          DEVELOPER
                        </Text>
                        <Text className="text-about-des">
                          He created Website. A person important in the team.
                        </Text>
                      </Col>
                      <img src={teacher2} />
                    </Card>
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <Card className="card-carousel-home-about-image">
                      <Col className="col-text-about-container">
                        <Text className="text-about-position">
                          <Text className="text-about-position-title"></Text>{" "}
                          WABI
                        </Text>
                        <Text className="text-about-name">
                          <Text className="text-about-name-title">
                            Position:
                          </Text>{" "}
                          DEVELOPER
                        </Text>
                        <Text className="text-about-des">
                          He created Website. A person important in the team.
                        </Text>
                      </Col>
                      <img src={slider2} />
                    </Card>
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <Card className="card-carousel-home-about-image">
                      <Col className="col-text-about-container">
                        <Text className="text-about-position">
                          <Text className="text-about-position-title"></Text>{" "}
                          WABI
                        </Text>
                        <Text className="text-about-name">
                          <Text className="text-about-name-title">
                            Position:
                          </Text>{" "}
                          DEVELOPER
                        </Text>
                        <Text className="text-about-des">
                          He created Website. A person important in the team.
                        </Text>
                      </Col>
                      <img src={slider1} />
                    </Card>
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <Card className="card-carousel-home-about-image">
                      <Col className="col-text-about-container">
                        <Text className="text-about-position">
                          <Text className="text-about-position-title"></Text>{" "}
                          WABI
                        </Text>
                        <Text className="text-about-name">
                          <Text className="text-about-name-title">
                            Position:
                          </Text>{" "}
                          DEVELOPER
                        </Text>
                        <Text className="text-about-des">
                          He created Website. A person important in the team.
                        </Text>
                      </Col>
                      <img src={slider3} />
                    </Card>
                  </Col>
                </Row>
              </Carousel>
            </Col>
          </Col>
          <Col
            xs={{ span: 24, offset: 0 }}
            sm={{ span: 24, offset: 0 }}
            md={{ span: 24, offset: 0 }}
            lg={{ span: 8, offset: 1 }}
            xl={{ span: 3, offset: 1 }}
            xxl={{ span: 3, offset: 1 }}
            className="home-content about-left"
          >
            <Space direction="vertical">
              <Text className="content-text title-text title-epic">
                INFORMATION US
              </Text>

              <Text className="content-text title-text">MEET THE TEAM</Text>
            </Space>
          </Col>
        </Row>
      </Col>
      <Col ref={reviewRef} className="carousel-review-container" span={24}>
        <div className="hero-text">
          <p className="hero-text-title">Reviews</p>
          <p style={{ fontSize: "24px" }}>PON Tattoo Piercing</p>
          <strong style={{ fontSize: "24px", fontWeight: 700 }}>
            98% khuyên dùng
          </strong>
          <p>Dựa trên ý kiến của 35 người</p>
        </div>
        <Col span={24}>
          <Carousel {...settingCarousels}>
            <Row>
              <Col span={24}>
                <Card className="card-product-home">
                  <Avatar className="circle" src={teacher2} />
                  <p className="title-text-card">Nguyễn Hiếu Yoga</p>
                  <p>Đại sứ Yoga Việt Nam - CEO Zenlife Yoga</p>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <Card className="card-product-home">
                  <Avatar className="circle" src={slider2} />
                  <p className="title-text-card">Nguyễn Hiếu Yoga</p>
                  <p>Đại sứ Yoga Việt Nam - CEO Zenlife Yoga</p>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <Card className="card-product-home">
                  <Avatar className="circle" src={slider1} />
                  <p className="title-text-card">Nguyễn Hiếu Yoga</p>
                  <p>Đại sứ Yoga Việt Nam - CEO Zenlife Yoga</p>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <Card className="card-product-home">
                  <Avatar className="circle" src={slider3} />
                  <p className="title-text-card">Nguyễn Hiếu Yoga</p>
                  <p>Đại sứ Yoga Việt Nam - CEO Zenlife Yoga</p>
                </Card>
              </Col>
            </Row>
          </Carousel>
        </Col>
      </Col>
    </Row>
  )
}
export default Home
