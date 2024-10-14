import { ReactNode } from "react";

export enum ModelType {
    Company,
    Chart
}

export type Model = CompanyInfo | ChartInfo;

export interface CompanyInfo {
    name: string,
    description?: string,
    phoneNumber: string,
    model: ModelType.Company
}

export interface ChartInfo {
    children: ReactNode,
    chartTitle: string,
    chartDescription?: string,
    model: ModelType.Chart
}

export interface CardInfo {
    cardTitle: string,
    cardValue: string,
    cardExtra?: string
}

export interface ListInfo<T> {
    title: string,
    data: T[]
}