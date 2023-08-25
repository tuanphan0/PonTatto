import * as React from "react"
import { useEffect } from "react"
import { Navigate, Route, Routes } from "react-router-dom"

const ProtectedRoute = ({
  path,
  component: Component,
  permission,
  ...rest
}: any) => {
  return permission ? (
    <Navigate
      to="/exception?type=401"
      state={{ from: rest.location }}
      replace
    />
  ) : (
    <Component />
  )
}

export default ProtectedRoute
