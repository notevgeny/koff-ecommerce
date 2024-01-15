import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchAccessKey = createAsyncThunk(
  "auth/fetchAccessToken",
  async () => {
    const response = await fetch(
      "https://koff-api.vercel.app/api/users/accessKey",
    );

    if (!response.ok) {
      throw new Error("Не удалось получить токен доступа");
    }

    const data = await response.json();
    return data.accessKey;
  },
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    accessKey: localStorage.getItem("accessKey") || null,
    loading: false,
    error: null,
  },
  reducers: {
    removeToken(state) {
      state.accessKey = null;
      localStorage.removeItem("accessKey");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAccessKey.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAccessKey.fulfilled, (state, action) => {
        state.loading = false;
        state.accessKey = action.payload;
        localStorage.setItem("accessKey", action.payload);
        state.error = null;
      })
      .addCase(fetchAccessKey.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { removeKey } = authSlice.actions;
export default authSlice.reducer;
