import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../app/store"

import { Desert } from "../../lib/types"
import { addToCart } from "../cart/cartSlice";
import baklavaDesktop from '../../assets/images/image-baklava-desktop.jpg';
import brownieDesktop from '../../assets/images/image-brownie-desktop.jpg';
import macaronDesktop from '../../assets/images/image-macaron-desktop.jpg';
import cakeDesktop from '../../assets/images/image-cake-desktop.jpg';
import tiramisuDesktop from '../../assets/images/image-tiramisu-desktop.jpg';
import pannaDesktop from '../../assets/images/image-panna-cotta-desktop.jpg';
import meringueDesktop from '../../assets/images/image-meringue-desktop.jpg';
import CartIcon from '../../assets/images/icon-add-to-cart.svg';





// Import all images statically
import waffleThumbnail from '../../assets/images/image-waffle-thumbnail.jpg';
import waffleMobile from '../../assets/images/image-waffle-mobile.jpg';
import waffleTablet from '../../assets/images/image-waffle-tablet.jpg';
import waffleDesktop from '../../assets/images/image-waffle-desktop.jpg';

import cremeBruleeThumbnail from '../../assets/images/image-creme-brulee-thumbnail.jpg';
import cremeBruleeMobile from '../../assets/images/image-creme-brulee-mobile.jpg';
import cremeBruleeTablet from '../../assets/images/image-creme-brulee-tablet.jpg';
import cremeBruleeDesktop from '../../assets/images/image-creme-brulee-desktop.jpg';


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
    // Function to require images dynamically
    const dispatch = useDispatch()
    return (
        <div className=" overflow-hidden">
            <div className="border-2 border-transparent rounded-lg hover:border-red relative h-[2/3] ">
                <img className="w-full rounded-lg  object-cover object-center" src={imageMap[item.image.desktop]} alt={item.name} />
                <button
                    onClick={() => dispatch(addToCart({ id: item.id, quantity: 1 }))}
                    className="flex justify-between gap-1 w-[75%] max-w-[150px] items-center border shadow-md absolute bg-white py-3 bottom-[-24px] rounded-full    left-[50%] translate-x-[-50%]"
                >
                    <img className="pl-4" src={CartIcon} alt="cart icon" />
                    <span className=" text-rose font-1 text-nowrap mr-4">Add to Cart</span>
                </button>
            </div>

            {/* item desc */}
            <div className="mt-6 grid gap-1">
                <h4 className="font-1 text-rose-500">{item.category}</h4>
                <h2 className="font-2 text-lg text-rose">{item.name}</h2>
                <h2 className="font-2 text-lg text-red">${item.price}</h2>
            </div>
        </div>
    )
}

export default function Items() {
    const items = useSelector((state: RootState) => state.items)
    const dispatch = useDispatch()

    return (
        <>
            {
                items.map((item) => <Item key={item.name} item={item} />)
            }
        </>
    )
}
