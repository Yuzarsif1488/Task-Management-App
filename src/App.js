import { Children,useContext } from "react";
import "./App.css";
import Login from "./pages/Login/Login";
import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,Navigate
} from "react-router-dom";
import {UserContext} from './UserContext/UserContext';

const navigate = useNavigate;
const userContext = useContext(UserContext);

const ProtectedRoute = ({ isSignedIn, redirectPath = "/signin", children }) => {
  if (!isSignedIn) {
    return <Navigate to={redirectPath} replace />;
  }
  return children;
};

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element:{
        <ProtectedRoute isSignedIn={ userContext.isSignedIn } >
        <Login/>
      <ProtectedRoute/>
    }
    }
  ]);
  return (
    <div>
      <RouterProvider router={router} />
      {/* <Login /> */}
    </div>
  );
}

export default App;
