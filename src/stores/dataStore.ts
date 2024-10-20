import { create } from "zustand";
import { AccountPath, AccountType, DataStore, SheetType, Accounts } from '../types/myTypes';
import { createSheets } from "../helpers/createSheets";
import { isAssetCirAccount } from "../helpers/isAccount";

export const useDataStore = create<DataStore>()((set) => ({
    periods_q: 1,
    periods: createSheets(1),
    addPeriods: () => set((state) => {
        if (state.periods_q === 3) {
            return state;
        }

        return (
            {
                periods_q: state.periods_q + 1,
                periods: createSheets(state.periods_q + 1)
            }
        )
    }),
    decreasePeriods: () => set((state) => {
        if (state.periods_q === 1) { 
            return state;
        }

        return (
            {
                periods_q: state.periods_q - 1,
                periods: createSheets(state.periods_q - 1)
            }
        )
    }),
    onChangeAccount: (period: number, accountPath: AccountPath, val: number) => set((state) => {

        const periods = state.periods;

        console.log(accountPath, period);

        if (accountPath.sheet === 'balance_sheet' && accountPath.accountD === 'assets' && accountPath.accountT === 'circulantes' && isAssetCirAccount(accountPath.name)) {
            periods[period - 1][accountPath.sheet][accountPath.accountD][accountPath.accountT][accountPath.name] = val;
        }
        
        return ({periods})
    })
}))