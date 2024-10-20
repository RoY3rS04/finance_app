import { useDataStore } from "../stores/dataStore";
import { AccountPath } from "../types/myTypes";

export function AccountInput({ account, val }: { account: AccountPath, val: number }) {
    
    const {periods_q, periods, onChangeAccount} = useDataStore()

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
            inputs.push(<input onChange={(e) => onChangeAccount(i, account, Number(e.target.value))} value={periods[i-1]} className={`${setWidth()} rounded-md border-2 border-gray-300 p-1`} type="number" />)
        }

        return inputs;
    }

    return (
         <div className="grid grid-cols-3 gap-x-2 items-center">
            <p className='text-md'>{account.name}</p>
            <div className={`col-span-2 grid grid-cols-${periods_q} gap-x-5 place-items-center`}>
                {showInputs()}
            </div>
        </div>
    )
}