
import { createSlice } from '@reduxjs/toolkit'
import { CartItem } from "../../lib/types"
import { PayloadAction } from '@reduxjs/toolkit'

const initialState: CartItem[] = []


const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action: PayloadAction<CartItem>) {
            const existingItem = state.find(item => item.id === action.payload.id)
            if (existingItem) {
                existingItem.quantity += action.payload.quantity
            } else {
                state.unshift(action.payload)
            }
        },
        decrementItemFromCart(state, action: PayloadAction<{ id: string, quantity: number }>) {
            const existingItem = state.find(item => item.id === action.payload.id)
            if (existingItem && existingItem.quantity > 1) {
                existingItem.quantity -= 1
            } else {
                return state.filter(item => item.id !== action.payload.id)
            }
        },
        removeFromCart(state, action: PayloadAction<{ id: string }>) {
            return state.filter(item => item.id !== action.payload.id)
        }
    }
})

export const { addToCart, decrementItemFromCart, removeFromCart } = cartSlice.actions
export default cartSlice.reducer