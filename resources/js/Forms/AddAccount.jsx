import { router } from "@inertiajs/react";
import axios from "axios";
import { useEffect, useState } from "react"
import FieldError from "../Components/FieldError";

export default function AddAccount({submit_action, withValue = false}) {

    const [accountTypes, setAccountTypes] = useState({});
    const [balanceAccountType, setBalanceAccountType] = useState(1);
    const [errors, setErrors] = useState({});

    const [accountInfo, setAccountInfo] = useState({
        statementType: 'balance_sheet',
        accountType: 1,
        accountSubtype: 1,
        accountName: '',
        ammount: withValue ? 0 : null
    });

    useEffect(() => {
        getTypes();
    }, [])

    async function getTypes() {

        const { data } = await axios.get('/accounts/types');

        setAccountTypes(data);
    }

    function onChangeStatement(e) {
        
        setAccountInfo(prev => ({
            ...prev,
            statementType: e.target.value,
            accountSubtype: e.target.value === 'income_statement' ? null : prev.accountSubtype
        }))
        
    }

    function onChangeType(e) {
        
        if (accountInfo.statementType === 'balance_sheet') {
            setBalanceAccountType(e.target.value);
        }

        setAccountInfo(prev => ({
            ...prev,
            accountType: e.target.value
        }))

    }

    function onChangeSubtype(e) {
        setAccountInfo(prev => ({
            ...prev,
            accountSubtype: e.target.value
        }))
    }

    function onChangeName(e) {
        setAccountInfo(prev => ({
            ...prev,
            accountName: e.target.value
        }))
    }

    function onChangeAmmount(e) {
        setAccountInfo(prev => ({
            ...prev,
            ammount: e.target.value
        }))
    }

    function handleSubmit(e) {
        e.preventDefault();

        submit_action(accountInfo, setErrors);
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col space-y-5" action="/add-account">
            <div className="flex flex-col gap-y-4">
                <div className="flex items-center gap-x-5">
                    <div className="flex flex-1 flex-col gap-y-2">
                        <label htmlFor="account_name">Nombre</label>
                        <input value={accountInfo.accountName} onChange={onChangeName} id="account_name" name="accountName" className="px-2 py-1 border-[2px] rounded-md" type="text" />
                        {errors?.accountName && <FieldError message={errors.accountName}></FieldError>}
                    </div>
                    {accountInfo?.ammount !== null ? <div className="flex flex-col gap-y-2">
                        <label htmlFor="account_ammount">Monto</label>
                        <input value={accountInfo.ammount} onChange={onChangeAmmount} id="account_ammount" name="ammount" className="px-2 py-1 border-[2px] rounded-md" type="number" />
                        {errors.ammount && <FieldError message={errors.ammount}></FieldError>}
                    </div> : null}
                </div>
                <div className="flex flex-col gap-y-2">
                    <label htmlFor="account_financial_statement">Estado financiero</label>
                    <select onChange={onChangeStatement} value={accountInfo.statementType} id="account_financial_statement" className="px-2 py-1 border-[2px] rounded-md" name="statementType">
                        <option value='balance_sheet'>Balance General</option>
                        <option value='income_statement'>Estado de Resultados</option>
                    </select>
                    {errors?.statementType && <FieldError message={errors.statementType}></FieldError>}
                </div>
                <div className="flex flex-col gap-y-2">
                    <label htmlFor="account_type">Tipo de Cuenta</label>
                    <select onChange={onChangeType} value={accountInfo.accountType} className="px-2 py-1 border-[2px] rounded-md" name="accountType" id="account_type">
                        {
                            accountInfo.statementType === 'balance_sheet' ? 
                                accountTypes.balance_sheet?.types.map(t => <option key={t.id} value={t.id}>{t.type_name}</option>)
                                : accountTypes.income_statement?.types.map(t => <option key={t.id} value={t.id}>{t.type_name}</option>)
                        }
                    </select>
                    {errors?.accountType && <FieldError message={errors.accountType}></FieldError>}
                </div>
                {
                    (accountInfo.statementType === 'balance_sheet' && balanceAccountType !== '3') && (
                        <div className="flex flex-col gap-y-2">
                            <label htmlFor="account_subtype">Subtipo de Cuenta</label>
                            <select onChange={onChangeSubtype} value={accountInfo.accountSubtype} className="px-2 py-1 border-[2px] rounded-md" name="accountSubtype" id="account_subtype">
                                {accountTypes.balance_sheet?.subtypes.map(sub => <option key={sub.id} value={sub.id}>{sub.subtype_name}</option>)}
                            </select>
                            {errors?.accountSubtype && <FieldError message={errors.accountSubtype}></FieldError>}
                        </div>
                    )
                }
            </div>
            <button className="bg-[#2C3E50] p-2 rounded-md text-white font-medium">
                Agregar Cuenta
            </button>
        </form>
    )

}