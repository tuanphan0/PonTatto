import { routers } from "../components/Router/router.config"

export const test = ""
export const getPageTitle = (pathname: string) => {
  const route = routers.filter((route) => route.path === pathname)
  const localizedAppName = "PON TATTOO"
  if (!route || route.length === 0) {
    return localizedAppName
  }

  return route[0].title + " | " + localizedAppName
}
export const getRoute = (path: string): any => {
  return routers.filter((route) => route.path === path)[0]
}
