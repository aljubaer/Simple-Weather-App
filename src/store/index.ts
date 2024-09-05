import axios from "axios";
import { create } from "zustand";
import { buildUrl } from "../utils";
import { QueryParams } from "../types";

type SearchTokenStore = {
  searchToken: string;
  update: (val: string) => void;
};

export const useSearchTokenStore = create<SearchTokenStore>((set) => ({
  searchToken: "Dhaka",
  update: (val: string) => set(() => ({ searchToken: val })),
}));

type WeatherDataState = {
    loading: boolean,
    success: boolean,
    error: boolean,
    url: string | null,
    data: any,
    errorData: any,
    execute: () => void
}

const initialState = {
  loading: false,
  success: false,
  error: false,
  url: null,
  data: null,
  errorData: null,
};

  export const useGetWeatherData = create<WeatherDataState>((set, get) => ({
    ...initialState,
  
    execute: async () => {
      set({ ...initialState, loading: true });
      try {
        const res = await axios.get(buildUrl(useSearchTokenStore.getState().searchToken));
        console.log(res);
        set({ ...initialState, success: true, data: res.data });
      } catch (err) {
        console.error("Error in data fetch:", err);
        set({ ...initialState, error: true, errorData: err });
      }
    },
  }));
