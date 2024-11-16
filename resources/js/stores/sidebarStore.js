import { create } from "zustand";

export const useSidebarStore = create((set) => ({
    isCollapsed: false,
    toggle: () => set(({ isCollapsed }) => ({ isCollapsed: !isCollapsed })),
}))