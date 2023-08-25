import { Menu, MenuProps, MenuTheme } from "antd"
import React, { useState } from "react"
import "./index.less"
import { Link } from "react-router-dom"
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons"
export interface Iprops {
  datas: any[]
  change?: any
}
type MenuItem = Required<MenuProps>["items"][number]

function getItem(
  label: React.ReactNode,
  key?: React.Key | null,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group",
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem
}
const items: MenuItem[] = [
  getItem("Home", "/home"),
  getItem("Prices", "2"),
  getItem("Booking", "3"),
  getItem("After Care", "sub3", null, [
    getItem("Basic Care", "7"),
    getItem("Oral Piercing Care", "8"), 
    getItem("Steri Wash", "9"),
  ]),
  getItem("Jewelry", "sub4", null, [
    getItem("About Our Jewelry", "10"),
    getItem("How to care for Opals", "11"), 
  ]),
  getItem("Piercing Info", "sub5", null, [
    getItem("Healing Times", "12"),
    getItem("Jewelry Materials", "13"), 
    getItem("Internally Threadless", "14"),
    getItem("Piercing Diet", "15"),
    getItem("Heal Piercings", "16"),
    getItem("Surface finish standards", "17"),
  ]),

]
const MenuPage = ({ datas, change }: Iprops) => {
  const [current, setCurrent] = useState("/home")

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e)
    setCurrent(e.key)
  }
  return (
    <Menu
      className="menu-page"
      mode="inline"
      items={items}
      defaultOpenKeys={["/home"]}
      selectedKeys={[current]}
      onClick={onClick}
    ></Menu>
  )
}
export default MenuPage
