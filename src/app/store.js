import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import emailListReducer from "../features/emailList/emailListSlice";
import emailBodyReducer from "../features/emailBody/emailBodySlice";
import filterReducer from "../features/filter/filterSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        emailList: emailListReducer,
        emailBody: emailBodyReducer,
        filter: filterReducer,
    },
});
