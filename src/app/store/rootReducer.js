import { combineReducers } from "@reduxjs/toolkit"; 
import ModalSlice from "../slices/ModalSlice";

const rootReducers = combineReducers({
  ModalSlice,
});

export default rootReducers;
