import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    // configuration
    name: "cart",
    initialState: {
        // initial `state` of slice
        items: []
    },
    reducers: {
        // reducer functn correcponding to the actions
        // action ~~ reducer function (make changes to ) (takes two arguments)
        addItem: (state, action) =>{
            state.items.push(action.payload)
            console.log(action.payload)
        },

        removeItem: (state, action) => {
            state.items = state.items.filter(item =>
                item.card.info.id != action.payload
            )
        },

        clearCart: (state, action) => {
            // state.items = []
            state.items.length = 0
        }
    }

})

export const {addItem, removeItem, clearCart} = cartSlice.actions

export default cartSlice.reducer