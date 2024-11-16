import { create } from "zustand";

export const useModalStore = create((set) => ({
    isActive: false,
    toggle: () => set(({ isActive }) => ({ isActive: !isActive })),
}))