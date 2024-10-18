import LinksButtons from "../../ui/LinksButtons";

function EmptyCart() {
  return (
    <div className="px-3 py-3">
      <LinksButtons to="/menu">&larr; Back to menu</LinksButtons>

      <p className="mt-7 font-semibold">
        Your cart is still empty. Start adding some pizzas :)
      </p>
    </div>
  );
}

export default EmptyCart;
