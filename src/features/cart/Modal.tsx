import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import RightIcon from "../../assets/images/icon-order-confirmed.svg";
import RedButton from "../../components/RedButton";

export default function Modal({
  onClose,
  render,
}: {
  onClose: () => void;
  render: () => React.ReactNode;
}) {
  const cartItems = useSelector((state: RootState) => state.cart);
  console.log(cartItems);

  return (
    <div className="fixed z-10 top-0 bg-black bg-opacity-50 left-0 right-0 bottom-0 p-4 grid place-items-center">
      <div className="bg-white min-w-[300px] rounded-lg p-6 grid gap-6 text-rose font-rht">
        <img className="h-10 w-10" src={RightIcon} alt="confirmed icon" />
        <div>
          <h2 className="text-2xl">Order Confirmed</h2>
          <p className="text-rose-500 ">We hope you enjoy your food!</p>
        </div>
        <div>{render()}</div>
        <RedButton onClick={onClose} text="Start New Order" />
      </div>
    </div>
  );
}
