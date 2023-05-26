import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    user: null,
    token: null,
    isLoged: false,
};

export const login = createAsyncThunk(
    "userSlice/login",
    async(user, { dispatch, rejectWithValue }) => {
        try {
            const { data } = await axios.post(`/login`, user);
            // se guarda todo el usuario en el localstorage con el token incluido
            localStorage.setItem("user", JSON.stringify(data.data));
            return data.data;
        } catch (error) {
            return rejectWithValue(error.response.data.message);
        }
    }
);

export const verifyLogin = createAsyncThunk(
    "userSlice/verifyLogin",
    async(_, { dispatch, rejectWithValue }) => {
        try {
            const data = localStorage.getItem(user);
            if (!data) {
                return dispatch(logout());
            }

            return JSON.parse(data);
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const logout = createAsyncThunk("userSlice/logout", async(_, {}) => {
    localStorage.removeItem("user");
});

const userSlice = createSlice({
    name: "userSlice",
    initialState,
    reducers: {
        setLoged: (state, action) => {
            state.isLoged = true;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(login.pending, (state, action) => {
            state.isLoged = false;
        });
        builder.addCase(login.fulfilled, (state, action) => {
            if (action.payload) {
                state.user = action.payload;
                state.token = action.payload.token;
                state.isLoged = true;
            }
        });
        builder.addCase(login.rejected, (state, action) => {
            state.isLoged = false;
            state.user = null;
            state.token = null;
        });

        //VERIFYLOGIN
        builder.addCase(verifyLogin.fulfilled, (state, action) => {
            if (action.payload) {
                state.user = action.payload;
                state.token = action.payload.token;
                state.isLoged = true;
            }
        });

        //LOGOUT
        builder.addCase(logout.fulfilled, (state, action) => {
            state.isLoged = false;
            state.user = null;
            state.token = null;
        });
    },
});

export const { setLoged } = userSlice.actions;

export default userSlice.reducer;


