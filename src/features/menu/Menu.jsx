import { useLoaderData } from "react-router-dom";
import { getMenu } from "../services/apiRestaurant";

function Menu() {
  const menu = useLoaderData(); // data comming from loader App.jsx //
  console.log(menu);
  return <h1>Menu</h1>;
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu; // default export for the component //
