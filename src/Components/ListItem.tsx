import { Model, ModelType } from "../types/myTypes";

export function ListItem({ item }: { item: Model }) {

    return (
        <>
            {getItemValues(item)}
            <div className="flex items-center gap-x-3">
                <button className="bg-red-700 rounded-md text-white py-2 px-4 text-sm">Delete</button>
                <button className="bg-green-700 rounded-md text-white py-2 px-4 text-sm">Edit</button>
            </div>
        </>
    )
}

function getItemValues(item: Model) {

    switch (item.model) {
        case ModelType.Company: {
            return (
                <>
                    <p>{item.name}</p>
                    <p>{item.phoneNumber}</p>
                    <p>{item.description}</p>
                    <p></p>
                </>
            )
        }
    }

}