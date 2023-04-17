import {createSlice} from '@reduxjs/toolkit';

import {UsersData} from '../FakeData';

export const userSlice = createSlice({
  name: 'users',
  initialState: {value: UsersData},
  reducers: {
    addUser: (state, action) => {
      console.log(state, action);
      state.value.push(action.payload);
    },
    deleteUser: (state, action) => {
      console.log(state, action);
      state.value = state.value.filter(user => user.id !== action.payload.id);
    },
    updateUsername: (state, action) => {
      console.log(state, action);
      state.value.map(user => {
        if (user.id === action.payload.id) {
          user.username = action.payload.name;
        }
      });
    },
  },
});

export const {addUser, deleteUser, updateUsername} = userSlice.actions;
export default userSlice.reducer;
