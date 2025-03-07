import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

import { matchesApi } from './services/matches'

export const store = configureStore({
  reducer: {
    [matchesApi.reducerPath]: matchesApi.reducer,
  },


  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(matchesApi.middleware),
})
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch