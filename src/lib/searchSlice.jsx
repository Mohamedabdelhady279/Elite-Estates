
// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

// export const fetchProducts = createAsyncThunk(
//   "searchSlice/fetchProducts",
//   async () => {
//     const options = {
//       url: 'http://localhost:3000/listings',
//       method: 'GET',
//     };
//     const response = await axios.request(options);
//     let filtered = response.filter((item)=> Number(budget)>=item.price && item.location.city === String(location)  && item.property_details.type === String(type))
//     return filtered;
//   }
// );

// const productSlice = createSlice({
//   name: "searchSlice",
//   initialState: { products: [], status: 'idle' },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchProducts.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(fetchProducts.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.products = action.payload;
//       })
//       .addCase(fetchProducts.rejected, (state) => {
//         state.status = 'failed';
//       });
//   }
// });

// export const productReducer = productSlice.reducer;