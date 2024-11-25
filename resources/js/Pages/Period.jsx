import { useEffect, useState } from "react";
import { AppLayout } from "../Layout/AppLayout";
import AccountValue from "../Components/AccountValue";
import { useModalStore } from "../stores/modalStore";
import { Link, router, usePage } from "@inertiajs/react";
import AddAccount from "../Forms/AddAccount";
import Alert from "../Components/Alert";
import axios from "axios";
import FieldError from "../Components/FieldError";

export default function Period({period}) {

    const { toggle, setModal } = useModalStore();
    const flash = usePage().props.flash;
    const [alert, setAlert] = useState(flash.alert);
    const [periodInfo, setPeriodInfo] = useState({});
    const [catalog, setCatalog] = useState(null);
    const [errors, setErrors] = useState({});   

    useEffect(() => {
        setAlert(flash.alert);

        setTimeout(() => {
            setAlert(null);
        }, 5000);

        setPeriodInfo({
            balance_sheet: {
                id: period?.balance_sheet?.id,
                account_details: period?.balance_sheet?.bs_account_details?.map(detail => {
                    return {
                        id: detail.id,
                        account_name: detail.bs_account.account_name,
                        account_type: detail.bs_account.bs_account_type.type_name,
                        account_subtype: detail.bs_account?.bs_account_subtype?.subtype_name,
                        ammount: detail.ammount,
                        statementType: 'balance_sheet'
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
                        ammount: detail.ammount,
                        statementType: 'income_statement'
                    }
                })
            }
        });

        const fetchCatalog = async () => {
            try {
                const { data } = await axios.get('/accounts_info');

                const mappedCatalog = [
                    ...data.balance_sheet.map(a => ({
                        type: 'balance_sheet',
                        account_name: a.account_name,
                        account_id: a.id
                    })),
                    ...data.income_statement.map(a => ({
                        type: 'income_statement',
                        account_name: a.account_name,
                        account_id: a.id
                    }))
                ];

                setCatalog(mappedCatalog);
            } catch (error) {

                setAlert({
                    type: 'Error',
                    msg: error.response.data.message
                });
            }
        }

        fetchCatalog();

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

    function handleAddAccountSubmit(e) {
        e.preventDefault();

        const data = new FormData(e.target);

        router.post(`/periods/${period.id}/add_account`, data, {
            onError: errors => {
                setErrors(errors);
            },
            onSuccess: () => {
                setErrors({});
            }
        });
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

    function handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData(e.target);
        const data = [];

        for (let [key, val] of formData.entries()) {
            if (key.includes('submit')) {
                data.push(val);
            }
        }
        
        router.patch(`/periods/${period.id}/reports`, data);
    }

    return (
        <AppLayout>
            <div id="top" className="flex items-center justify-between">
                <h1 className="text-3xl">{period.description}</h1>
                <button form="reportsForm" type="submit" className="flex items-center gap-x-2 bg-[#2C3E50] py-1 px-2 rounded-md text-white font-medium">
                    Guardar Cambios
                </button>
            </div>
            <nav className="flex items-center gap-x-5 mt-4 text-lg text-gray-600 border-b-2">
                <Link className={`flex items-center gap-x-2 py-2 ${!window.location.pathname.includes('ratios') ? 'border-b-2 border-b-[#228B22] text-[#228B22]': null}`} href={`/periods/${period.id}`}>
                    <svg className="w-5 h-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-288-128 0c-17.7 0-32-14.3-32-32L224 0 64 0zM256 0l0 128 128 0L256 0zM80 64l64 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L80 96c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64l64 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-64 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm16 96l192 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32L96 352c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32zm0 32l0 64 192 0 0-64L96 256zM240 416l64 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-64 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/></svg>
                    Estados Finacieros
                </Link>
                <Link className="flex items-center gap-x-2 py-2" href={`/periods/${period.id}/ratios`}>
                    <svg className="w-5 h-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M304 240l0-223.4c0-9 7-16.6 16-16.6C443.7 0 544 100.3 544 224c0 9-7.6 16-16.6 16L304 240zM32 272C32 150.7 122.1 50.3 239 34.3c9.2-1.3 17 6.1 17 15.4L256 288 412.5 444.5c6.7 6.7 6.2 17.7-1.5 23.1C371.8 495.6 323.8 512 272 512C139.5 512 32 404.6 32 272zm526.4 16c9.3 0 16.6 7.8 15.4 17c-7.7 55.9-34.6 105.6-73.9 142.3c-6 5.6-15.4 5.2-21.2-.7L320 288l238.4 0z"/></svg>
                    Razones Financieras
                </Link>
            </nav>
            <div className="my-5">
                <h2 className="text-xl">Administra tus estados financieros del periodo</h2>
                <div className="grid grid-cols-2 gap-x-[60px]">
                    <div className="space-y-3">
                        <h3>Agrega una cuenta de tu catalogo</h3>
                        <form onSubmit={handleAddAccountSubmit} className="flex items-center gap-x-5">
                            <div className="flex flex-col gap-y-2 max-w-[200px]">
                                <label htmlFor="account_info">Cuenta</label>
                                <select className="px-2 py-1 border-[2px] rounded-md" name="account_info" id="account_info">
                                    {catalog?.map(a => <option key={a.account_name} value={JSON.stringify({
                                        type: a.type,
                                        id: a.account_id
                                    })}>{a.account_name}</option>)}
                                </select>
                                {errors.account_info ? <FieldError message={errors.account_info}></FieldError> : null}
                            </div>
                            <div className="flex flex-col gap-y-2">
                                <label htmlFor="ammount">Monto</label>
                                <input id="ammount" className="px-2 py-1 border-[2px] rounded-md" name="ammount" type="number" />
                                {errors.ammount ? <FieldError message={errors.ammount}></FieldError> : null}
                            </div>
                            <button className="p-2 self-end bg-[#2C3E50] rounded-md text-white">
                                <svg className="w-5 h-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3l0 82.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z"/></svg>
                            </button>
                        </form>
                    </div>
                    <div className="flex items-center justify-between">
                        <h3>Agrega una cuenta nueva, se agregara a tu catalogo</h3>
                        <button onClick={onClickAddAccountBtn} className="flex items-center gap-x-2 bg-[#2C3E50] py-1 px-2 rounded-md text-white font-medium">
                            <svg className="w-4 h-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/></svg>
                            Agregar Cuenta
                        </button>
                    </div>
                </div>
            </div>
            <form id="reportsForm" onSubmit={handleSubmit} className="grid gap-x-[60px] grid-cols-2">
                <section>
                    <h2 className="text-2xl font-semibold text-[#6B8E23]">Balance General</h2>
                    <div className="space-y-10 mt-5">
                        <div className="space-y-2">
                            <h3 className="text-xl font-medium">Activos</h3>
                            <div className="space-y-5">
                                <div className="space-y-2">
                                    <h4 className="text-[#2C3E50] text-lg font-medium">Circulantes</h4>
                                    <div className="space-y-3">
                                        {getAccounts('balance_sheet', 'Activo', 'Circulante')?.map(a => <AccountValue key={a.id} periodId={period.id} detail={a}>{a.ammount}</AccountValue>)}
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <h4 className="text-[#2C3E50] text-lg font-medium">Fijos</h4>
                                    <div className="space-y-3">
                                        {getAccounts('balance_sheet', 'Activo', 'Fijo')?.map(a => <AccountValue key={a.id} periodId={period.id} detail={a}>{a.ammount}</AccountValue>)}
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <h4 className="text-[#2C3E50] text-lg font-medium">Diferidos</h4>
                                    <div className="space-y-3">
                                        {getAccounts('balance_sheet', 'Activo', 'Diferido')?.map(a => <AccountValue key={a.id} periodId={period.id} detail={a}>{a.ammount}</AccountValue>)}
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
                                        {getAccounts('balance_sheet', 'Pasivo', 'Circulante')?.map(a => <AccountValue key={a.id} periodId={period.id} detail={a}>{a.ammount}</AccountValue>)}
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <h4 className="text-[#2C3E50] text-lg font-medium">No Circulantes</h4>
                                    <div className="space-y-3">
                                        {getAccounts('balance_sheet', 'Pasivo', 'No Circulante')?.map(a => <AccountValue key={a.id} periodId={period.id} detail={a}>{a.ammount}</AccountValue>)}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-xl font-medium">Capital</h3>
                            <div className="space-y-3">
                                {getAccounts('balance_sheet', 'Capital', null)?.map(a => <AccountValue key={a.id} periodId={period.id} detail={a}>{a.ammount}</AccountValue>)}
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
                               {getAccounts('income_statement', 'Ventas')?.map(a => <AccountValue key={a.id} periodId={period.id} detail={a}>{a.ammount}</AccountValue>)}
                            </div>
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-xl font-medium">Costo de Venta</h3>
                            <div className="space-y-3">
                                {getAccounts('income_statement', 'Costo de Venta')?.map(a => <AccountValue key={a.id} periodId={period.id} detail={a}>{a.ammount}</AccountValue>)}
                            </div>
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-xl font-medium">Gastos de Venta</h3>
                            <div className="space-y-3">
                                {getAccounts('income_statement', 'Gastos de Venta')?.map(a => <AccountValue key={a.id} periodId={period.id} detail={a}>{a.ammount}</AccountValue>)}
                            </div>
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-xl font-medium">Gastos de Administracion</h3>
                            <div className="space-y-3">
                               {getAccounts('income_statement', 'Gastos de Administracion')?.map(a => <AccountValue key={a.id} periodId={period.id} detail={a}>{a.ammount}</AccountValue>)}
                            </div>
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-xl font-medium">Gastos Financieros</h3>
                            <div className="space-y-3">
                                {getAccounts('income_statement', 'Gastos Financieros')?.map(a => <AccountValue key={a.id} periodId={period.id} detail={a}>{a.ammount}</AccountValue>)}
                            </div>
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-xl font-medium">Producto Financiero</h3>
                            <div className="space-y-3">
                                {getAccounts('income_statement', 'Producto Financiero')?.map(a => <AccountValue key={a.id} periodId={period.id} detail={a}>{a.ammount}</AccountValue>)}
                            </div>
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-xl font-medium">Otros Gastos</h3>
                            <div className="space-y-3">
                                {getAccounts('income_statement', 'Otros Gastos')?.map(a => <AccountValue key={a.id} periodId={period.id} detail={a}>{a.ammount}</AccountValue>)}
                            </div>
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-xl font-medium">Otros Ingresos</h3>
                            <div className="space-y-3">
                                {getAccounts('income_statement', 'Otros Ingresos')?.map(a => <AccountValue key={a.id} periodId={period.id} detail={a}>{a.ammount}</AccountValue>)}
                            </div>
                        </div>
                    </div>
                </section>
            </form>
            <div className="flex items-center w-full justify-between sticky bottom-0 right-0">
                <span></span>
                <a className="rounded-full w-10 h-10 bg-white shadow-sm border-[1px] flex items-center justify-center hover:bg-[#a0c752] hover:text-white" href="#top">
                    <svg className="w-4 h-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2 160 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-306.7L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"/></svg>                   
                </a>
            </div>
            {alert && <Alert onClose={() => setAlert(null)} alertType={alert.type} msg={alert.msg}></Alert>}
        </AppLayout>
    )

}