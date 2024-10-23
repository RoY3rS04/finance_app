import { AccountPath, Period } from "../types/myTypes";
import * as account from "./isAccount";

export function getSheetValue(
    periods: Period[],
    period: number,
    accountPath: AccountPath,
    getting: boolean = true,
    setVal?: number
): number | undefined {

    const { sheet, accountD, accountT, name } = accountPath;

    if (sheet === 'balance_sheet' && accountD === 'assets') {
        
        if (accountT === 'circulantes' && account.isAssetCirAccount(name)) {
            if(getting) {
                return periods[period - 1][sheet][accountD][accountT][name];
            }

            periods[period - 1][sheet][accountD][accountT][name] = setVal;
        } else if (accountT === 'no_circulantes' && account.isAssetNoCirAccount(name)) {
            if(getting) {
                return periods[period - 1][sheet][accountD][accountT][name];
            }

            periods[period - 1][sheet][accountD][accountT][name] = setVal;
        } else if (accountT === 'diferidos' && account.isAssetDifAccount(name)) {
            if(getting) {
                return periods[period - 1][sheet][accountD][accountT][name];
            }

            periods[period - 1][sheet][accountD][accountT][name] = setVal;
        }

    } else if (sheet === 'balance_sheet' && accountD === 'liabilities') {
        if (accountT === 'circulantes' && account.isLiabilityCirAccount(name)) {
            if(getting) {
                return periods[period - 1][sheet][accountD][accountT][name];
            }

            periods[period - 1][sheet][accountD][accountT][name] = setVal;
        } else if (accountT === 'no_circulantes' && account.isLiabilityNoCirAccount(name)) {
            if(getting) {
                return periods[period - 1][sheet][accountD][accountT][name];
            }

            periods[period - 1][sheet][accountD][accountT][name] = setVal;
        }
    } else if (sheet === 'balance_sheet' && accountD === 'capital' && account.isCapitalAccount(name)) {
        if(getting) {
            return periods[period - 1][sheet][accountD][name];
        }

        periods[period - 1][sheet][accountD][name] = setVal;
    } else if(sheet === 'results_sheet') {
        if (accountD === 'ventas' && account.isSaleAccount(name)) {
            if(getting) {
                return periods[period - 1][sheet][accountD][name];
            }

            periods[period - 1][sheet][accountD][name] = setVal;
        }

        if (accountD === 'costo_ventas' && account.isSaleCostAccount(name)) {
            if(getting) {
                return periods[period - 1][sheet][accountD][name];
            } 

            periods[period - 1][sheet][accountD][name] = setVal;
        }

        if (accountD === 'gasto_ventas' && account.isSaleExpenseAccount(name)) {
            if(getting) {
                return periods[period - 1][sheet][accountD][name];
            }

            periods[period - 1][sheet][accountD][name] = setVal;
        }

        if (accountD === 'gasto_admin' && account.isAdminExpenseAccount(name)) {
            if(getting) {
                return periods[period - 1][sheet][accountD][name];
            }

            periods[period - 1][sheet][accountD][name] = setVal;
        }

        if (accountD === 'otros_ingresos' && account.isOthersInsAccount(name)) {
            if(getting) {
                return periods[period - 1][sheet][accountD][name];
            }

            periods[period - 1][sheet][accountD][name] = setVal;
        }
    }

    return 0;
}