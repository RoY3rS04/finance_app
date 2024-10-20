import { BalanceSheet, Period } from '../types/myTypes';


export function createSheets(num_p: number): Period[] {

    const periods: Period[] = [];

    for (let i = 1; i <= num_p; i++) {
        const period: Period = {
            balance_sheet: {
                assets: {
                    circulantes: {
                        caja: 0,
                        efectivo: 0,
                        inversiones: 0,
                        banco: 0, 
                        cuentas_cobrar: 0,
                        inventario: 0,
                        docs_cobrar: 0
                    },
                    no_circulantes: {
                        terreno: 0,
                        edificios: 0,
                        dep_edificios: 0,
                        maq_equipo: 0,
                        dep_maq_equipo: 0,
                        equipo_transporte: 0,
                        dep_equipo_transp: 0,
                        mob_equipo_oficina: 0,
                        dep_mob_equipo_oficina: 0
                    },
                    diferidos: {
                        gastos_instalacion: 0,
                        amort_gastos_inst: 0,
                        gastos_org: 0,
                        amort_gastos_org: 0,
                        prop_publicidad: 0,
                        franquicia: 0,
                        rent_pagadas_ant: 0
                    }
                },
                liabilities: {
                    circulantes: {
                        proveedores: 0,
                        imp_pagar: 0,
                        creditos_banc: 0,
                        acreedores_div: 0,
                        docs_pagar: 0,
                        sueldos_pagar: 0
                    },
                    no_circulantes: {
                        acreedores_hip: 0,
                        docs_pagar_lp: 0,
                        creditos_banc_lp: 0,
                        rents_cobradas_anti: 0,
                        interes_cobrados_anti: 0
                    }
                },
                capital: {
                    capital_social: 0,
                    reserva_legal: 0,
                    reserva_reinversion: 0,
                    utilidades_ret: 0,
                    utilidad_ejercicio: 0
                }
            },
            results_sheet: {
                ventas: {
                    ventas: 0,
                    desc_ventas: 0,
                    dev_ventas: 0
                },
                costo_ventas: {
                    inv_inicial: 0,
                    compras: 0,
                    gastos_compras: 0,
                    desc_compras: 0,
                    inv_final: 0
                },
                gasto_ventas: {
                    sueldos_comisiones: 0,
                    sueldos_ofi_ventas: 0,
                    viaticos: 0,
                    fletes_mercancias: 0,
                    dep_equipo_transp: 0,
                    telefono: 0
                },
                gasto_admin: {
                    sueldos_oficina: 0,
                    servicios_pub: 0,
                    dep_edificio: 0
                },
                otros_ingresos: {
                    div_cobrados: 0
                }
            }
        }

        periods.push(period);
    }

    return periods;
}