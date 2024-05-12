import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userSlice from '../features/user/userSlice'
import fileSlice from '../features/file/fileSlice'

const rootReducer = combineReducers({
    user: userSlice,
    file: fileSlice
})

const store = configureStore({
    reducer: rootReducer,
    devTools: true,
})

export default store