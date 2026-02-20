import { create } from "zustand";
import { BLACK_COLOR, SCALE_16_INCH } from "../constants";

const useMacbookStore = create((set) => ({
  color: BLACK_COLOR,
  setColor: (color) => set({ color }),

  scale: SCALE_16_INCH,
  setScale: (scale) => set({ scale }),

  texture: "/videos/feature-1.mp4",
  setTexture: (texture) => set({ texture }),

  reset: () =>
    set({
      color: BLACK_COLOR.value,
      scale: SCALE_16_INCH.value,
      texture: "/videos/feature-1.mp4",
    }),
}));

export default useMacbookStore;
