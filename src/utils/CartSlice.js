import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name:"cart",
    initialState:{
        items:[],
    },
    reducers:{
        addItem: (state, action) => {
            //redux toolkit uses immer behind the scene
            //immer is a library which find the difference
            state.items.push(action.payload);
        },
        removeItem: (state, action) =>{
            state.items.pop();
        },
        clearCart: (state,action) =>{
            state.items.length = 0;
        },
    },
});

export const {addItem, removeItem, clearCart} = CartSlice.actions;
export default CartSlice.reducer;