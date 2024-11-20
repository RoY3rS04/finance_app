import axios from "axios";
import { useEffect, useState } from "react";
import FieldError from "../Components/FieldError";
import { useModalStore } from "../stores/modalStore";
import { router } from "@inertiajs/react";

export default function EditAccount({account}) {

    const [selectedStatement, setSelectedStatement] = useState(account.statement_type);
    const [accountTypes, setAccountTypes] = useState({});
    const [errors, setErrors] = useState({});
    const { toggle } = useModalStore();

    const [{accountName, accountSubtype, accountType}, setAccountInfo] = useState({
        accountType: '',
        accountSubtype: '',
        accountName: ''
    });

    useEffect(() => {
        getTypes();

        setAccountInfo({
            accountType: account.type.id,
            accountSubtype: account?.subtype?.id,
            accountName: account.account_name
        });

    }, [])

    async function getTypes() {

        const { data } = await axios.get('/accounts/types');

        setAccountTypes(data);
    }

    function onChangeStatement(e) {
        setSelectedStatement(e.target.value);
    }

    function onChangeType(e) {
        
        /*if (e.target.value === '3') {
            setAccountInfo(prev => ({
                ...prev,
                accountSubtype: null
            }))   
        }*/

        setAccountInfo(prev => ({
            ...prev,
            accountType: e.target.value
        }));

    }

    function onChangeName(e) {
        setAccountInfo(prev => ({...prev, accountName: e.target.value}))
    }

    function onChangeSubtype(e) {
        setAccountInfo(prev => ({
            ...prev,
            accountSubtype: e.target.value
        }));
    }

    async function onSubmit(e) {

        e.preventDefault();
        
        try {

            const formData = new FormData(e.target)

            let data = {
                lastStatementType: account.statement_type,
                account_id: account.id,
            };

            for (const [key, value] of formData.entries()) {
                data = {
                    ...data,
                    [key]: value
                };
            }

            router.patch('/accounts', data, {
                onError: errors => {
                    setErrors(errors);
                },
                onSuccess: () => {
                    toggle();
                }
            });

        } catch (error) {
            console.log(error);
            setErrors(error.response.data.errors);
        }

    }

    return (
        <form onSubmit={onSubmit} className="flex flex-col space-y-5">
            <div className="flex flex-col gap-y-4">
                <div className="flex flex-col gap-y-2">
                    <label htmlFor="account_name">Nombre</label>
                    <input onChange={onChangeName} value={accountName} name="accountName" id="account_name" className="px-2 py-1 border-[2px] rounded-md" type="text" />
                    {errors?.accountName && <FieldError message={errors.accountName}></FieldError>}
                </div>
                <div className="flex flex-col gap-y-2">
                    <label htmlFor="account_financial_statement">Estado financiero</label>
                    <select defaultValue={selectedStatement} onChange={onChangeStatement} id="account_financial_statement" className="px-2 py-1 border-[2px] rounded-md" name="newStatementType">
                        <option value='balance_sheet'>Balance General</option>
                        <option value='income_statement'>Estado de Resultados</option>
                    </select>
                    {errors?.selectedStatement && <FieldError message={errors.selectedStatement}></FieldError>}
                </div>
                <div className="flex flex-col gap-y-2">
                    <label htmlFor="account_type">Tipo de Cuenta</label>
                    <select value={accountType} onChange={onChangeType} className="px-2 py-1 border-[2px] rounded-md" name="accountType" id="account_type">
                        {
                            selectedStatement === 'balance_sheet' ? 
                                accountTypes.balance_sheet?.types.map(t => <option key={t.id} value={t.id}>{t.type_name}</option>)
                                : accountTypes.income_statement?.types.map(t => <option key={t.id} value={t.id}>{t.type_name}</option>)
                        }
                    </select>
                    {errors?.accountType && <FieldError message={errors.accountType}></FieldError>}
                </div>
                {
                    (selectedStatement === 'balance_sheet' && accountType !== '3') && (
                        <div className="flex flex-col gap-y-2">
                            <label htmlFor="account_subtype">Subtipo de Cuenta</label>
                            <select onChange={onChangeSubtype} value={accountSubtype} className="px-2 py-1 border-[2px] rounded-md" name="accountSubtype" id="account_subtype">
                                {accountTypes.balance_sheet?.subtypes.map(sub => <option key={sub.id} value={sub.id}>{sub.subtype_name}</option>)}
                            </select>
                            {errors?.accountSubtype && <FieldError message={errors.accountSubtype}></FieldError>}
                        </div>
                    )
                }
            </div>
            <button className="bg-[#2C3E50] p-2 rounded-md text-white font-medium">
                Actualizar
            </button>
        </form>
    )
}