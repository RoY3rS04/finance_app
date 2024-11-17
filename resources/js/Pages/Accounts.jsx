import { useState } from "react";
import AccountItem from "../Components/AccountItem";
import Modal from "../Components/Modal";
import AddAccount from "../Forms/AddAccount";
import { AppLayout } from "../Layout/AppLayout";
import { useModalStore } from "../stores/modalStore";

export default function Accounts({catalog}) {

    const { toggle, setModal } = useModalStore();

    function onClickAddAccountBtn() {
        setModal({
            title: 'Agrega una cuenta a tu catalogo',
            content: <AddAccount></AddAccount>
        });
        toggle();
    }

    function getAccounts(financialStatement, account_type, account_subtype = null) {
        
        const accounts = catalog[financialStatement].filter(account => {

            if (account_type === 'Activo' || account_type === 'Pasivo') {
                if (account.type.name === account_type && account.subtype.name === account_subtype) {
                    return true;
                }
            } else {
                if (account.type.name === account_type) {
                    return true;
                }
            }

            return false;
        });

        //console.log(catalog[financialStatement]);

        return accounts;

    }

    return (
        <AppLayout>
            <header className="flex items-center justify-between">
                <div className="space-y-1">
                    <h1 className="text-2xl">Catalogo de cuentas</h1>
                    <p>Administra las cuentas comunes de tus estados financieros</p>
                </div>
                <button onClick={onClickAddAccountBtn} className="flex items-center gap-x-2 bg-[#2C3E50] py-1 px-2 rounded-md text-white font-medium">
                    <svg className="w-4 h-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/></svg>
                    Agregar Cuenta
                </button>
            </header>
            <article className="mt-5 grid grid-cols-2">
                <section>
                    <h2 className="text-2xl font-semibold text-[#6B8E23]">Balance General</h2>
                    <div className="space-y-10 mt-5">
                        <div className="space-y-2">
                            <h3 className="text-xl font-medium">Activos</h3>
                            <div className="space-y-5">
                                <div className="space-y-2">
                                    <h4 className="text-[#2C3E50] text-lg font-medium">Circulantes</h4>
                                    <div className="space-y-3">
                                        {getAccounts('balance_sheet', 'Activo', 'Circulante').map(a => <AccountItem key={a.id} account={a}></AccountItem>)}
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <h4 className="text-[#2C3E50] text-lg font-medium">Fijos</h4>
                                    <div className="space-y-3">
                                        {getAccounts('balance_sheet', 'Activo', 'Fijo').map(a => <AccountItem key={a.id} account={a}></AccountItem>)}
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <h4 className="text-[#2C3E50] text-lg font-medium">Diferidos</h4>
                                    <div className="space-y-3">
                                        {getAccounts('balance_sheet', 'Activo', 'Diferido').map(a => <AccountItem key={a.id} account={a}></AccountItem>)}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-xl font-medium">Pasivos</h3>
                            <div className="space-y-5">
                                <div className="space-y-2">
                                    <h4 className="text-[#2C3E50] text-lg font-medium">Circulantes</h4>
                                    <div className="space-y-3">
                                        {getAccounts('balance_sheet', 'Pasivo', 'Circulante').map(a => <AccountItem key={a.id} account={a}></AccountItem>)}
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <h4 className="text-[#2C3E50] text-lg font-medium">No Circulantes</h4>
                                    <div className="space-y-3">
                                        {getAccounts('balance_sheet', 'Pasivo', 'No Circulante').map(a => <AccountItem key={a.id} account={a}></AccountItem>)}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-xl font-medium">Capital</h3>
                            <div className="space-y-3">
                                {getAccounts('balance_sheet', 'Capital').map(a => <AccountItem key={a.id} account={a}></AccountItem>)}
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <h2 className="text-2xl font-medium text-[#6B8E23]">Estado de Resultados</h2>
                    <div className="space-y-10 mt-5">
                        <div className="space-y-2">
                            <h3 className="text-xl font-medium">Ventas</h3>
                            <div className="space-y-3">
                                {getAccounts('income_statement', 'Ventas').map(a => <AccountItem key={a.id} account={a}></AccountItem>)}
                            </div>
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-xl font-medium">Costo de Venta</h3>
                            <div className="space-y-3">
                                {getAccounts('income_statement', 'Costo de Venta').map(a => <AccountItem key={a.id} account={a}></AccountItem>)}
                            </div>
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-xl font-medium">Gastos de Venta</h3>
                            <div className="space-y-3">
                                {getAccounts('income_statement', 'Gastos de Venta').map(a => <AccountItem key={a.id} account={a}></AccountItem>)}
                            </div>
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-xl font-medium">Gastos de Administracion</h3>
                            <div className="space-y-3">
                                {getAccounts('income_statement', 'Gastos de Administracion').map(a => <AccountItem key={a.id} account={a}></AccountItem>)}
                            </div>
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-xl font-medium">Gastos Financieros</h3>
                            <div className="space-y-3">
                                {getAccounts('income_statement', 'Gastos Financieros').map(a => <AccountItem key={a.id} account={a}></AccountItem>)}
                            </div>
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-xl font-medium">Producto Financiero</h3>
                            <div className="space-y-3">
                                {getAccounts('income_statement', 'Producto Financiero').map(a => <AccountItem key={a.id} account={a}></AccountItem>)}
                            </div>
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-xl font-medium">Otros Gastos</h3>
                            <div className="space-y-3">
                                {getAccounts('income_statement', 'Otros Gastos').map(a => <AccountItem key={a.id} account={a}></AccountItem>)}
                            </div>
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-xl font-medium">Otros Ingresos</h3>
                            <div className="space-y-3">
                                {getAccounts('income_statement', 'Otros Ingresos').map(a => <AccountItem key={a.id} account={a}></AccountItem>)}
                            </div>
                        </div>
                    </div>
                </section>
            </article>
        </AppLayout>
    )

}