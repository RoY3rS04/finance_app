import { ListInfo, Model, ModelType } from "../types/myTypes"
import { ListItem } from "./ListItem"

export default function List<T extends Model>(listInfo: ListInfo<T>) {

    return (
        <div className="bg-white w-full h-full rounded-xl p-4 text-[#2C3E50] shadow-xl">
            <p className="text-xl font-medium">{listInfo.title}</p>
            <div className="grid grid-cols-5 gap-y-6 justify-items-center text-lg mt-5">
                {getListHeaders(listInfo.data[0].model)}
                {/*<div className="flex items-center justify-between mt-4">
                    {getListHeaders(listInfo.data[0].model)}
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                {listInfo.data.map(item => {
                    return <div className="flex items-center justify-between">
                        <ListItem item={item}></ListItem>
                    </div>
                })}*/}
                {listInfo.data.map(item => {
                    return <ListItem item={item}></ListItem>
                })}
            </div>
        </div>
    )
}

function getListHeaders(model: ModelType) {
    switch (model) {
        case ModelType.Company: {
            return (
                <>
                    <p>Name</p>
                    <p>Phone Number</p>
                    <p>Description</p>
                    <p></p>
                    <p></p>
                </>
            )
        }
    }
}