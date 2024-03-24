import Login from "./components/auth/login";
import Register from "./components/auth/register";

import Header from "./components/header";
import Home from "./components/home";
import './app.css';
import { AuthProvider } from "./contexts/authContext";
import { useRoutes } from "react-router-dom";

function App() {
  const routesArray = [
    {
      path: "*",
      element: <Login />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/home",
      element: <Home />,
    },
  ];
  let routesElement = useRoutes(routesArray);
  return (
    <div>
      
    <AuthProvider>
      
      <Header/>
      
      <div className="route">{routesElement}</div>
      
    </AuthProvider>
    </div>
  );
}

export default App;
