import React from "react";
import { getSheetValue } from "../helpers/getSheetValue";
import { useDataStore } from "../stores/dataStore";
import { AccountPath } from "../types/myTypes";

export function AccountInput({account, displayName}: { displayName: string, account: AccountPath }) {
    
    const { periods_q, periods, onChangeAccount } = useDataStore();

    function onChangeInput(e: React.ChangeEvent<HTMLInputElement>, period: number) {

        if (e.target.value === '') {
            onChangeAccount(period, account, undefined);
            return;
        }

        onChangeAccount(period, account, Number(e.target.value));
    }

    function showInputs() {

        const inputs = [];

        const setWidth = (): string => {

            if (periods_q === 1) {
                return 'place-self-stretch';
            }

            if (periods_q === 2) {
                return 'max-w-[200px]'
            }

            return 'max-w-[120px]'
        }

        for (let i = 1; i <= periods_q; i++) {
            inputs.push(<input onChange={(e) => onChangeInput(e, i)} value={getSheetValue(periods, i, account)} className={`${setWidth()} rounded-md border-2 border-gray-300 p-1`} type="number" />)
        }

        return inputs;
    }

    return (
         <div className="grid grid-cols-3 gap-x-2 items-center">
            <p className='text-md'>{displayName}</p>
            <div className={`col-span-2 grid grid-cols-${periods_q} gap-x-5 place-items-center`}>
                {showInputs()}
            </div>
        </div>
    )
}