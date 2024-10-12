import { ChartInfo } from "../types/ChartInfo";

export default function ChartCard(chartInfo: ChartInfo) {
    return (
        <div className="bg-white w-full h-full rounded-xl p-4 text-[#2C3E50] shadow-xl">
            <p>{chartInfo.chartTitle}</p>
            <div className="flex items-center justify-center h-full">
                {chartInfo.children}
            </div>
        </div>
    )
}