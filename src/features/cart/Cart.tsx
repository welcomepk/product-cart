import { useState } from "react";
import { createPortal } from "react-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import IconCarbonNeutral from "../../assets/images/icon-carbon-neutral.svg";
import Illustrationemptycart from "../../assets/images/illustration-empty-cart.svg";
import CartItems from "./CartItems";
import Modal from "./Modal";
import RedButton from "../../components/RedButton";
import imageMap from "../../lib/image-map";
import { IoCloseSharp } from "react-icons/io5";

const Cart = ({ setCartOpen }: { cartOpen?: boolean, setCartOpen: React.Dispatch<React.SetStateAction<boolean>> }) => {

  const cartItems = useSelector((state: RootState) => state.cart);

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const [showModal, setShowModal] = useState(false);

  const confirmOrder = () => {
    setShowModal(true);
  };

  const renderCartModalItems = () => {
    return (
      <div className="bg-rose-50 p-6 text-rose">
        <ul className="list-none pb-6 rounded">
          {cartItems.map((item) => (
            <li className="py-4 gap-8 border-b flex items-center justify-between border-rose-100">
              <div className="flex gap-3">
                <img
                  src={imageMap[item.image.desktop]}
                  alt={item.name + " image"}
                  className="w-14 h-14 rounded-md"
                />
                <div>
                  <h4 className="font-1 leading-4 mb-2">{item.name}</h4>
                  <p>
                    <span className="text-red inline-block font-2  mr-4">
                      {item.quantity}x
                    </span>
                    <span className="text-rose-500">@ ${item.price}</span>
                  </p>
                </div>
              </div>
              <h2 className="font-2 text-lg">${item.quantity * item.price}</h2>
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-between">
          <p className="text-sm font-1">Order Total</p>
          <h2 className="font-2 text-2xl">${total}</h2>
        </div>
      </div>
    );
  };

  return (
    <div className="grid shadow-sm relative gap-4 bg-white px-6 pt-8  pb-10 rounded-2xl items-start content-center">
      <button className=" border-2 hover:border-black transition-all rounded-full p-[2px] absolute right-[10px] top-[10px]" onClick={() => setCartOpen(false)}>
        <IoCloseSharp fontSize="22px" />
      </button>
      {showModal &&
        createPortal(
          <Modal
            render={renderCartModalItems}
            onClose={() => setShowModal(false)}
          />,
          document.body
        )}

      <h1 className="text-red font-2 text-xl font-rht">
        Your Cart ({cartItems.length})
      </h1>
      {cartItems.length > 0 ? (
        <>
          <div className="max-h-[600px] overflow-y-auto">
            <CartItems cartItems={cartItems} />
          </div>

          {/* total */}
          <div className="text-rose-900 flex items-center justify-between">
            <span className="">Order Total</span>
            <span className="font-2 text-xl">${total}</span>
          </div>

          {/* other info */}
          <div className="bg-rose-50  rounded-lg 0 text-rose flex items-center justify-center gap-2 p-4">
            <img src={IconCarbonNeutral} alt="carbon newtral icon" />
            <span>
              This is <b>carbon-newtral</b> delivery
            </span>
          </div>

          {/* confirm button */}
          <RedButton onClick={confirmOrder} text="Confirm Order" className="h-fit" />
        </>
      ) : (
        <div className="mx-auto mt-6">
          <img
            className="mx-auto"
            src={Illustrationemptycart}
            alt="Illustration empty cart"
          />
          <p className="text-rose-500 font-1 text-base mt-4">
            Your added items will appear here
          </p>
        </div>
      )}
    </div>
  );
};

export default Cart;
