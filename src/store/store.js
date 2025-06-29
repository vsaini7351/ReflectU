import {configureStore} from '@reduxjs/toolkit'
import authSlice from './authSlice'

const store=configureStore({
    reducer:{
        auth:authSlice //dusra tareeka ese bhi chize kar sakte hai
    }
});

export default store;

