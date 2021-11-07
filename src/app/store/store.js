import create from "zustand";

// zustand store
export default create((set) => ({
  gists: [],
  setGists: (item) => set(() => ({ gists: item })),

  gistsLoading: false,
  setGistsLoading: (loading) => set(() => ({ gistsLoading: loading })),

  gistsErr: null,
  setGistsErr: (err) => set(() => ({ gistsErr: err })),

  username: null,
  setUsername: (item) => set(() => ({ username: item })),
}));
