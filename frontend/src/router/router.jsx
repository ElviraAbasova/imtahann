import Admin from "../Admin";
import Layout from "../Layout";
import Detail from "../pages/Detail";
import Favorite from "../pages/Favorite";
import Home from "../pages/Home";

export const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/favorite",
        element: <Favorite />,
      },
      {
        path: "/detail/:id",
        element: <Detail />,
      },
    ],
  },
  {
    path: "/admin",
    element: <Admin />,

  }
];
