import { createSlice } from "@reduxjs/toolkit";


const ModalSlice = createSlice({
    name:'modal',
    initialState:{isOpen : false},
    reducers:{
        openModal(state,action){
            state.isOpen = action.payload;
        }
    }
})

export default ModalSlice.reducer;
export const ModalAction = ModalSlice.actions;