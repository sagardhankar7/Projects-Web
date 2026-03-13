import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./redux_files/cartSlice"

const reduxStore = configureStore({
    reducer: {
        cart: cartReducer
    }
});

export default reduxStore;