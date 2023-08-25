import * as React from "react"
import { Routes, Route } from "react-router-dom"
import Home from "../../pages/Home"
import { getRoute } from "../../utils/common"
import AppLayout from "../Layout/AppLayout"
import LoadableComponent from "../Loadable"
import ProtectedRoute from "./ProtectedRoute"

const Router = () => {
  const AppLayoutComponent = getRoute("/").component // Rename to AppLayoutComponent
  return (
    <Routes>
      <Route path="*" element={<AppLayoutComponent />} />
    </Routes>
  )
}

export default Router
