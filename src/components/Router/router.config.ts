import Exception from "../../pages/Exception"
import Home from "../../pages/Home"
import AppLayout from "../Layout/AppLayout"
import LoadableComponent from "./../Loadable/index"
export const appRouters: any = [
  {
    path: "/",
    name: "home",
    title: "Home",
    component: AppLayout,
    isLayout: true,
    showInMenu: false,
  },
  {
    path: "/home",
    name: "Home",
    title: "Home",
    component: Home,
    isLayout: false,
    showInMenu: true,
  },

  {
    path: "/exception",
    name: "exception",
    title: "exception",
    component: Exception,
    isLayout: false,
    showInMenu: false,
  },
]
export const routers = [...appRouters]
