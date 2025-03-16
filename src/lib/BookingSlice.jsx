import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  reservations: []
};

const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    // عند الضغط على الزر، نقوم بإضافة المنتج إلى قائمة الحجوزات
    bookReservation: (state, action) => {
      state.reservations.push(action.payload);
    }
  }
});

export const { bookReservation } = bookingSlice.actions;
export default bookingSlice.reducer;