import {configureStore} from '@reduxjs/toolkit'
import todoSlice from './reducer';

const store = configureStore({
    reducer:{
        todos:todoSlice
    }
})
export default store;