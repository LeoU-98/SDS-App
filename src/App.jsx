import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Announcement from "./Announcement/Announcement";
import Control from "./Control/Control";
import Layout from "./Layout/Layout";
import Sensor from "./Sensor/Sensor";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "sensor",
        element: <Sensor />,
      },
      {
        path: "control",
        element: <Control />,
      },
      {
        path: "announcement",
        element: <Announcement />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
