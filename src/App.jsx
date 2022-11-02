import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home, ForOhFour, Play } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/play",
    element: <Play></Play>,
  },
  {
    path: "*",
    element: <ForOhFour />,
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
