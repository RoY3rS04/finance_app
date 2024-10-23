import { AdminExpenseAccount, AssetCirAccount, AssetDifAccount, AssetNoCirAccount, CapitalAccount, LiabilityCirAccount, LiabilityNoCirAccount, OtherIns, SaleAccount, SaleCostAccount, SalesExpenseAccount } from '../types/myTypes';

export function isAssetCirAccount(account: string): account is AssetCirAccount {
    return [
        'caja',
        'efectivo',
        'inversiones',
        'banco',
        'cuentas_cobrar',
        'inventario',
        'docs_cobrar'
    ].includes(account)
}

export function isAssetNoCirAccount(account: string): account is AssetNoCirAccount {
    return [
        'terreno' ,
        'edificios' ,
        'dep_edificios' ,
        'maq_equipo' ,
        'dep_maq_equipo' ,
        'equipo_transporte' ,
        'dep_equipo_transp' ,
        'mob_equipo_oficina' ,
        'dep_mob_equipo_oficina'
    ].includes(account)
}

export function isAssetDifAccount(account: string): account is AssetDifAccount {
    return [
        'gastos_instalacion',
        'amort_gastos_inst',
        'gastos_org',
        'amort_gastos_org',
        'prop_publicidad',
        'franquicia',
        'rent_pagadas_ant'
    ].includes(account)
}

export function isLiabilityCirAccount(account: string): account is LiabilityCirAccount {
    return [
        'proveedores', 
        'imp_pagar', 
        'creditos_banc', 
        'acreedores_div', 
        'docs_pagar', 
        'sueldos_pagar'
    ].includes(account)
}

export function isLiabilityNoCirAccount(account: string): account is LiabilityNoCirAccount {
    return [
        'acreedores_hip',
        'docs_pagar_lp',
        'creditos_banc_lp',
        'rents_cobradas_anti',
        'interes_cobrados_anti'
    ].includes(account)
}

export function isCapitalAccount(account: string): account is CapitalAccount {
    return [
        'capital_social', 
        'reserva_legal', 
        'reserva_reinversion', 
        'utilidades_ret', 
        'utilidad_ejercicio'
    ].includes(account)
}

export function isSaleAccount(account: string): account is SaleAccount {
    return [
        'ventas',
        'desc_ventas',
        'dev_ventas'
    ].includes(account)
}

export function isSaleCostAccount(account: string): account is SaleCostAccount {
    return [
        'inv_inicial',
        'compras',
        'gastos_compras',
        'desc_compras',
        'inv_final'
    ].includes(account)
}

export function isSaleExpenseAccount(account: string): account is SalesExpenseAccount {
    return [
        'sueldos_comisiones', 
        'sueldos_ofi_ventas', 
        'viaticos', 
        'fletes_mercancias', 
        'dep_equipo_transp', 
        'telefono'
    ].includes(account)
}

export function isAdminExpenseAccount(account: string): account is AdminExpenseAccount {
    return [
        'sueldos_oficina',
        'servicios_pub',
        'dep_edificio',
        'dep_eq_oficina'
    ].includes(account)
}

export function isOthersInsAccount(account: string): account is OtherIns {
    return [
        'div_cobrados',
    ].includes(account)
}