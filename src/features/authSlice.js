import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { baseUrl } from './api';
import jwtDecode from 'jwt-decode';

const initialState = {
  token: localStorage.getItem('token'),
  email: '',
  firstName: '',
  lastName: '',
  idNumber: '',
  password: '',
  phoneNumber: '',
  role: '',
  _id: '',
  registerStatus: '',
  registerError: '',
  loginStatus: '',
  loginError: '',
  userLoaded: false,
};

export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (values, { rejectWithValue }) => {
    try {
      const token = await axios.post(`${baseUrl}/users`, {
        email: values.email,
        password: values.password,
        firstName: values.firstName,
        lastName: values.lastName,
        idNumber: values.idNumber,
        phoneNumber: values.phoneNumber,
        role: values.role,
      });

      localStorage.setItem('token', token.data);

      return token.data;
    } catch (err) {
      if (err.response.status === 409) {
        // User already exists
        return rejectWithValue('User already exists');
      } else {
        console.log(err.response.data);
        return rejectWithValue(err.response.data);
      }
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loadUser(state, action) {
      const token = state.token;

      if (token) {
        const user = jwtDecode(token);

        return {
          ...state,
          token,
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
          idNumber: user.idNumber,
          phoneNumber: user.phoneNumber,
          role: user.role,
          _id: user._id,
          userLoaded: true,
        };
      }
    },
    logoutUser(state, action) {
      localStorage.removeItem('token');

      return {
        ...state,
        token: '',
        email: '',
        firstName: '',
        lastName: '',
        idNumber: '',
        role: '',
        phoneNumber: '',
        _id: '',
        registerStatus: '',
        registerError: '',
        loginStatus: '',
        loginError: '',
        userLoaded: false,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state, action) => {
        return { ...state, registerStatus: 'pending' };
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        if (action.payload) {
          const user = jwtDecode(action.payload);
          return {
            ...state,
            token: action.payload,
            email: user.email,
            _id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            idNumber: user.idNumber,
            phoneNumber: user.phoneNumber,
            role: user.role,
            registerStatus: 'success',
          };
        }
        return state;
      })
      .addCase(registerUser.rejected, (state, action) => {
        return {
          ...state,
          registerStatus: 'rejected',
          registerError: action.payload,
        };
      });
  },
});

// trial,, do not mix with good code

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (values, { rejectWithValue }) => {
    try {
      const token = await axios.post(`${baseUrl}/members`, {
        email: values.email,
        password: values.password,
      });

      localStorage.setItem("token", token.data);
      return token.data;
    } catch (error) {
      console.log(error.response);
      return rejectWithValue(error.response.data);
    }
  }
);

// end of trial

export const { loadUser, logoutUser } = authSlice.actions;

export default authSlice.reducer;
