import { createSlice } from '@reduxjs/toolkit'
import data from '../../lib/data.json'
import { Desert } from '../../lib/types'

const initalState: Desert[] = data

const itemsSlice = createSlice({
    name: 'items',
    initialState: initalState,
    reducers: {
        setCartCount: (state, action) => {
            console.log(action.payload);

            const item = state.find(desert => action.payload.id === desert.id)
            if (item)
                item.cartQuantity = action.payload.cartQuantity
        },
    },
})

export const { setCartCount } = itemsSlice.actions

export default itemsSlice.reducer       