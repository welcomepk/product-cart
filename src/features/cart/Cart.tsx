
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../app/store'
import IconCarbonNeutral from "../../assets/images/icon-carbon-neutral.svg"
import IconRemove from "../../assets/images/icon-remove-item.svg"
import Illustrationemptycart from "../../assets/images/illustration-empty-cart.svg"

import { CartItem as CartItemType } from '../../lib/types'
import { decrementItemFromCart, removeFromCart } from './cartSlice'

interface Item {
    id: string,
    name: string,
    price: number,
    count: number
}
const CloseIcon = ({ removeCart }: { removeCart: () => void }) => {

    return <img
        onClick={removeCart}
        className='border border-rose-300 hover:cursor-pointer hover:border-rose-400  p-[2px] rounded-full'
        src={IconRemove}
        alt="remove icon"
    />
}

const CartItem = ({ item }: { item: Item }) => {
    const dispatch = useDispatch()
    const removeCart = () => {
        dispatch(removeFromCart({ id: item.id }))
        dispatch(decrementItemFromCart({
            ...item,
            quantity: 0
        }))
    }
    return (
        <div className=' flex h-fit gap-2 items-center justify-between border-b border-rose-100'>
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
const CartItems = ({ cartItems }: { cartItems: CartItemType[] }) => {

    return (
        <>
            {
                cartItems.map(item => <CartItem key={item.id} item={{
                    id: item.id,
                    name: item.name,
                    price: item.price,
                    count: item.quantity
                }} />)
            }
        </>
    )
}
const Cart = () => {
    const cartItems = useSelector((state: RootState) => state.cart)
    const total = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0)
    return (
        <div className='grid gap-4 bg-white px-6 pt-8 pb-10 rounded-2xl'>

            {/* title */}
            <h1 className='text-red font-2 text-xl font-rht' >Your Cart ({cartItems.length})</h1>

            {/* cart items */}
            {
                cartItems.length > 0
                    ? <>
                        <CartItems cartItems={cartItems} />

                        {/* total */}
                        <div className='text-rose-900 flex items-center justify-between'>
                            <span className=''>Order Total</span>
                            <span className='font-2 text-xl'>${total}</span>
                        </div>

                        {/* other info */}
                        <div className='bg-rose-50  rounded-lg 0 text-rose flex items-center justify-center gap-2 p-4'>
                            <img src={IconCarbonNeutral} alt="carbon newtral icon" />
                            <span>This is <b>carbon-newtral</b> delivery</span>
                        </div>
                        {/* confirm button */}
                        <button className='bg-red text-rose-50 p-4 font-2 rounded-full' >Confirm Order</button>
                    </>
                    : <div className='mx-auto mt-6'>
                        <img className='mx-auto' src={Illustrationemptycart} alt="Illustration empty cart" />
                        <p className='text-rose-500 font-1 text-base mt-4'>Your added items will appear here</p>
                    </div>
            }

        </div>
    )
}

export default Cart