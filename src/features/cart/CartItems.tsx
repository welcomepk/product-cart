import { CartItem as CartItemType } from '../../lib/types'
import CartItem from './CartItem'

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

export default CartItems