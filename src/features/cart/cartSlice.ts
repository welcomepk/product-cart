
import { createSlice } from '@reduxjs/toolkit'
import { Desert, CartItem } from "../../lib/types"
import { PayloadAction } from '@reduxjs/toolkit'

const initialState: CartItem[] = []


const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action: PayloadAction<CartItem>) {
            state.unshift(action.payload)
        }
    }
})

export const { addToCart } = cartSlice.actions
export default cartSlice.reducer