import axios from "axios";
import { useEffect, useState } from "react"

export default function AddAccount() {

    const [selectedStatement, setSelectedStatement] = useState('balance_sheet');
    const [accountTypes, setAccountTypes] = useState({});
    const [balanceAccountType, setBalanceAccountType] = useState(1);

    useEffect(() => {
        getTypes();
    }, [])

    async function getTypes() {

        const { data } = await axios.get('/accounts/types');

        setAccountTypes(data);
    }

    function onChangeStatement(e) {
        setSelectedStatement(e.target.value);
    }

    function onChangeType(e) {
        
        if (selectedStatement === 'balance_sheet') {
            setBalanceAccountType(e.target.value);
        }

    }

    return (
        <form className="flex flex-col space-y-5" action="/add-account">
            <div className="flex flex-col gap-y-4">
                <div className="flex flex-col gap-y-2">
                    <label htmlFor="account_name">Nombre</label>
                    <input id="account_name" className="px-2 py-1 border-[2px] rounded-md" type="text" />
                </div>
                <div className="flex flex-col gap-y-2">
                    <label htmlFor="account_financial_statement">Estado financiero</label>
                    <select onChange={onChangeStatement} id="account_financial_statement" className="px-2 py-1 border-[2px] rounded-md" name="statement_type">
                        <option value='balance_sheet'>Balance General</option>
                        <option value='income_statement'>Estado de Resultados</option>
                    </select>
                </div>
                <div className="flex flex-col gap-y-2">
                    <label htmlFor="account_type">Tipo de Cuenta</label>
                    <select onChange={onChangeType} className="px-2 py-1 border-[2px] rounded-md" name="account_type" id="account_type">
                        {
                            selectedStatement === 'balance_sheet' ? 
                                accountTypes.balance_sheet?.types.map(t => <option key={t.id} value={t.id}>{t.type_name}</option>)
                                : accountTypes.income_statement?.types.map(t => <option key={t.id} value={t.id}>{t.type_name}</option>)
                        }
                    </select>
                </div>
                {
                    (selectedStatement === 'balance_sheet' && balanceAccountType !== '3') && (
                        <div className="flex flex-col gap-y-2">
                            <label htmlFor="account_subtype">Subtipo de Cuenta</label>
                            <select className="px-2 py-1 border-[2px] rounded-md" name="account_subtype" id="account_subtype">
                                {accountTypes.balance_sheet?.subtypes.map(sub => <option key={sub.id} value={sub.id}>{sub.subtype_name}</option>)}
                            </select>
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