import { ReactNode } from "react";

export enum ModelType {
    Company,
    Chart
}

export enum File_Folder {
    File,
    Folder
}

interface CouldHasChildren {
    children?: ReactNode,
}

export type Model = CompanyInfo;

export interface CompanyInfo {
    name: string,
    description?: string,
    phoneNumber: string,
    model: ModelType.Company
}

export interface ChartInfo extends CouldHasChildren {
    chartTitle: string,
    chartDescription?: string,
}

export interface CardInfo extends CouldHasChildren {
    cardTitle: string,
    cardValue: string,
    cardExtra?: string
}

export interface ListInfo<T> {
    title: string,
    data: T[]
}

export interface FileOrFolder {
    name: string,
    url: string,
    type: File_Folder
}

export interface BalanceSheet {
    assets: Account[],
    liabilities: Account[],
    capital: Account[]
}

interface Account {
    name: string,
    value: number
}

type AssetAccount = "Caja" | "Banco" | "Inversiones"