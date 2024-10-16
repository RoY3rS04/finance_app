import { CardInfo } from "../types/myTypes";

export function InfoCard(cardInfo : CardInfo) {
    return (
        <div className="bg-white w-full rounded-xl p-4  flex flex-col justify-between text-[#2C3E50] shadow-xl">
            <div className="flex items-center justify-between">
                <p className="font-medium text-[1rem]">{cardInfo.cardTitle}</p>
                {cardInfo.children}
            </div>
            <p className="font-medium text-4xl">{cardInfo.cardValue}</p>
            <p className="text-sm">{cardInfo?.cardExtra}</p>
        </div>
    )
}