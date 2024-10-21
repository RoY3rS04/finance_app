import { AccountPath, Period } from "../types/myTypes";
import * as account from "./isAccount";

export function getSheetValue(periods: Period[], period: number, accountPath: AccountPath): number|undefined {

    const { sheet, accountD, accountT, name } = accountPath;

    if (sheet === 'balance_sheet' && accountD === 'assets') {
        
        if (accountT === 'circulantes' && account.isAssetCirAccount(name)) {
            return periods[period - 1][sheet][accountD][accountT][name];
        } else if (accountT === 'no_circulantes' && account.isAssetNoCirAccount(name)) {
            return periods[period - 1][sheet][accountD][accountT][name];
        } else if (accountT === 'diferidos' && account.isAssetDifAccount(name)) {
            return periods[period - 1][sheet][accountD][accountT][name];
        }

    } else if (sheet === 'balance_sheet' && accountD === 'liabilities') {
        if (accountT === 'circulantes' && account.isLiabilityCirAccount(name)) {
            return periods[period - 1][sheet][accountD][accountT][name];
        } else if (accountT === 'no_circulantes' && account.isLiabilityNoCirAccount(name)) {
            return periods[period - 1][sheet][accountD][accountT][name];
        }
    } else if (sheet === 'balance_sheet' && accountD === 'capital' && account.isCapitalAccount(name)) {
        return periods[period - 1][sheet][accountD][name];
    } else if(sheet === 'results_sheet') {
        if (accountD === 'ventas' && account.isSaleAccount(name)) {
            return periods[period - 1][sheet][accountD][name];
        }

        if (accountD === 'costo_ventas' && account.isSaleCostAccount(name)) {
            return periods[period - 1][sheet][accountD][name];
        }

        if (accountD === 'gasto_ventas' && account.isSaleExpenseAccount(name)) {
            return periods[period - 1][sheet][accountD][name];
        }

        if (accountD === 'gasto_admin' && account.isAdminExpenseAccount(name)) {
            return periods[period - 1][sheet][accountD][name];
        }

        if (accountD === 'otros_ingresos' && account.isOthersInsAccount(name)) {
            return periods[period - 1][sheet][accountD][name];
        }
    }

    return 0;
}