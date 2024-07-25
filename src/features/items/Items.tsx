import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../app/store"

import { Desert } from "../../lib/types"
import { addToCart, decrementItemFromCart } from "../cart/cartSlice";
import baklavaDesktop from '../../assets/images/image-baklava-desktop.jpg';
import brownieDesktop from '../../assets/images/image-brownie-desktop.jpg';
import macaronDesktop from '../../assets/images/image-macaron-desktop.jpg';
import cakeDesktop from '../../assets/images/image-cake-desktop.jpg';
import tiramisuDesktop from '../../assets/images/image-tiramisu-desktop.jpg';
import pannaDesktop from '../../assets/images/image-panna-cotta-desktop.jpg';
import meringueDesktop from '../../assets/images/image-meringue-desktop.jpg';
import CartIcon from '../../assets/images/icon-add-to-cart.svg';
import IncrementIcon from '../../assets/images/icon-increment-quantity.svg';
import DecrementIcon from '../../assets/images/icon-decrement-quantity.svg';


// Import all images statically
import waffleThumbnail from '../../assets/images/image-waffle-thumbnail.jpg';
import waffleMobile from '../../assets/images/image-waffle-mobile.jpg';
import waffleTablet from '../../assets/images/image-waffle-tablet.jpg';
import waffleDesktop from '../../assets/images/image-waffle-desktop.jpg';

import cremeBruleeThumbnail from '../../assets/images/image-creme-brulee-thumbnail.jpg';
import cremeBruleeMobile from '../../assets/images/image-creme-brulee-mobile.jpg';
import cremeBruleeTablet from '../../assets/images/image-creme-brulee-tablet.jpg';
import cremeBruleeDesktop from '../../assets/images/image-creme-brulee-desktop.jpg';
import { useState } from "react";
import { setCartCount } from "./itemsSlice";


// Map image names to imported images
const imageMap: { [key: string]: string } = {
    "image-waffle-thumbnail.jpg": waffleThumbnail,
    "image-waffle-mobile.jpg": waffleMobile,
    "image-waffle-tablet.jpg": waffleTablet,
    "image-waffle-desktop.jpg": waffleDesktop,
    "image-creme-brulee-thumbnail.jpg": cremeBruleeThumbnail,
    "image-creme-brulee-mobile.jpg": cremeBruleeMobile,
    "image-creme-brulee-tablet.jpg": cremeBruleeTablet,
    "image-creme-brulee-desktop.jpg": cremeBruleeDesktop,
    "image-macaron-desktop.jpg": macaronDesktop,
    "image-brownie-desktop.jpg": brownieDesktop,
    "image-baklava-desktop.jpg": baklavaDesktop,
    "image-cake-desktop.jpg": cakeDesktop,
    "image-tiramisu-desktop.jpg": tiramisuDesktop,
    "image-panna-cotta-desktop.jpg": pannaDesktop,
    "image-meringue-desktop.jpg": meringueDesktop,
    // Add other images here as needed
};

const Item = ({ item }: { item: Desert }) => {
    const [toggleCart, setToggleCart] = useState(false)
    const dispatch = useDispatch()
    const handleCartToggle = (active: boolean) => {
        setToggleCart(active)
    }

    return (
        <div className=" overflow-hidden">
            <div className="border-2 border-transparent rounded-lg hover:border-red relative h-[2/3] ">
                <img className="w-full rounded-lg  object-cover object-center" src={imageMap[item.image.desktop]} alt={item.name} />
                <div
                    onMouseEnter={() => handleCartToggle(true)}
                    onMouseLeave={() => handleCartToggle(false)}
                    //onClick={() => dispatch(addToCart({ id: item.id, quantity: 1 }))}
                    className={`flex justify-between font-1 px-4 gap-1 w-[75%] max-w-[150px] items-center border shadow-md absolute h-12 bottom-[-24px] rounded-full left-[50%] translate-x-[-50%] ${toggleCart ? "bg-red text-white" : "bg-white"}`}
                >
                    {
                        toggleCart
                            ? <>
                                <img
                                    onClick={() => {
                                        dispatch(decrementItemFromCart({ ...item, quantity: 1 }))
                                        dispatch(setCartCount({
                                            id: item.id,
                                            cartQuantity: item.cartQuantity ? item.cartQuantity - 1 : 0
                                        }))
                                    }}
                                    className={`border-2 border-rose-100 rounded-full w-[18px] h-[18px] p-[2px] hover:cursor-pointer}`} src={DecrementIcon} alt="increment icon" />
                                <span>{item.cartQuantity ? item.cartQuantity : 0}</span>
                                <img
                                    onClick={() => {
                                        dispatch(addToCart({ ...item, quantity: 1 }))
                                        dispatch(setCartCount({
                                            id: item.id,
                                            cartQuantity: item.cartQuantity ? item.cartQuantity + 1 : 1
                                        }))
                                    }}
                                    className="border-2 border-rose-100 rounded-full w-[18px] h-[18px] p-[2px] hover:cursor-pointer " src={IncrementIcon} alt="decrement icon" />
                            </>
                            : <>
                                <img className="" src={CartIcon} alt="cart icon" />
                                <span className=" text-rose text-nowrap ">Add to Cart</span>
                            </>
                    }

                </div>
            </div>

            {/* item desc */}
            <div className="mt-8 font-1 grid">
                <h4 className=" text-rose-500">{item.category}</h4>
                <h2 className=" text-lg text-rose">{item.name}</h2>
                <h2 className=" text-lg text-red">${item.price}</h2>
            </div>
        </div>
    )
}

export default function Items() {
    const items = useSelector((state: RootState) => state.items)
    console.log(items);

    return (
        <>
            {
                items.map((item) => <Item key={item.name} item={item} />)
            }
        </>
    )
}
