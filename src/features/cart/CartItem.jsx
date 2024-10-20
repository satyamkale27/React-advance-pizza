import { useSelector } from "react-redux";
import { formatCurrency } from "../utlities/helpers";
import { getCurrentQuantityById } from "./cartSlice";
import DeleteItem from "./DeleteItem";
import UpdateItemQuantty from "./UpdateItemQuantty";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalprice } = item;
  const currentQuantity = useSelector(getCurrentQuantityById(pizzaId)); // quantity of pizza in cart of passed id // it gives the quantity of pizza of passed id from cart //
  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalprice)}</p>

        <UpdateItemQuantty
          pizzaId={pizzaId}
          currentQuantity={currentQuantity}
        />
        <DeleteItem pizzaId={pizzaId} />
      </div>
    </li>
  );
}

export default CartItem;
