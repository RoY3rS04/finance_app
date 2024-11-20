import PeriodListItem from "./PeriodListItem";

export default function PeriodsList({ list }) {
    
    return (
        <div>
            <div className="grid grid-cols-3 gap-x-5 mb-5">
                <p>Descripcion</p>
                <p>Fecha de creacion</p>
                <p></p>
            </div>
            <div className="grid grid-cols-3 gap-x-5 gap-y-3">
                {list.map(el => <PeriodListItem key={el.id} period={el}></PeriodListItem>)}
            </div>
        </div>
    )

}