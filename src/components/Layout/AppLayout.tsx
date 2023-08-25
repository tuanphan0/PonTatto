import * as React from "react"
import {
  Routes,
  Route,
  Navigate,
  useLocation,
  useNavigate,
} from "react-router-dom"
import DocumentTitle from "react-document-title"
import { Layout, Space } from "antd"
import { getPageTitle } from "../../utils/common"
import { appRouters } from "../Router/router.config"
import HeaderPage from "../Header"
import FooterPage from "../Footer"
import "./AppLayout.less"

const { Content } = Layout

const AppLayout = () => {
  const location = useLocation() // Use useLocation from v6
  const pathname = location.pathname
  const navigate = useNavigate()
  return (
    <DocumentTitle title={getPageTitle(pathname)}>
      <Layout id="scrollLayout" className="main-layout">
        <HeaderPage change={pathname} history={navigate} />
        <Content className="content-main-adw">
          <Routes>
            {appRouters
              .filter((item: any) => !item.isLayout)
              .map((route: any, index: number) => (
                <Route
                  key={index}
                  path={route.path}
                  element={<route.component />}
                />
              ))}
            {/* Handle root path and not found */}
            <Route path="/" element={<Navigate to="/home" />} />
            <Route
              path="*"
              element={
                <Navigate to="/exception?type=404" state={{ from: location }} />
              }
            />
          </Routes>
        </Content>
        <FooterPage />
      </Layout>
    </DocumentTitle>
  )
}
export default AppLayout
