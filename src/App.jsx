import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./ui/Home";
import Menu, { loader as menuLoader } from "./features/menu/Menu"; // loader as menuLoader (renamed loader)/ /
import Cart from "./features/cart/Cart";
import CreateOrder, {
  action as createOrderAction,
} from "./features/order/CreateOrder";
import Order, { loader as orderLoader } from "./features/order/Order";
import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error";
import { action as UpdateOrderAction } from "./features/order/UpdateOrder";

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
        action: createOrderAction, // action is like loader but not loaer // action is for form submission //
      },
      {
        path: "/order/:orderId",
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
        action: UpdateOrderAction, // action from UpdateOrder, even UpdateOrder is not on this page like <Order /> , still it works because UpdateOrder is child component of Order component //
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
