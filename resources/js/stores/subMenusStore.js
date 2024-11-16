import { create } from "zustand";

export const useSubMenusStore = create((set) => ({
    subMenus: [],
    setMenus: (subMenu, id) => set(({ subMenus }) => {


        if (subMenus.length > 0) {

            const lastMenuID = subMenus[0].id;

            subMenus.pop();
            
            if (lastMenuID !== id) {
                subMenus.push({subMenu, id});
            }

            return ({ subMenus });
        }

        subMenus.push({subMenu, id});
        return ({ subMenus });
    })
}));