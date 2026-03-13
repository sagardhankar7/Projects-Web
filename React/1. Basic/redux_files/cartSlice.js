import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    // configuration
    name: "cart",
    initialState: {
        // initial `state` of slice
        items: ["Roti", "Chawal", "Burger","Fries"]
    },
    reducers: {
        // reducer functn correcponding to the actions
        // action ~~ reducer function (make changes to ) (takes two arguments)
        addItem: (state, action) =>{
            state.items.push(action.payload)
        },

        removeItem: (state, action) => {
            state.items.pop()
        },

        clearCart: (state, action) => {
            // state.items = []
            state.items.length = 0
        }
    }

})

export const {addItem, removeItem, clearCart} = cartSlice.actions

export default cartSlice.reducer