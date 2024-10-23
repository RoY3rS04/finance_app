import { AccountInput } from "../Components/AccountInput";
import StatementFooter from "../Components/StatementFooter";
import { useDataStore } from "../stores/dataStore";

export default function FinancialStatements() {

    const {periods_q, periods, addPeriods, decreasePeriods} = useDataStore();

    function showPeriods() {

        const displayedPeriods = [];

        for (let i = 1; i <= periods_q; i++) {
            displayedPeriods.push(<p>Periodo {i}</p>)
        }

        return displayedPeriods;
    }

    function onSubmit(e: React.FormEvent) {
        e.preventDefault();

        console.log(periods);
    }

    return (
        <form onSubmit={onSubmit} className='my-10 mx-5'>
            <div className="flex items-center gap-x-3 mb-5">
                <button type="button" className="w-10 h-10 p-2 rounded-full text-white bg-[#2C3E50] font-bold" onClick={decreasePeriods}>-</button>
                <p className="text-lg font-medium">Periodos</p>
                <button type="button" className="w-10 h-10 p-2 rounded-full text-white bg-[#2C3E50] font-bold" onClick={addPeriods}>+</button>
            </div>
            <section className='grid grid-cols-2 gap-x-5'>
                <article className='rounded-xl bg-white shadow-xl px-4 relative'>
                    <div id="balance" className="grid grid-cols-3 items-center bg-white mt-4">
                        <h1 className='text-2xl text-[#6B8E23] font-semibold'>Balance General</h1>
                        <div className={`col-span-2 grid grid-cols-${periods_q} gap-x-5 place-items-center`}>
                            {showPeriods()}
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-1">
                        <h2 className="text-[1.35rem] font-semibold mt-5">Activos</h2>
                        <div id='a-circulantes' className="flex flex-col gap-y-2">
                            <a href="#a-circulantes" className="text-lg text-[#6B8E23] font-medium sticky bg-white top-20 left-0 pt-5">Circulantes</a>
                            <div className="flex flex-col gap-y-2">
                                <AccountInput displayName="Caja" account={{
                                    name: 'caja',
                                    accountD: 'assets',
                                    accountT: 'circulantes',
                                    sheet: 'balance_sheet'
                                }}></AccountInput>
                                <AccountInput displayName="Efectivo" account={{
                                    name: 'efectivo',
                                    accountD: 'assets',
                                    accountT: 'circulantes',
                                    sheet: 'balance_sheet'
                                }}></AccountInput>
                                <AccountInput displayName="Inversiones" account={{
                                    name: 'inversiones',
                                    accountD: 'assets',
                                    accountT: 'circulantes',
                                    sheet: 'balance_sheet'
                                }}></AccountInput>
                                <AccountInput displayName="Banco" account={{
                                    name: 'banco',
                                    accountD: 'assets',
                                    accountT: 'circulantes',
                                    sheet: 'balance_sheet'
                                }}></AccountInput>
                                <AccountInput displayName="Cuentas por cobrar" account={{
                                    name: 'cuentas_cobrar',
                                    accountD: 'assets',
                                    accountT: 'circulantes',
                                    sheet: 'balance_sheet'
                                }}></AccountInput>
                                <AccountInput displayName="Inventario" account={{
                                    name: 'inventario',
                                    accountD: 'assets',
                                    accountT: 'circulantes',
                                    sheet: 'balance_sheet'
                                }}></AccountInput>
                                <AccountInput displayName="Documentos por cobrar" account={{
                                    name: 'docs_cobrar',
                                    accountD: 'assets',
                                    accountT: 'circulantes',
                                    sheet: 'balance_sheet'
                                }}></AccountInput>
                            </div>
                        </div>
                        <div id='a-no_circulantes' className="flex flex-col gap-y-2">
                            <a href="#a-no_circulantes" className="text-lg text-[#6B8E23] font-medium sticky bg-white top-20 left-0 py-2">No Circulantes</a>
                            <div className="flex flex-col gap-y-2">
                                <AccountInput displayName="Terreno" account={{
                                    name: 'terreno',
                                    accountD: 'assets',
                                    accountT: 'no_circulantes',
                                    sheet: 'balance_sheet'
                                }}></AccountInput>
                                <AccountInput displayName="Edificios" account={{
                                    name: 'edificios',
                                    accountD: 'assets',
                                    accountT: 'no_circulantes',
                                    sheet: 'balance_sheet'
                                }}></AccountInput>
                                <AccountInput displayName="Dep. Edificios" account={{
                                    name: 'dep_edificios',
                                    accountD: 'assets',
                                    accountT: 'no_circulantes',
                                    sheet: 'balance_sheet'
                                }}></AccountInput>
                                <AccountInput displayName="Maquinaria y Equipo" account={{
                                    name: 'maq_equipo',
                                    accountD: 'assets',
                                    accountT: 'no_circulantes',
                                    sheet: 'balance_sheet'
                                }}></AccountInput>
                                <AccountInput displayName="Dep. Maquinaria y Equipo" account={{
                                    name: 'dep_maq_equipo',
                                    accountD: 'assets',
                                    accountT: 'no_circulantes',
                                    sheet: 'balance_sheet'
                                }}></AccountInput>
                                <AccountInput displayName="Equipo Transporte" account={{
                                    name: 'equipo_transporte',
                                    accountD: 'assets',
                                    accountT: 'no_circulantes',
                                    sheet: 'balance_sheet'
                                }}></AccountInput>
                                <AccountInput displayName="Dep. Equipo Transporte" account={{
                                    name: 'dep_equipo_transp',
                                    accountD: 'assets',
                                    accountT: 'no_circulantes',
                                    sheet: 'balance_sheet'
                                }}></AccountInput>
                                <AccountInput displayName="Mobiliario y Equipo de Oficina" account={{
                                    name: 'mob_equipo_oficina',
                                    accountD: 'assets',
                                    accountT: 'no_circulantes',
                                    sheet: 'balance_sheet'
                                }}></AccountInput>
                                <AccountInput displayName="Dep. Mobiliario y Equipo de Oficina" account={{
                                    name: 'dep_mob_equipo_oficina',
                                    accountD: 'assets',
                                    accountT: 'no_circulantes',
                                    sheet: 'balance_sheet'
                                }}></AccountInput>
                            </div>
                        </div>
                        <div id='a-diferidos' className="flex flex-col gap-y-2">
                            <a href="#a-diferidos" className="text-lg text-[#6B8E23] font-medium sticky bg-white top-20 left-0 py-2">Diferidos</a>
                            <div className="flex flex-col gap-y-2">
                                <AccountInput displayName="Gastos Instalacion" account={{
                                    name: 'gastos_instalacion',
                                    accountD: 'assets',
                                    accountT: 'diferidos',
                                    sheet: 'balance_sheet'
                                }}></AccountInput>
                                <AccountInput displayName="Amort. Gastos Instalacion" account={{
                                    name: 'amort_gastos_inst',
                                    accountD: 'assets',
                                    accountT: 'diferidos',
                                    sheet: 'balance_sheet'
                                }}></AccountInput>
                                <AccountInput displayName="Gastos de Organizacion" account={{
                                    name: 'gastos_org',
                                    accountD: 'assets',
                                    accountT: 'diferidos',
                                    sheet: 'balance_sheet'
                                }}></AccountInput>
                                <AccountInput displayName="Amort. Gastos de Organizacion" account={{
                                    name: 'amort_gastos_org',
                                    accountD: 'assets',
                                    accountT: 'diferidos',
                                    sheet: 'balance_sheet'
                                }}></AccountInput>
                                <AccountInput displayName="Propaganda y Publicidad" account={{
                                    name: 'prop_publicidad',
                                    accountD: 'assets',
                                    accountT: 'diferidos',
                                    sheet: 'balance_sheet'
                                }}></AccountInput>
                                <AccountInput displayName="Franquicia" account={{
                                    name: 'franquicia',
                                    accountD: 'assets',
                                    accountT: 'diferidos',
                                    sheet: 'balance_sheet'
                                }}></AccountInput>
                                <AccountInput displayName="Rentas pagadas por anticipado" account={{
                                    name: 'rent_pagadas_ant',
                                    accountD: 'assets',
                                    accountT: 'diferidos',
                                    sheet: 'balance_sheet'
                                }}></AccountInput>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-1">
                        <h2 className="text-[1.35rem] font-semibold mt-5">Pasivos</h2>
                        <div id="p-circulantes" className="flex flex-col gap-y-2 ">
                            <a href="#p-circulantes" className="text-lg font-medium text-[#6B8E23] sticky bg-white top-20 left-0 py-2">Circulantes</a>
                            <div className="flex flex-col gap-y-2">
                                <AccountInput displayName="Proveedores" account={{
                                    name: 'proveedores',
                                    accountD: 'liabilities',
                                    accountT: 'circulantes',
                                    sheet: 'balance_sheet'
                                }}></AccountInput>
                                <AccountInput displayName="Impuestos por pagar" account={{
                                    name: 'imp_pagar',
                                    accountD: 'liabilities',
                                    accountT: 'circulantes',
                                    sheet: 'balance_sheet'
                                }}></AccountInput>
                                <AccountInput displayName="Creditos Bancarios" account={{
                                    name: 'creditos_banc',
                                    accountD: 'liabilities',
                                    accountT: 'circulantes',
                                    sheet: 'balance_sheet'
                                }}></AccountInput>
                                <AccountInput displayName="Acreedores Diversos" account={{
                                    name: 'acreedores_div',
                                    accountD: 'liabilities',
                                    accountT: 'circulantes',
                                    sheet: 'balance_sheet'
                                }}></AccountInput>
                                <AccountInput displayName="Documentos por pagar" account={{
                                    name: 'docs_pagar',
                                    accountD: 'liabilities',
                                    accountT: 'circulantes',
                                    sheet: 'balance_sheet'
                                }}></AccountInput>
                                <AccountInput displayName="Sueldos por pagar" account={{
                                    name: 'sueldos_pagar',
                                    accountD: 'liabilities',
                                    accountT: 'circulantes',
                                    sheet: 'balance_sheet'
                                }}></AccountInput>
                            </div>
                        </div>
                        <div id="p-no_circulantes" className="flex flex-col gap-y-2">
                            <a href="#p-no_circulantes" className="text-lg font-medium text-[#6B8E23] sticky bg-white top-20 left-0 py-2">No Circulantes</a>
                            <div className="flex flex-col gap-y-2">
                                <AccountInput displayName="Acreedores Hipotecarios" account={{
                                    name: 'acreedores_hip',
                                    accountD: 'liabilities',
                                    accountT: 'no_circulantes',
                                    sheet: 'balance_sheet'
                                }}></AccountInput>
                                <AccountInput displayName="Documentos por pagar L/P" account={{
                                    name: 'docs_pagar_lp',
                                    accountD: 'liabilities',
                                    accountT: 'no_circulantes',
                                    sheet: 'balance_sheet'
                                }}></AccountInput>
                                <AccountInput displayName="Creditos Bancarios L/P" account={{
                                    name: 'creditos_banc_lp',
                                    accountD: 'liabilities',
                                    accountT: 'no_circulantes',
                                    sheet: 'balance_sheet'
                                }}></AccountInput>
                                <AccountInput displayName="Rentas cobradas por anticipado" account={{
                                    name: 'rents_cobradas_anti',
                                    accountD: 'liabilities',
                                    accountT: 'no_circulantes',
                                    sheet: 'balance_sheet'
                                }}></AccountInput>
                                <AccountInput displayName="Intereses cobrados por anticipado" account={{
                                    name: 'interes_cobrados_anti',
                                    accountD: 'liabilities',
                                    accountT: 'no_circulantes',
                                    sheet: 'balance_sheet'
                                }}></AccountInput>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-1">
                        <h2 className="text-[1.35rem] font-semibold mt-5">Capital</h2>
                        <div id="p-circulantes" className="flex flex-col gap-y-2">
                            <div className="flex flex-col gap-y-2">
                                <AccountInput displayName="Capital Social" account={{
                                    name: 'capital_social',
                                    accountD: 'capital',           sheet: 'balance_sheet'
                                }}></AccountInput>
                                <AccountInput displayName="Reserva Legal" account={{
                                    name: 'reserva_legal',
                                    accountD: 'capital',
                                    sheet: 'balance_sheet'
                                }}></AccountInput>
                                <AccountInput displayName="Reserva de Reinversion" account={{
                                    name: 'reserva_reinversion',
                                    accountD: 'capital',
                                    sheet: 'balance_sheet'
                                }}></AccountInput>
                                <AccountInput displayName="Utilidades Retenidas" account={{
                                    name: 'utilidades_ret',
                                    accountD: 'capital',
                                    sheet: 'balance_sheet'
                                }}></AccountInput>
                                <AccountInput displayName="Utilidad del Ejercicio" account={{
                                    name: 'utilidad_ejercicio',
                                    accountD: 'capital',
                                    sheet: 'balance_sheet'
                                }}></AccountInput>
                            </div>
                        </div>
                    </div>
                    <StatementFooter goTo="balance"></StatementFooter>
                </article>
                <article className='rounded-xl bg-white shadow-xl px-4 self-start'>
                    <div id="resultados" className="grid grid-cols-3 items-center bg-white mt-4">
                        <h1 className='text-2xl text-[#6B8E23] font-semibold'>Estado de Resultados</h1>
                        <div className={`col-span-2 grid grid-cols-${periods_q} gap-x-5 place-items-center`}>
                            {showPeriods()}
                        </div>
                    </div>
                    <div id='ventas' className="flex flex-col gap-y-2">
                        <a href="#ventas" className="text-[1.35rem] mt-5 font-semibold sticky bg-white top-20 left-0 py-2">Ventas</a>
                        <div className="flex flex-col gap-y-2">
                            <AccountInput displayName="Ventas" account={{
                                name: 'ventas',
                                accountD: 'ventas',
                                sheet: 'results_sheet'
                            }}></AccountInput>
                            <AccountInput displayName="Descuento sobre ventas" account={{
                                name: 'desc_ventas',
                                accountD: 'ventas',
                                sheet: 'results_sheet'
                            }}></AccountInput>
                            <AccountInput displayName="Devoluciones sobre ventas" account={{
                                name: 'dev_ventas',
                                accountD: 'ventas',
                                sheet: 'results_sheet'
                            }}></AccountInput>
                        </div>
                    </div>
                    <div id='costo-ventas' className="flex flex-col gap-y-2">
                        <a href="#costo-ventas" className="text-[1.35rem] mt-5 font-semibold sticky bg-white top-20 left-0 py-2">Costo de Venta</a>
                        <div className="flex flex-col gap-y-2">
                            <AccountInput displayName="Inventario Inicial" account={{
                                name: 'inv_inicial',
                                accountD: 'costo_ventas',
                                sheet: 'results_sheet'
                            }}></AccountInput>
                            <AccountInput displayName="Compras" account={{
                                name: 'compras',
                                accountD: 'costo_ventas',
                                sheet: 'results_sheet'
                            }}></AccountInput>
                            <AccountInput displayName="Gastos de Compras" account={{
                                name: 'gastos_compras',
                                accountD: 'costo_ventas',
                                sheet: 'results_sheet'
                            }}></AccountInput>
                            <AccountInput displayName="Descuento sobre compras" account={{
                                name: 'desc_compras',
                                accountD: 'costo_ventas',
                                sheet: 'results_sheet'
                            }}></AccountInput>
                            <AccountInput displayName="Inventario Final" account={{
                                name: 'inv_final',
                                accountD: 'costo_ventas',
                                sheet: 'results_sheet'
                            }}></AccountInput>
                        </div>
                    </div>
                    <div id='gasto-ventas' className="flex flex-col gap-y-2">
                        <a href="#gasto-ventas" className="text-[1.35rem] mt-5 font-semibold sticky bg-white top-20 left-0 py-2">Gastos de Venta</a>
                        <div className="flex flex-col gap-y-2">
                            <AccountInput displayName="Sueldos y comisiones" account={{
                                name: 'sueldos_comisiones',
                                accountD: 'gasto_ventas',
                                sheet: 'results_sheet'
                            }}></AccountInput>
                            <AccountInput displayName="Sueldos oficina de ventas" account={{
                                name: 'sueldos_ofi_ventas',
                                accountD: 'gasto_ventas',
                                sheet: 'results_sheet'
                            }}></AccountInput>
                            <AccountInput displayName="Viaticos" account={{
                                name: 'viaticos',
                                accountD: 'gasto_ventas',
                                sheet: 'results_sheet'
                            }}></AccountInput>
                            <AccountInput displayName="Fletes de mercancia remitidas" account={{
                                name: 'fletes_mercancias',
                                accountD: 'gasto_ventas',
                                sheet: 'results_sheet'
                            }}></AccountInput>
                            <AccountInput displayName="Dep. Equipo Transporte" account={{
                                name: 'dep_equipo_transp',
                                accountD: 'gasto_ventas',
                                sheet: 'results_sheet'
                            }}></AccountInput>
                            <AccountInput displayName="Telefono" account={{
                                name: 'telefono',
                                accountD: 'gasto_ventas',
                                sheet: 'results_sheet'
                            }}></AccountInput>
                        </div>
                    </div>
                    <div id='gasto-admin' className="flex flex-col gap-y-2">
                        <a href="#gasto-admin" className="text-[1.35rem] mt-5 font-semibold sticky bg-white top-20 left-0 py-2">Gastos de Administracion</a>
                        <div className="flex flex-col gap-y-2">
                            <AccountInput displayName="Sueldos de oficina" account={{
                                name: 'sueldos_oficina',
                                accountD: 'gasto_admin',
                                sheet: 'results_sheet'
                            }}></AccountInput>
                            <AccountInput displayName="Servicios Publicos" account={{
                                name: 'servicios_pub',
                                accountD: 'gasto_admin',
                                sheet: 'results_sheet'
                            }}></AccountInput>
                            <AccountInput displayName="Dep. Edificio" account={{
                                name: 'dep_edificio',
                                accountD: 'gasto_admin',
                                sheet: 'results_sheet'
                            }}></AccountInput>
                            <AccountInput displayName="Dep. Equipo Oficina" account={{
                                name: 'dep_eq_oficina',
                                accountD: 'gasto_admin',
                                sheet: 'results_sheet'
                            }}></AccountInput>
                        </div>
                    </div>
                    <div id='otros-ingresos' className="flex flex-col gap-y-2">
                        <a href="#otros-ingresos" className="text-[1.35rem] mt-5 font-semibold sticky bg-white top-20 left-0 py-2">Otros Ingresos</a>
                        <div className="flex flex-col gap-y-2">
                            <AccountInput displayName="Dividendos Cobrados" account={{
                                name: 'div_cobrados',
                                accountD: 'otros_ingresos',
                                sheet: 'results_sheet'
                            }}></AccountInput>
                        </div>
                    </div>
                    <StatementFooter goTo="resultados"></StatementFooter>
                </article>
            </section>
            <button className='bg-[#2C3E50] rounded-md py-2 px-4 text-white font-medium text-lg mt-5'>
                Realizar Analisis
            </button>
        </form>
    )
}

/*
    <div className="">
                        <h1 className='text-2xl text-[#6B8E23] font-medium'>Balance General</h1>
                        <div className="">
                            <h2 className="text-xl font-medium">Activos</h2>
                            <div className="flex flex-col gap-y-1">
                                <p className="text-lg">Caja</p>
                                <p className="text-lg">Caja</p>
                                <p className="text-lg">Caja</p>
                                <p className="text-lg">Caja</p>
                                <p className="text-lg">Caja</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2 grid grid-cols-3 gap-x-5 gap-y-2 p-2">
                        <div className="grid grid-cols-3 gap-x-5 col-span-full">
                            <p className="place-self-center">Periodo 1</p>
                            <p className="place-self-center">Periodo 2</p>
                            <p className="place-self-center">Periodo 3</p>
                        </div>
                        <input className="rounded-md border-2" type='number' />
                        <input className="rounded-md border-2" type='number' />
                        <input className="rounded-md border-2" type='number' />
                    </div>
*/

