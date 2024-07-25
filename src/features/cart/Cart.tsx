
import { useSelector } from 'react-redux'
import { RootState } from '../../app/store'
import IconCarbonNeutral from "../../assets/images/icon-carbon-neutral.svg"
import IconRemove from "../../assets/images/icon-remove-item.svg"
import { CartItem as CartItemType } from '../../lib/types'

interface Item {
    name: string,
    price: number,
    count: number
}
const CloseIcon = () => {
    return <img
        className='border border-rose-300 hover:cursor-pointer hover:border-rose-400  p-[2px] rounded-full'
        src={IconRemove}
        alt="remove icon"
    />
}

const CartItem = ({ item }: { item: Item }) => {
    return (
        <div className=' flex h-fit gap-2 items-center justify-between border-b border-rose-100'>
            <div className=''>
                <h3 className='mb-1'>{item.name}</h3>
                <div className='mb-3'>
                    <span className='text-red inline-block font-2  mr-4'>${item.count}x</span>
                    <span className='text-rose-500'>@ ${item.price}</span>
                    <span className='text-rose-900 ml-1 inline-block'>${item.price * item.count}</span>
                </div>
            </div>
            <CloseIcon />
        </div>
    )
}
const CartItems = ({ cartItems }: { cartItems: CartItemType[] }) => {

    return (
        <>
            {
                cartItems.map(item => <CartItem key={item.id} item={{
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
        <div className='grid gap-4 bg-white p-6 rounded-2xl'>

            {/* title */}
            <h1 className='text-red font-2 text-xl font-rht' >Your Cart 0</h1>

            {/* cart items */}
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
        </div>
    )
}

export default Cart