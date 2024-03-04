import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        items:["pizaa","burger"],
    },
    reducers:{
        addItem:(initialState,action)=>{
            initialState.items.push(action.payload);
        },
        removeItem:(initialState,action)=>{
            initialState.items.pop();
        },
        clearCart:(initialState)=>{
            initialState.items = []; 
        }
    }
});

export const {addItem,removeItem,clearCart} = cartSlice.actions;
export default cartSlice.reducer;