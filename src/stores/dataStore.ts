import { create } from "zustand";
import { AccountPath, AccountType, DataStore, SheetType, Accounts } from '../types/myTypes';
import { createSheets } from "../helpers/createSheets";
import { isAssetCirAccount } from "../helpers/isAccount";
import { getSheetValue } from "../helpers/getSheetValue";

export const useDataStore = create<DataStore>()((set) => ({
    periods_q: 1,
    periods: createSheets(1),
    addPeriods: () => set((state) => {
        if (state.periods_q === 3) {
            return state;
        }

        state.periods.push(...createSheets(1))

        return (
            {
                periods_q: state.periods_q + 1,
                periods: state.periods 
            }
        )
    }),
    decreasePeriods: () => set((state) => {
        if (state.periods_q === 1) { 
            return state;
        }

        state.periods.pop()

        return (
            {
                periods_q: state.periods_q - 1,
                periods: state.periods
            }
        )
    }),
    onChangeAccount: (period: number, accountPath: AccountPath, val?: number) => set((state) => {

        getSheetValue(state.periods, period, accountPath, false, val)
        
        return ({periods: state.periods})
    })
}))