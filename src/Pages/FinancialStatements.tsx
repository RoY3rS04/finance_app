import { useState } from "react";
import { AccountInput } from "../Components/AccountInput";
import StatementFooter from "../Components/StatementFooter";

export default function FinancialStatements() {

    const [periods, setPeriods] = useState(1);

    function showPeriods() {

        const displayedPeriods = [];

        for (let i = 1; i <= periods; i++) {
            displayedPeriods.push(<p>Periodo {i}</p>)
        }

        return displayedPeriods;
    }

    function changePeriods(value: number) {
        if (value < 1 || value > 3) {
            return;
        }

        setPeriods(value);
    }

    return (
        <form className='my-10 mx-5'>
            <div className="flex items-center gap-x-3 mb-5">
                <button type="button" className="w-10 h-10 p-2 rounded-full text-white bg-[#2C3E50] font-bold" onClick={() => changePeriods(periods-1)}>-</button>
                <p className="text-lg font-medium">Periodos</p>
                <button type="button" className="w-10 h-10 p-2 rounded-full text-white bg-[#2C3E50] font-bold" onClick={() => changePeriods(periods+1)}>+</button>
            </div>
            <section className='grid grid-cols-2 gap-x-5'>
                <article className='rounded-xl bg-white shadow-xl px-4 relative'>
                    <div id="balance" className="grid grid-cols-3 items-center bg-white mt-4">
                        <h1 className='text-2xl text-[#6B8E23] font-semibold'>Balance General</h1>
                        <div className={`col-span-2 grid grid-cols-${periods} gap-x-5 place-items-center`}>
                            {showPeriods()}
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-1">
                        <h2 className="text-[1.35rem] font-semibold mt-5">Activos</h2>
                        <div id='a-circulantes' className="flex flex-col gap-y-2">
                            <a href="#a-circulantes" className="text-lg text-[#6B8E23] font-medium sticky bg-white top-20 left-0 pt-5">Circulantes</a>
                            <div className="flex flex-col gap-y-2">
                                <AccountInput periods={periods} name="Caja"></AccountInput>
                                <AccountInput periods={periods} name="Efectivo"></AccountInput>
                                <AccountInput periods={periods} name="Inversiones"></AccountInput>
                                <AccountInput periods={periods} name="Banco"></AccountInput>
                                <AccountInput periods={periods} name="Cuentas por cobrar"></AccountInput>
                                <AccountInput periods={periods} name="Inventario"></AccountInput>
                                <AccountInput periods={periods} name="Documentos por cobrar"></AccountInput>
                            </div>
                        </div>
                        <div id='a-no_circulantes' className="flex flex-col gap-y-2">
                            <a href="#a-no_circulantes" className="text-lg text-[#6B8E23] font-medium sticky bg-white top-20 left-0 py-2">No Circulantes</a>
                            <div className="flex flex-col gap-y-2">
                                <AccountInput periods={periods} name="Terreno"></AccountInput>
                                <AccountInput periods={periods} name="Edificios"></AccountInput>
                                <AccountInput periods={periods} name="Dep. Edificios"></AccountInput>
                                <AccountInput periods={periods} name="Maquinaria y Equipo"></AccountInput>
                                <AccountInput periods={periods} name="Dep. Maquinaria y Equipo"></AccountInput>
                                <AccountInput periods={periods} name="Equipo Transporte"></AccountInput>
                                <AccountInput periods={periods} name="Dep. Equipo Transporte"></AccountInput>
                                <AccountInput periods={periods} name="Mobiliario y Equipo de Oficina"></AccountInput>
                                <AccountInput periods={periods} name="Dep. Mobiliario y Equipo de Oficina"></AccountInput>
                            </div>
                        </div>
                        <div id='a-diferidos' className="flex flex-col gap-y-2">
                            <a href="#a-diferidos" className="text-lg text-[#6B8E23] font-medium sticky bg-white top-20 left-0 py-2">Diferidos</a>
                            <div className="flex flex-col gap-y-2">
                                <AccountInput periods={periods} name="Gastos Instalacion"></AccountInput>
                                <AccountInput periods={periods} name="Amort. Gastos Instalacion"></AccountInput>
                                <AccountInput periods={periods} name="Gastos de Organizacion"></AccountInput>
                                <AccountInput periods={periods} name="Amort. Gastos de Organizacion"></AccountInput>
                                <AccountInput periods={periods} name="Propaganda y Publicidad"></AccountInput>
                                <AccountInput periods={periods} name="Franquicia"></AccountInput>
                                <AccountInput periods={periods} name="Rentas pagadas por anticipado"></AccountInput>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-1">
                        <h2 className="text-[1.35rem] font-semibold mt-5">Pasivos</h2>
                        <div id="p-circulantes" className="flex flex-col gap-y-2 ">
                            <a href="#p-circulantes" className="text-lg font-medium text-[#6B8E23] sticky bg-white top-20 left-0 py-2">Circulantes</a>
                            <div className="flex flex-col gap-y-2">
                                <AccountInput periods={periods} name="Proveedores"></AccountInput>
                                <AccountInput periods={periods} name="Impuestos por pagar"></AccountInput>
                                <AccountInput periods={periods} name="Creditos Bancarios"></AccountInput>
                                <AccountInput periods={periods} name="Acreedores Diversos"></AccountInput>
                                <AccountInput periods={periods} name="Documentos por pagar"></AccountInput>
                                <AccountInput periods={periods} name="Sueldos por pagar"></AccountInput>
                            </div>
                        </div>
                        <div id="p-no_circulantes" className="flex flex-col gap-y-2">
                            <a href="#p-no_circulantes" className="text-lg font-medium text-[#6B8E23] sticky bg-white top-20 left-0 py-2">No Circulantes</a>
                            <div className="flex flex-col gap-y-2">
                                <AccountInput periods={periods} name="Acreedores Hipotecarios"></AccountInput>
                                <AccountInput periods={periods} name="Documentos por pagar L/P"></AccountInput>
                                <AccountInput periods={periods} name="Creditos Bancarios L/P"></AccountInput>
                                <AccountInput periods={periods} name="Rentas cobradas por anticipado"></AccountInput>
                                <AccountInput periods={periods} name="Intereses cobrados por anticipado"></AccountInput>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-1">
                        <h2 className="text-[1.35rem] font-semibold mt-5">Capital</h2>
                        <div id="p-circulantes" className="flex flex-col gap-y-2">
                            <div className="flex flex-col gap-y-2">
                                <AccountInput periods={periods} name="Capital Social"></AccountInput>
                                <AccountInput periods={periods} name="Reserva Legal"></AccountInput>
                                <AccountInput periods={periods} name="Reserva de Reinversion"></AccountInput>
                                <AccountInput periods={periods} name="Utilidades Retenidas"></AccountInput>
                                <AccountInput periods={periods} name="Utilidad del Ejercicio"></AccountInput>
                            </div>
                        </div>
                    </div>
                    <StatementFooter goTo="balance"></StatementFooter>
                </article>
                <article className='rounded-xl bg-white shadow-xl px-4 place-self-start'>
                    <div id="resultados" className="grid grid-cols-3 items-center bg-white mt-4">
                        <h1 className='text-2xl text-[#6B8E23] font-semibold'>Estado de Resultados</h1>
                        <div className={`col-span-2 grid grid-cols-${periods} gap-x-5 place-items-center`}>
                            {showPeriods()}
                        </div>
                    </div>
                    <div id='ventas' className="flex flex-col gap-y-2">
                        <a href="#ventas" className="text-[1.35rem] mt-5 font-semibold sticky bg-white top-20 left-0 py-2">Ventas</a>
                        <div className="flex flex-col gap-y-2">
                            <AccountInput periods={periods} name="Ventas"></AccountInput>
                            <AccountInput periods={periods} name="Descuento sobre ventas"></AccountInput>
                            <AccountInput periods={periods} name="Devoluciones sobre ventas"></AccountInput>
                        </div>
                    </div>
                    <div id='costo-ventas' className="flex flex-col gap-y-2">
                        <a href="#costo-ventas" className="text-[1.35rem] mt-5 font-semibold sticky bg-white top-20 left-0 py-2">Costo de Venta</a>
                        <div className="flex flex-col gap-y-2">
                            <AccountInput periods={periods} name="Inventario Inicial"></AccountInput>
                            <AccountInput periods={periods} name="Compras"></AccountInput>
                            <AccountInput periods={periods} name="Gastos de Compras"></AccountInput>
                            <AccountInput periods={periods} name="Descuento sobre compras"></AccountInput>
                            <AccountInput periods={periods} name="Inventario Final"></AccountInput>
                        </div>
                    </div>
                    <div id='gasto-ventas' className="flex flex-col gap-y-2">
                        <a href="#gasto-ventas" className="text-[1.35rem] mt-5 font-semibold sticky bg-white top-20 left-0 py-2">Gastos de Venta</a>
                        <div className="flex flex-col gap-y-2">
                            <AccountInput periods={periods} name="Sueldos y comisiones"></AccountInput>
                            <AccountInput periods={periods} name="Sueldos oficina de ventas"></AccountInput>
                            <AccountInput periods={periods} name="Viaticos"></AccountInput>
                            <AccountInput periods={periods} name="Fletes de mercancia remitidas"></AccountInput>
                            <AccountInput periods={periods} name="Dep. Equipo Transporte"></AccountInput>
                            <AccountInput periods={periods} name="Telefono"></AccountInput>
                        </div>
                    </div>
                    <div id='gasto-admin' className="flex flex-col gap-y-2">
                        <a href="#gasto-admin" className="text-[1.35rem] mt-5 font-semibold sticky bg-white top-20 left-0 py-2">Gastos de Administracion</a>
                        <div className="flex flex-col gap-y-2">
                            <AccountInput periods={periods} name="Sueldos de oficina"></AccountInput>
                            <AccountInput periods={periods} name="Servicios Publicos"></AccountInput>
                            <AccountInput periods={periods} name="Dep. Edificio"></AccountInput>
                            <AccountInput periods={periods} name="Dep. Equipo Oficina"></AccountInput>
                        </div>
                    </div>
                    <div id='otros-ingresos' className="flex flex-col gap-y-2">
                        <a href="#otros-ingresos" className="text-[1.35rem] mt-5 font-semibold sticky bg-white top-20 left-0 py-2">Otros Ingresos</a>
                        <div className="flex flex-col gap-y-2">
                            <AccountInput periods={periods} name="Dividendos Cobrados"></AccountInput>
                            <AccountInput periods={periods} name="Impuestos a la utilidad"></AccountInput>
                            <AccountInput periods={periods} name="Dep. Edificio"></AccountInput>
                            <AccountInput periods={periods} name="Dep. Equipo Oficina"></AccountInput>
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