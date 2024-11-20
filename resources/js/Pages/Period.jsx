import { useEffect, useState } from "react";
import { AppLayout } from "../Layout/AppLayout";
import AccountValue from "../Components/AccountValue";
import { useModalStore } from "../stores/modalStore";
import { router, usePage } from "@inertiajs/react";
import AddAccount from "../Forms/AddAccount";
import Alert from "../Components/Alert";

export default function Period({period}) {

    const { toggle, setModal } = useModalStore();
    const flash = usePage().props.flash;
    const [alert, setAlert] = useState(flash.alert);
    const [periodInfo, setPeriodInfo] = useState({});

    setTimeout(() => {
        setAlert(null);
    }, 5000);

    useEffect(() => {
        setAlert(flash.alert);

        setPeriodInfo({
            balance_sheet: {
                id: period?.balance_sheet?.id,
                account_details: period?.balance_sheet?.bs_account_details?.map(detail => {
                    return {
                        id: detail.id,
                        account_name: detail.bs_account.account_name,
                        account_type: detail.bs_account.bs_account_type.type_name,
                        account_subtype: detail.bs_account?.bs_account_subtype?.subtype_name,
                        ammount: detail.ammount
                    }
                })
            },
            income_statement: {
                id: period?.income_statement?.id,
                account_details: period?.income_statement?.is_account_details?.map(detail => {
                    return {
                        id: detail.id,
                        account_name: detail.is_account.account_name,
                        account_type: detail.is_account.is_account_type.type_name,
                        ammount: detail.ammount
                    }
                })
            }
        });

    }, [flash.alert]);

    function onClickAddAccountBtn() {

        const submit_action = (accountInfo, setErrors) => {
            router.post(`/periods/${period.id}/accounts`, accountInfo, {
                onError: errors => {
                    setErrors(errors);
                },
                onSuccess: () => {
                    toggle();
                }
            })
        };

        setModal({
            title: 'Agrega una cuenta a uno de tus estados financieros',
            content: <AddAccount submit_action={submit_action} withValue></AddAccount>
        });
        toggle();
    }

    function getAccounts(financialStatement, account_type, account_subtype = null) {
        
        const accounts = periodInfo[financialStatement]?.account_details?.filter(account => {

            if (account_type === 'Activo' || account_type === 'Pasivo') {
                if (account.account_type === account_type && account.account_subtype === account_subtype) {
                    return true;
                }
            } else {
                if (account.account_type === account_type) {
                    return true;
                }
            }

            return false;
        });

        return accounts;
    }

    return (
        <AppLayout>
            <div className="flex items-center justify-between">
                <h1 className="text-3xl">{period.description}</h1>
                <button onClick={onClickAddAccountBtn} className="flex items-center gap-x-2 bg-[#2C3E50] py-1 px-2 rounded-md text-white font-medium">
                    <svg className="w-4 h-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/></svg>
                    Agregar Cuenta
                </button>
            </div>
            <article className="mt-5 grid gap-x-20 grid-cols-2">
                <section>
                    <h2 className="text-2xl font-semibold text-[#6B8E23]">Balance General</h2>
                    <div className="space-y-10 mt-5">
                        <div className="space-y-2">
                            <h3 className="text-xl font-medium">Activos</h3>
                            <div className="space-y-5">
                                <div className="space-y-2">
                                    <h4 className="text-[#2C3E50] text-lg font-medium">Circulantes</h4>
                                    <div className="space-y-3">
                                        {getAccounts('balance_sheet', 'Activo', 'Circulante')?.map(a => <AccountValue key={a.id} account={a}>{a.ammount}</AccountValue>)}
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <h4 className="text-[#2C3E50] text-lg font-medium">Fijos</h4>
                                    <div className="space-y-3">
                                        {getAccounts('balance_sheet', 'Activo', 'Fijo')?.map(a => <AccountValue key={a.id} account={a}>{a.ammount}</AccountValue>)}
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <h4 className="text-[#2C3E50] text-lg font-medium">Diferidos</h4>
                                    <div className="space-y-3">
                                        {getAccounts('balance_sheet', 'Activo', 'Diferido')?.map(a => <AccountValue key={a.id} account={a}>{a.ammount}</AccountValue>)}
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
                                        {getAccounts('balance_sheet', 'Pasivo', 'Circulante')?.map(a => <AccountValue key={a.id} account={a}>{a.ammount}</AccountValue>)}
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <h4 className="text-[#2C3E50] text-lg font-medium">No Circulantes</h4>
                                    <div className="space-y-3">
                                        {getAccounts('balance_sheet', 'Pasivo', 'No Circulante')?.map(a => <AccountValue key={a.id} account={a}>{a.ammount}</AccountValue>)}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-xl font-medium">Capital</h3>
                            <div className="space-y-3">
                                {getAccounts('balance_sheet', 'Capital', null)?.map(a => <AccountValue key={a.id} account={a}>{a.ammount}</AccountValue>)}
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
                               {getAccounts('income_statement', 'Ventas')?.map(a => <AccountValue key={a.id} account={a}>{a.ammount}</AccountValue>)}
                            </div>
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-xl font-medium">Costo de Venta</h3>
                            <div className="space-y-3">
                                {getAccounts('income_statement', 'Costo de Venta')?.map(a => <AccountValue key={a.id} account={a}>{a.ammount}</AccountValue>)}
                            </div>
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-xl font-medium">Gastos de Venta</h3>
                            <div className="space-y-3">
                                {getAccounts('income_statement', 'Gastos de Venta')?.map(a => <AccountValue key={a.id} account={a}>{a.ammount}</AccountValue>)}
                            </div>
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-xl font-medium">Gastos de Administracion</h3>
                            <div className="space-y-3">
                               {getAccounts('income_statement', 'Gastos de Administracion')?.map(a => <AccountValue key={a.id} account={a}>{a.ammount}</AccountValue>)}
                            </div>
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-xl font-medium">Gastos Financieros</h3>
                            <div className="space-y-3">
                                {getAccounts('income_statement', 'Gastos Financieros')?.map(a => <AccountValue key={a.id} account={a}>{a.ammount}</AccountValue>)}
                            </div>
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-xl font-medium">Producto Financiero</h3>
                            <div className="space-y-3">
                                {getAccounts('income_statement', 'Producto Financiero')?.map(a => <AccountValue key={a.id} account={a}>{a.ammount}</AccountValue>)}
                            </div>
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-xl font-medium">Otros Gastos</h3>
                            <div className="space-y-3">
                                {getAccounts('income_statement', 'Otros Gastos')?.map(a => <AccountValue key={a.id} account={a}>{a.ammount}</AccountValue>)}
                            </div>
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-xl font-medium">Otros Ingresos</h3>
                            <div className="space-y-3">
                                {getAccounts('income_statement', 'Otros Ingresos')?.map(a => <AccountValue key={a.id} account={a}>{a.ammount}</AccountValue>)}
                            </div>
                        </div>
                    </div>
                </section>
            </article>
            {alert && <Alert onClose={() => setAlert(null)} alertType={alert.type} msg={alert.msg}></Alert>}
        </AppLayout>
    )

}