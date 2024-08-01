import { useDispatch } from "react-redux"
import { removeFromCart } from "./cartSlice"
import { setCartCount } from "../items/itemsSlice"
import IconRemove from "../../assets/images/icon-remove-item.svg"


const CloseIcon = ({ removeCart }: { removeCart: () => void }) => {

    return <img
        onClick={removeCart}
        className='border border-rose-300 hover:cursor-pointer hover:border-rose-400  p-[2px] rounded-full'
        src={IconRemove}
        alt="remove icon"
    />
}

interface Item {
    id: string,
    name: string,
    price: number,
    count: number
}

const CartItem = ({ item }: { item: Item }) => {

    const dispatch = useDispatch()
    const removeCart = () => {
        // have to make sure that from cart desert should be deleted 
        dispatch(removeFromCart({ id: item.id }))

        // desert list(items) cartCount should set to 0
        dispatch(setCartCount({
            id: item.id,
            cartQuantity: 0
        }))
    }
    return (
        <div className=' flex h-fit gap-2 items-center pt-3 px-3 justify-between border-b border-rose-100'>
            <div className=''>
                <h3 className='mb-1'>{item.name}</h3>
                <div className='mb-3'>
                    <span className='text-red inline-block font-2  mr-4'>{item.count}x</span>
                    <span className='text-rose-500'>@ ${item.price}</span>
                    <span className='text-rose-900 ml-1 inline-block'>${item.price * item.count}</span>
                </div>
            </div>
            <CloseIcon removeCart={removeCart} />
        </div>
    )
}

export default CartItem