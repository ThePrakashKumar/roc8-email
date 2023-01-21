import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import emailListReducer from "../features/emailList/emailListSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        emailList: emailListReducer,
    },
});
