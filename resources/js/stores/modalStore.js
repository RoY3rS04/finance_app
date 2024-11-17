import { create } from "zustand";

export const useModalStore = create((set) => ({
    isActive: false,
    toggle: () => set(({ isActive }) => ({ isActive: !isActive })),
    modal: null,
    setModal: (newModal) => set(() => ({modal: newModal}))
}))