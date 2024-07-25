import { configureStore } from '@reduxjs/toolkit'
import itemsReducer from '../features/items/itemsSlice'
import cartReducer from '../features/cart/cartSlice'

const store = configureStore({
    reducer: {
        // Add your reducers here   
        items: itemsReducer,
        cart: cartReducer
    }
})

export default store

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch