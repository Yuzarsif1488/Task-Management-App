import "./App.css";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { UserContext } from "./UserContext/UserContext";
// import { useContext } from "react";

// const navigate = useNavigate;
// const userContext = useContext(UserContext);

// const ProtectedRoute = ({ isSignedIn, redirectPath = "/signin", children }) => {
//   if (!isSignedIn) {
//     return <Navigate to={redirectPath} replace />;
//   }
//   return children;
// };

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        // < ProtectedRoute isSignedIn={ userContext.isSignedIn } >
        <Login />
      ),
    },
    {
      path: "/dashboard",
      element: (
        // < ProtectedRoute isSignedIn={ userContext.isSignedIn } >
        <Dashboard />
      ),
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
