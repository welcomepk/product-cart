import { useState } from 'react'
import { createPortal } from 'react-dom'
import { useSelector } from 'react-redux'
import { RootState } from '../../app/store'
import IconCarbonNeutral from "../../assets/images/icon-carbon-neutral.svg"
import Illustrationemptycart from "../../assets/images/illustration-empty-cart.svg"
import CartItems from './CartItems'
import RightIcon from "../../assets/images/icon-order-confirmed.svg"

const RedButton = ({ onClick, text }: { text: string, onClick: () => void }) => {
    return <button onClick={onClick} className='bg-red hover:bg-red-dark focus:bg-red-dark focus:ring-red-dark ring-offset-2 focus:ring-2  transition-all text-rose-50 px-4 py-3 font-1 rounded-full' >{text}</button>
}

export function Modal({ onClose }: { onClose: () => void }) {
    const cartItems = useSelector((state: RootState) => state.cart)
    console.log(cartItems);

    return (
        <div className="fixed z-10 top-0 bg-black bg-opacity-50 left-0 right-0 bottom-0 p-4 grid place-items-center">
            <div className='bg-rose-50 min-w-[300px] rounded-lg p-6 grid gap-6 text-rose font-rht'>
                <img className='h-10 w-10' src={RightIcon} alt="confirmed icon" />
                <div>
                    <h2 className='text-2xl'>Order Confirmed</h2>
                    <p className='text-rose-500 '>We hope you enjy your food!</p>
                </div>
                <div>
                    {
                        cartItems.map(item => (
                            <h1>{item.name}</h1>
                        ))
                    }
                </div>
                <RedButton onClick={onClose} text='Start New Order' />
            </div>
        </div>
    );
}

const Cart = () => {
    const cartItems = useSelector((state: RootState) => state.cart)
    const total = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0)
    const [showModal, setShowModal] = useState(false);
    const confirmOrder = () => {
        setShowModal(true)
    }
    return (
        <div className='grid gap-4 bg-white px-6 pt-8 pb-10 rounded-2xl'>
            {showModal && createPortal(
                <Modal onClose={() => setShowModal(false)} />,
                document.body
            )}

            <h1 className='text-red font-2 text-xl font-rht' >Your Cart ({cartItems.length})</h1>
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
                        <RedButton onClick={confirmOrder} text='Confirm Order' />
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