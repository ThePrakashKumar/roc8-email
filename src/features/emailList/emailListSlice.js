import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchEmail } from "./emailListAPI";

const initialState = { status: "", emails: [], number: 5 };

export const getEmail = createAsyncThunk("emailList/getEmail", () =>
    fetchEmail()
);

const emailListSlice = createSlice({
    name: "emailList",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getEmail.pending, (state) => {
                state.status = "loading";
            })
            .addCase(getEmail.fulfilled, (state, action) => {
                console.log(action.payload);
                state.emails = action.payload.list;
            });
    },
});

export default emailListSlice.reducer;
