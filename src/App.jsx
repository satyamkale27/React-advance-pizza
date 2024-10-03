import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./ui/Home";
import Menu, { loader as menuLoader } from "./features/menu/Menu"; // loader as menuLoader (renamed loader)/ /
import Cart from "./features/cart/Cart";
import CreateOrder from "./features/order/CreateOrder";
import Order from "./features/order/Order";
import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error";

const router = createBrowserRouter([
  {
    element: <AppLayout />, // no path to scecify this is layoutroute  //

    errorElement: <Error />, // error handling if anything goes wrong in any pages //
    children: [
      // children routes (nested routes) //

      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader, // passes the data to page // // data fetching done in router and not in componrnt //
        errorElement: <Error />, // error handling in this route in the layout // if it is not handeled here error will bubble in parent route that is <AppLayout/> //
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
      },
      {
        path: "/order/:orderId",
        element: <Order />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
