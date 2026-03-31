// router.jsx
import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root";
import Home from "../components/Home";
import Apps from "../components/Apps";
import Installation from "../components/Installation";
import Error from "../components/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "apps",
        element: <Apps />,
        loader: async () => {
          const response = await fetch("/data.json");
          if (!response.ok) {
            throw new Response("Failed to fetch apps data", { status: response.status });
          }
          return response.json();
        },
      },
      {
        path: "installation",
        element: <Installation />,
      },
    ],
  },
  {
    path: "*",
    element: <Error />,
  },
]);

export default router;