import { createSlice } from '@reduxjs/toolkit'
import data from '../../lib/data.json'
import { Desert } from '../../lib/types'

const initalState: Desert[] = data

const itemsSlice = createSlice({
    name: 'items',
    initialState: initalState,
    reducers: {
        setItems: (state, action) => {
            state.push(action.payload)
        },
    },
})

export const { setItems } = itemsSlice.actions

export default itemsSlice.reducer       