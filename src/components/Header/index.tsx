import "./index.less"

import React, { useContext, useEffect, useRef, useState } from "react"

import {
  Affix,
  Avatar,
  Badge,
  Col,
  Drawer,
  Dropdown,
  Layout,
  Menu,
  Row,
  Space,
  Tabs,
  TabsProps,
} from "antd"
import {
  AppstoreOutlined,
  HighlightOutlined,
  LogoutOutlined,
  MenuOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons"

import { Link, useLocation } from "react-router-dom"
import profilePicture from "../../images/user.png"
import LogoPon from "../../assets/images/logopon.png"
import PTT from "../../assets/images/PTT.png"
import MenuPage from "../Menu/index"
// import SearchManyInformation from "../search/SearchManyInformation"
import Loading from "../Loading"
import face from "../../assets/images/facebook.png"
import instagram from "../../assets/images/instagram.png"
export interface IHeaderProps {
  history?: any
  change?: any
}

const { TabPane } = Tabs
const HeaderPage = ({ history, change }: IHeaderProps) => {
  const [visible, setVisible] = useState(false)
  const [openSearch, setOpenSearch] = useState(false)
  const { pathname } = useLocation()
  const [navbar, setNavbar] = useState(false)
  const headerRef = useRef<any>(null)
  const [showLogo, setShowLogo] = useState(false)
  useEffect(() => {}, [])
  useEffect(() => {
    const scrollLayout = document.getElementById("scrollLayout")
    if (scrollLayout)
      scrollLayout.addEventListener("scroll", function () {
        if (scrollLayout.scrollTop > 0) {
          // User has scrolled away from the top
          setShowLogo(true)
        } else {
          // User is at the top of the div
          setShowLogo(false)
        }
      })
  }, [])

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "DANH SÁCH",
      children: <MenuPage change={change} datas={[]} />,
    },
  ]

  const userDropdownMenu = (
    <Menu>
      <Menu.Item key="1">
        <Link to="/accont">
          <UserOutlined />
          <span> user</span>
        </Link>
      </Menu.Item>
    </Menu>
  )
  const onClose = () => {
    setVisible(false)
  }
  const showDrawer = () => {
    setVisible(true)
    setOpenSearch(false)
  }
  return (
    <Affix ref={headerRef} offsetTop={1}>
      <Layout.Header
        className={
          pathname === "/home"
            ? !showLogo
              ? "header-container header-container-home"
              : "header-container home-scroll-top"
            : "header-container header-container-active"
        }
      >
        <Row>
          <Col
            className="show-menu"
            style={{ textAlign: "left", padding: "0 0 0 10px", margin: 0 }}
            span={6}
          >
            <Row>
              <Space>
                <MenuOutlined
                  onClick={showDrawer}
                  color="#000"
                  className="search-outlined-d"
                />
              </Space>
            </Row>
          </Col>
          <Col
            className="show-logo"
            span={12}
            style={{ textAlign: "center", margin: 0 }}
          >
            <a onClick={() => history("/")}>
              <Avatar
                className="logo-Image-Header"
                shape="square"
                size={120}
                src={LogoPon}
              />
            </a>
          </Col>
          <Col
            style={{ padding: "0px 15px 0px 15px", textAlign: "right" }}
            className="right-header-content"
            span={6}
          >
            <Col span={24}>
              <Row>
                <Col span={24} className="show-icon">
                  <span className="show-icon-fb-ingram">
                    <a
                      href="https://www.facebook.com/PonNguyenTattoo"
                      target={"_blank"}
                    >
                      <Avatar
                        shape="square"
                        size={24}
                        src={face}
                        style={{ marginRight: "20px" }}
                      />
                    </a>
                    <a
                      href="https://www.facebook.com/PonNguyenTattoo"
                      target={"_blank"}
                    >
                      <Avatar shape="square" size={24} src={instagram} />
                    </a>
                    <span
                      style={{
                        borderRight: "1px solid black",
                        margin: "0 10px",
                      }}
                    ></span>
                  </span>
                  <Avatar
                    style={{ height: 24, width: 24 }}
                    shape="circle"
                    alt={"profile"}
                    icon={
                      <UserOutlined onClick={() => history("/user/login")} />
                    }
                  />
                </Col>
              </Row>
            </Col>
          </Col>
        </Row>
        <Drawer
          className="drawer-container-custom"
          width={1000}
          title="Menu"
          placement={"left"}
          onClose={onClose}
          open={visible}
          key={"left"}
        >
          <MenuPage change={change} datas={[]} />
        </Drawer>
      </Layout.Header>
    </Affix>
  )
}
export default HeaderPage
