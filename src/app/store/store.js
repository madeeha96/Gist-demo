import create from "zustand";

// zustand store based on hooks
export default create((set) => ({
  gists: [],
  setGists: (item) => set(() => ({ gists: item })),

  gist: {},
  setCart: (item) => set(() => ({ gist: item })),
}));
