import { create } from "zustand";
import { BLACK_COLOR, SCALE_16_INCH } from "../constants";

const useMacbookStore = create((set) => ({
  color: BLACK_COLOR,
  setColor: (color) => set({ color }),

  scale: SCALE_16_INCH,
  setScale: (scale) => set({ scale }),

  reset: () => set({ color: BLACK_COLOR.value, scale: SCALE_16_INCH.value }),
}));

export default useMacbookStore;
