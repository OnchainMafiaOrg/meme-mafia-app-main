/* eslint-disable react-refresh/only-export-components */
import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./pages/Home";
import ComingSoon from "./pages/ComingSoon";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "*",
        element: <Home />,
      },
      {
        path: "/coming-soon",
        element: <ComingSoon />,
      },
    ],
  },
]);

export default router;
