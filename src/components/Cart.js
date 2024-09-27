import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/CartSlice";
import ItemList from "./ItemList";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(clearCart());
  };

  return (
    <div className="m-4 p-4 text-center">
      <h3 className="font-bold  text-lg">Cart</h3>
      <div className="w-6/12 m-auto">
        {cartItems.length !== 0 && (
          <button
            className="p-2 bg-black text-white rounded-md"
            onClick={handleClick}
          >
            Clear Cart
          </button>
        )}

        {cartItems.length === 0 && <p>please add item to the cart</p>}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
