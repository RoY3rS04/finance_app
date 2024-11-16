import { useSubMenusStore } from "../stores/subMenusStore";
import OptionsSubMenu from "./OptionsSubMenu";

export default function PeriodListItem({ period }) {

    const { subMenus, setMenus } = useSubMenusStore();
    
    return (
        <>
            <a href={`/periods/${period.id}`}>{period.description}</a>
            <div>{period.created_at}</div>
            <div className="relative w-20">
                <button onClick={() => setMenus(<OptionsSubMenu/>, period.id)} className="flex flex-col items-center text-gray-500">
                    <svg className="h-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512"><path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z" /></svg>
                </button>
                {subMenus[0]?.id === period.id && subMenus[0].subMenu}
            </div>
        </>
    )

}