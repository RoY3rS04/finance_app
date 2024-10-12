import { ListInfo } from "../types/ListInfo";

export default function List<T>(listInfo: ListInfo<T>) {
    return (
        <div className="bg-white w-full h-full rounded-xl p-4 text-[#2C3E50] shadow-xl">
            <p>{listInfo.title}</p>
            <div className="flex flex-col">
                {
                    //TODO
                }
            </div>
        </div>
    )
}