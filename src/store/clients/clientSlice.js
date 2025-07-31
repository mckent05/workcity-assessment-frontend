import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  clients: [],
  client: {},
};

const clientSlice = createSlice({
  name: "clients",
  initialState,
  reducers: {
    handleLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    getClients: (state, action) => {
      state.clients = action.payload;
    },
    getClient: (state, action) => {
      state.client = { ...action.payload };
    },
    addClient: (state, action) => {
      state.clients.push(action.payload);
    },
    updateClient: (state, action) => {
      const updatedClient = action.payload;
      state.clients = state.clients.map((client) =>
        client._id === updatedClient._id ? { ...updatedClient } : client
      );
      state.client = updatedClient;
    },
    deleteClient: (state, action) => {
      state.clients = state.clients.filter(
        (client) => client._id !== action.payload
      );
    },
  },
});

export const {
  handleLoading,
  getClients,
  getClient,
  addClient,
  updateClient,
  deleteClient,
} = clientSlice.actions;
export default clientSlice.reducer;
