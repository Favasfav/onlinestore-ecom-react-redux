import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
import 'sweetalert';
import swal from "sweetalert";

export const loginUser = createAsyncThunk('user/loginUser', async (userData, { rejectWithValue }) => {
  try {
    const response = await axios.post('http://127.0.0.1:8000/accounts/login/', userData);
    console.log(response.data) 


    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user:  JSON.parse(localStorage.getItem('user')) || null,
    loading: false,
    error: null
  },
  reducers: {
    logoutUser: (state) => {
      localStorage.removeItem('user');
      state.user = null;
    }



  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        
        state.loading = false;
        state.user = action.payload;
        localStorage.setItem('user', JSON.stringify(state.user));
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
export const {logoutUser}=userSlice.actions;
export default userSlice.reducer;
