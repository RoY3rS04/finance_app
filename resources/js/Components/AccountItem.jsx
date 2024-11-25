import OptionsSubMenu from "./OptionsSubMenu";
import { useSubMenusStore } from "../stores/subMenusStore";
import { useModalStore } from "../stores/modalStore";
import EditAccount from "../Forms/EditAccount";
import RemoveAccount from "../Forms/RemoveAccount";
import { router } from "@inertiajs/react";

export default function AccountItem({ account }) {
    
    const { subMenus, setMenus } = useSubMenusStore();
    const { toggle, setModal } = useModalStore();

    function editAccount() {
        setModal({
            title: 'Actualiza tu cuenta',
            content: <EditAccount account={account}></EditAccount>
        });
        toggle();
    }

    function removeAccount() {

        const removeAction = () => {
            router.patch(`/accounts/${account.id}`, {
                statementType: account.statement_type
            });
        }

        setModal({
            title: 'Elimina tu cuenta',
            content: <RemoveAccount account={account} action={removeAction}></RemoveAccount>
        });
        toggle();
    }

    return (
        <div className="flex items-center gap-x-3">
            <p>{account.account_name}</p>
            <div className="relative w-20">
                <button onClick={() => setMenus(<OptionsSubMenu editFunc={editAccount} deleteFunc={removeAccount}/>, account.account_name)} className="flex flex-col items-center text-gray-500">
                    <svg className="h-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512"><path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z" /></svg>
                </button>
                {subMenus[0]?.id === account.account_name && subMenus[0].subMenu}
            </div>
        </div>
    )

}