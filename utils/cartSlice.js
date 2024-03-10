import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        items:[],
    },
    reducers:{
        addItem:(initialState,action)=>{
            initialState.items.push(action.payload);
        },
        removeItem:(initialState,action)=>{
            initialState.items.splice(action.payload, 1);
        },
        clearCart:(initialState)=>{
            initialState.items = []; 
        }
    }   
});

export const {addItem,removeItem,clearCart} = cartSlice.actions;    
export default cartSlice.reducer;


