import { ReactNode } from "react";

export interface ChartInfo {
    children: ReactNode,
    chartTitle: string,
    chartDescription?: string
}