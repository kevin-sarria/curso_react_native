import { create } from "zustand";

export interface CounterState {
    count: number;

    incrementBy: ( value: number ) => void;
}

export const useCounterStore = create<CounterState>()((set, get) => ({
    count: 10,
    incrementBy: (value: number) => {
        set((state) => ({ count: state.count + value }))
    }
}));