import { BalanceSheet, Period } from '../types/myTypes';


export function createSheets(num_p: number): Period[] {

    const periods: Period[] = [];

    for (let i = 1; i <= num_p; i++) {
        const period: Period = {
            balance_sheet: {
                assets: {
                    circulantes: {
                        caja: undefined,
                        efectivo: undefined,
                        inversiones: undefined,
                        banco: undefined, 
                        cuentas_cobrar: undefined,
                        inventario: undefined,
                        docs_cobrar: undefined
                    },
                    no_circulantes: {
                        terreno: undefined,
                        edificios: undefined,
                        dep_edificios: undefined,
                        maq_equipo: undefined,
                        dep_maq_equipo: undefined,
                        equipo_transporte: undefined,
                        dep_equipo_transp: undefined,
                        mob_equipo_oficina: undefined,
                        dep_mob_equipo_oficina: undefined
                    },
                    diferidos: {
                        gastos_instalacion: undefined,
                        amort_gastos_inst: undefined,
                        gastos_org: undefined,
                        amort_gastos_org: undefined,
                        prop_publicidad: undefined,
                        franquicia: undefined,
                        rent_pagadas_ant: undefined
                    }
                },
                liabilities: {
                    circulantes: {
                        proveedores: undefined,
                        imp_pagar: undefined,
                        creditos_banc: undefined,
                        acreedores_div: undefined,
                        docs_pagar: undefined,
                        sueldos_pagar: undefined
                    },
                    no_circulantes: {
                        acreedores_hip: undefined,
                        docs_pagar_lp: undefined,
                        creditos_banc_lp: undefined,
                        rents_cobradas_anti: undefined,
                        interes_cobrados_anti: undefined
                    }
                },
                capital: {
                    capital_social: undefined,
                    reserva_legal: undefined,
                    reserva_reinversion: undefined,
                    utilidades_ret: undefined,
                    utilidad_ejercicio: undefined
                }
            },
            results_sheet: {
                ventas: {
                    ventas: undefined,
                    desc_ventas: undefined,
                    dev_ventas: undefined
                },
                costo_ventas: {
                    inv_inicial: undefined,
                    compras: undefined,
                    gastos_compras: undefined,
                    desc_compras: undefined,
                    inv_final: undefined
                },
                gasto_ventas: {
                    sueldos_comisiones: undefined,
                    sueldos_ofi_ventas: undefined,
                    viaticos: undefined,
                    fletes_mercancias: undefined,
                    dep_equipo_transp: undefined,
                    telefono: undefined
                },
                gasto_admin: {
                    sueldos_oficina: undefined,
                    servicios_pub: undefined,
                    dep_edificio: undefined
                },
                otros_ingresos: {
                    div_cobrados: undefined
                }
            }
        }

        periods.push(period);
    }

    return periods;
}