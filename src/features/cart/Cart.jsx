import { Link } from "react-router-dom";
import LinksButtons from "../../ui/LinksButtons";
import Button from "../../ui/Button";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart } from "./cartSlice";
import EmptyCart from "./EmptyCart";

function Cart() {
  const username = useSelector((state) => state.user.username); // i have get state directly without using reusable function // reusable function can also be used here, let it remain same for note and demo purpose //

  const cart = useSelector(getCart); // getcart a reusable function to get state // reusable functions helps to reuse code and make changes in nane, anything effeciently without making multiple change in files //

  const dispatch = useDispatch();

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="px-3 py-3">
      <LinksButtons to="/menu">&larr; Back to menu</LinksButtons>

      <h2 className="mt-7 text-xl font-semibold">Your cart, {username}</h2>

      <ul className="mt-3 divide-y divide-stone-200 border-b">
        {cart.map((item) => (
          <CartItem item={item} key={item.id} />
        ))}
      </ul>

      <div className="mt-6 space-x-2">
        <Button to="/order/new" type="primary">
          Order pizzas
        </Button>

        <Button type="secondary" onClick={() => dispatch(clearCart())}>
          Clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
