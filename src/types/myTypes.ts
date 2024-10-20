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
    assets: {

    },
    liabilities: {

    },
    capital: {

    }
}

interface AssetsAccounts {
    circulantes: {
        [K in AssetCirAccount]: number
    },
    no_circulantes: {
        [K in AssetNoCirAccount]: number
    },
    diferidos: {
        [K in AssetDifAccount]: number
    }
}

interface LiabilitiesAccounts {
    circulantes: {
        [K in LiabilityCirAccount]: number
    },
    no_circulantes: {
        [K in LiabilityNoCirAccount]: number
    }
}

type CapitalAccounts = {
    [K in CapitalAccount]: number
}

interface ResultAccounts {
    ventas: {
        [K in SaleAccount]: number
    },
    costo_ventas: {
        [K in SaleCostAccount]: number
    },
    gasto_ventas: {
        [K in SalesExpenseAccount]: number
    },
    gasto_admin: {
        [K in AdminExpenseAccount]: number
    },
    otros_ingresos: {
        [K in OtherIns]: number
    }
}

export interface Period {
    balance_sheet: {
        assets: AssetsAccounts,
        liabilities: LiabilitiesAccounts,
        capital: CapitalAccounts
    },
    results_sheet: ResultAccounts
}

export type SheetType = 'balance_sheet' | 'results_sheet';

export type AccountType = 'circulantes' | 'no_circulantes' | 'diferidos';

export type AccountDiv = 'assets' | 'liabilities' | 'capital' | 'ventas' | 'costo_ventas' | 'gasto_ventas' | 'gastos_admin' | 'otros_ingresos';

export type AssetCirAccount = 'caja' |
    'efectivo' |
    'inversiones' |
    'banco' |
    'cuentas_cobrar' |
    'inventario' |
    'docs_cobrar';
    
export type AssetNoCirAccount = 'terreno' |
    'edificios' |
    'dep_edificios' |
    'maq_equipo' |
    'dep_maq_equipo' |
    'equipo_transporte' |
    'dep_equipo_transp' |
    'mob_equipo_oficina' |
    'dep_mob_equipo_oficina';

export type AssetDifAccount = 'gastos_instalacion' |
    'amort_gastos_inst' |
    'gastos_org' |
    'amort_gastos_org' |
    'prop_publicidad' |
    'franquicia' |
    'rent_pagadas_ant';

export type LiabilityCirAccount = 'proveedores' |
    'imp_pagar' |
    'creditos_banc' |
    'acreedores_div' |
    'docs_pagar' |
    'sueldos_pagar';

export type LiabilityNoCirAccount = 'acreedores_hip' |
    'docs_pagar_lp' |
    'creditos_banc_lp' |
    'rents_cobradas_anti' |
    'interes_cobrados_anti';

export type CapitalAccount = 'capital_social' |
    'reserva_legal' |
    'reserva_reinversion' |
    'utilidades_ret' |
    'utilidad_ejercicio';

export type SaleAccount = 'ventas' |
    'desc_ventas' |
    'dev_ventas';

export type SaleCostAccount = 'inv_inicial' |
    'compras' |
    'gastos_compras' |
    'desc_compras' |
    'inv_final';

export type SalesExpenseAccount = 'sueldos_comisiones' |
    'sueldos_ofi_ventas' |
    'viaticos' |
    'fletes_mercancias' |
    'dep_equipo_transp' |
    'telefono';

export type AdminExpenseAccount = 'sueldos_oficina' |
    'servicios_pub' |
    'dep_edificio';

export type OtherIns = 'div_cobrados';

export enum Accounts {
    AssetCirAccount,
    AssetNoCirAccount,
    AssetDifAccount,
    LiabilityCirAccount,
    LiabilityNoCirAccount,
    CapitalAccount,
    SaleAccount,
    SaleCostAccount,
    SaleExpenseAccount,
    AdminExpenseAccount,
    OtherIns
}

export interface AccountPath {
    sheet: SheetType,
    accountD: AccountDiv,
    accountT: AccountType,
    name: string
}

export interface DataStore {
    periods_q: number,
    periods: Period[],
    addPeriods: () => void,
    decreasePeriods: () => void,
    onChangeAccount: (period: number, accountPath: AccountPath, val: number) => void
}