import { createSlice } from '@reduxjs/toolkit';

const initialState = [];
const status = () => 'Under construction';
const CategoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkStatus: (state) => {
      state = status();
      return state;
    },
  },
});

export const { checkStatus } = CategoriesSlice.actions;

export default CategoriesSlice.reducer;
