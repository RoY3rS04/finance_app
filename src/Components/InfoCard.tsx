import { CardInfo } from "../types/myTypes";

export function InfoCard(cardInfo : CardInfo) {
    return (
        <div className="bg-white w-full rounded-xl p-4  flex flex-col justify-between text-[#2C3E50] shadow-xl">
            <p className="font-medium text-[1rem]">{cardInfo.cardTitle}</p>
            <p className="font-medium text-4xl">{cardInfo.cardValue}</p>
            <p className="text-sm">{cardInfo?.cardExtra}</p>
        </div>
    )
}