import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";

import { Desert } from "../../lib/types";
import { addToCart, decrementItemFromCart } from "../cart/cartSlice";

import CartIcon from "../../assets/images/icon-add-to-cart.svg";
import IncrementIcon from "../../assets/images/icon-increment-quantity.svg";
import DecrementIcon from "../../assets/images/icon-decrement-quantity.svg";

import { useState } from "react";
import { setCartCount } from "./itemsSlice";
import imageMap from "../../lib/image-map";

const Item = ({ item }: { item: Desert }) => {
  const [toggleCart, setToggleCart] = useState(false);
  const dispatch = useDispatch();
  const handleCartToggle = (active: boolean) => {
    setToggleCart(active);
  };

  return (
    <div className=" overflow-hidden">
      <div className="border-2 border-transparent rounded-lg hover:border-red relative h-[2/3] ">
        <img
          className="w-full rounded-lg  object-cover object-center"
          src={imageMap[item.image.desktop]}
          alt={item.name}
        />
        <div
          onMouseEnter={() => handleCartToggle(true)}
          onMouseLeave={() => handleCartToggle(false)}
          //onClick={() => dispatch(addToCart({ id: item.id, quantity: 1 }))}
          className={`flex justify-between font-1 px-4 gap-1 w-[75%] max-w-[150px] items-center border shadow-md absolute h-12 bottom-[-24px] rounded-full left-[50%] translate-x-[-50%] ${
            toggleCart ? "bg-red text-white" : "bg-white"
          }`}
        >
          {toggleCart ? (
            <>
              <img
                onClick={() => {
                  dispatch(decrementItemFromCart({ ...item, quantity: 1 }));
                  dispatch(
                    setCartCount({
                      id: item.id,
                      cartQuantity: item.cartQuantity
                        ? item.cartQuantity - 1
                        : 0,
                    })
                  );
                }}
                className={`border-2 border-rose-100 rounded-full w-[18px] h-[18px] p-[2px] hover:cursor-pointer}`}
                src={DecrementIcon}
                alt="increment icon"
              />
              <span>{item.cartQuantity ? item.cartQuantity : 0}</span>
              <img
                onClick={() => {
                  dispatch(addToCart({ ...item, quantity: 1 }));
                  dispatch(
                    setCartCount({
                      id: item.id,
                      cartQuantity: item.cartQuantity
                        ? item.cartQuantity + 1
                        : 1,
                    })
                  );
                }}
                className="border-2 border-rose-100 rounded-full w-[18px] h-[18px] p-[2px] hover:cursor-pointer "
                src={IncrementIcon}
                alt="decrement icon"
              />
            </>
          ) : (
            <>
              <img className="" src={CartIcon} alt="cart icon" />
              <span className=" text-rose text-nowrap ">Add to Cart</span>
            </>
          )}
        </div>
      </div>

      {/* item desc */}
      <div className="mt-8 font-1 grid">
        <h4 className=" text-rose-500">{item.category}</h4>
        <h2 className=" text-lg text-rose">{item.name}</h2>
        <h2 className=" text-lg text-red">${item.price}</h2>
      </div>
    </div>
  );
};

export default function Items() {
  const items = useSelector((state: RootState) => state.items);
  console.log(items);

  return (
    <>
      {items.map((item) => (
        <Item key={item.name} item={item} />
      ))}
    </>
  );
}
