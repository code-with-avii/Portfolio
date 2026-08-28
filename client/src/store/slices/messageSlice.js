import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3500/api";

const initialState = {
  messages: [],
  loading: false,
  error: null,
};

// Async Thunks
export const fetchMessages = createAsyncThunk(
  "messages/fetchMessages",
  async (_, { getState }) => {
    const token = getState().auth.token;
    const response = await fetch(`${API_URL}/messages`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) throw new Error("Failed to fetch messages");
    return await response.json();
  },
);

export const toggleMessageRead = createAsyncThunk(
  "messages/toggleMessageRead",
  async ({ id, isRead }, { getState }) => {
    const token = getState().auth.token;
    const response = await fetch(`${API_URL}/messages/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ isRead }),
    });
    if (!response.ok) throw new Error("Failed to update message status");
    return await response.json();
  },
);

export const deleteMessage = createAsyncThunk(
  "messages/deleteMessage",
  async (id, { getState }) => {
    const token = getState().auth.token;
    const response = await fetch(`${API_URL}/messages/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) throw new Error("Failed to delete message");
    return id;
  },
);

export const messageSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch Messages
      .addCase(fetchMessages.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMessages.fulfilled, (state, action) => {
        state.loading = false;
        state.messages = action.payload;
      })
      .addCase(fetchMessages.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to load messages";
      })
      // Toggle Read Status
      .addCase(toggleMessageRead.fulfilled, (state, action) => {
        const index = state.messages.findIndex(
          (m) => m._id === action.payload._id,
        );
        if (index !== -1) {
          state.messages[index] = action.payload;
        }
      })
      // Delete Message
      .addCase(deleteMessage.fulfilled, (state, action) => {
        state.messages = state.messages.filter((m) => m._id !== action.payload);
      });
  },
});

export default messageSlice.reducer;
