
import React from 'react'

interface Item {
    name: string,
    price: number,
    count: number
}
const CloseIcon = () => {
    return <span>x</span>
}

const CartItem = ({ item }: { item: Item }) => {
    return (
        <div className='my-4 flex h-fit gap-2 items-center justify-between border-b border-rose-100'>
            <div className=''>
                <h3 className='mb-1'>{item.name}</h3>
                <div className='mb-3'>
                    <span className='text-red'>${item.count}x</span>
                    <span className='text-rose-500'>@ ${item.price}</span>
                    <span className='text-rose-900'>${item.price}</span>
                </div>
            </div>
            <CloseIcon />
        </div>
    )
}
const CartItems = () => {

    return (
        <>
            <CartItem item={{
                name: "Classic Trimsum",
                price: 5.50,
                count: 2
            }} />
            <CartItem item={{
                name: "Pizza huu",
                price: 8.50,
                count: 10
            }} />
            <CartItem item={{
                name: "Pizza huu",
                price: 8.50,
                count: 10
            }} />
            <CartItem item={{
                name: "pasta huu",
                price: 45.50,
                count: 15
            }} />
        </>
    )
}
const Cart = () => {
    return (
        <div className='grid gap-4 bg-white p-6 rounded-2xl'>

            {/* title */}
            <h1 className='text-red font-2 text-xl font-rht' >Your Cart 0</h1>

            {/* cart items */}
            <CartItems />

            {/* total */}
            <div className='text-rose-900 flex items-center justify-between'>
                <span className=''>Order Total</span>
                <span className='font-2 text-xl'>$46.50</span>
            </div>

        </div>
    )
}

export default Cart