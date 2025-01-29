import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Plan from "./pages/Plan";
import { paths } from "./pages/paths";

const router = createBrowserRouter([
  { path: paths.home, element: <Home /> },
  { path: paths.about, element: <About /> },
  { path: paths.plan, element: <Plan /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
