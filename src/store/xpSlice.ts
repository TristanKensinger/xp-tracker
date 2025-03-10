import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface XpEntry {
  id: string;
  pillarId: string;
  activityName: string;
  xpAmount: number;
  startTime?: string;
  endTime?: string;
  notes?: string;
}

const xpSlice = createSlice({
  name: "xp",
  initialState: [] as XpEntry[],
  reducers: {
    addXpEntry: (state, action: PayloadAction<XpEntry>) => {
      state.push(action.payload);
    },
  },
});

export const { addXpEntry } = xpSlice.actions;
export default xpSlice.reducer;
