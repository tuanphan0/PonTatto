import React from "react"
import { Route, Navigate } from "react-router-dom"

const NotFoundRoute = () => {
  return (
    <Route
      path="*"
      element={<Navigate to="/exception?type=404" state={{ from: location }} />}
    />
  )
}

export default NotFoundRoute
