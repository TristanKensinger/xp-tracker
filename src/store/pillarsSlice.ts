import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Pillar {
  id: string;
  name: string;
  color: string;
  icon?: string;
}

const pillarsSlice = createSlice({
  name: "pillars",
  initialState: [] as Pillar[],
  reducers: {
    addPillar: (state, action: PayloadAction<Pillar>) => {
      state.push(action.payload);
    },
  },
});

export const { addPillar } = pillarsSlice.actions;
export default pillarsSlice.reducer;
