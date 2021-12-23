import { Navigate } from "react-router-dom"

export const PublicRouter = ({isAuthenticated,children}) => {
  
    return !isAuthenticated
    ? children
    : <Navigate to="/*"/>
}
