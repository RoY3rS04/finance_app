import { router } from "@inertiajs/react";
import { useModalStore } from "../stores/modalStore";

export default function RemoveAccount({account}) {

    const { toggle } = useModalStore();
    
    function handleSubmit(e) {

        e.preventDefault();

        router.patch(`/accounts/${account.id}`, {
            statementType: account.statement_type
        });

        toggle();
    }

    return (
        <form className="space-y-3" onSubmit={handleSubmit}>
            <p>
                Estas seguro de que quieres eliminar la cuenta
                <span className="text-lg font-medium"> {account.account_name}</span>?
            </p>
            <div className="flex items-center gap-x-3">
                <button onClick={toggle} className="p-2 flex-1 rounded-md border-[1px] border-gray-500 text-gray-600" type="button">Cancelar</button>
                <button className="flex flex-1 items-center justify-center gap-x-2 p-2 text-white font-semibold bg-red-600 rounded-md">
                    <svg className="w-4 h-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0L284.2 0c12.1 0 23.2 6.8 28.6 17.7L320 32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64S14.3 32 32 32l96 0 7.2-14.3zM32 128l384 0 0 320c0 35.3-28.7 64-64 64L96 512c-35.3 0-64-28.7-64-64l0-320zm96 64c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16z"/></svg>
                    Eliminar
                </button>
            </div>
        </form>
    )

}