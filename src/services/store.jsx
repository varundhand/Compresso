import { configureStore } from '@reduxjs/toolkit'

import { articleApi } from './article'

export const store = configureStore({
  reducer: {
    [articleApi.reducerPath]: articleApi.reducer
  }, // reducers allows us to grab the specific slice/reducer which we need for our project
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(articleApi.middleware) // middleware allows to modify the state before we get it 
})