import { createBrowserRouter, RouterProvider } from "react-router";
import { routes } from "./routes";

function Router() {
  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
}

export default Router;
