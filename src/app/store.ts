import { configureStore } from '@reduxjs/toolkit'
import itemsReducer from '../features/items/itemsSlice'

const store = configureStore({
    reducer: {
        // Add your reducers here   
        items: itemsReducer,
    }
})

export default store

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch