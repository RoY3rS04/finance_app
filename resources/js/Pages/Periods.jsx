import { usePage } from "@inertiajs/react";
import PeriodsList from "../Components/PeriodsList";
import CreatePeriod from "../Forms/CreatePeriod";
import { AppLayout } from "../Layout/AppLayout";
import { useModalStore } from "../stores/modalStore";
import { useEffect, useState } from "react";
import Alert from "../Components/Alert";

export default function Periods({periods}) {

    const { setModal, toggle } = useModalStore();
    const flash = usePage().props.flash;
    const [alert, setAlert] = useState(flash.alert);

    setTimeout(() => {
        setAlert(null);
    }, 5000);

    useEffect(() => {
        setAlert(flash.alert);
    }, [flash.alert]);

    function createPeriod() {

        setModal({
            title: 'Crea un periodo contable',
            content: <CreatePeriod></CreatePeriod>
        })
        toggle();

    }

    return (
        <AppLayout>
            <h1 className="text-2xl">Periodos Contables</h1>
            <p>Revisa los estados financieros correspondientes a cada periodo contable</p>
            <article className="mt-10">
                <div className="flex items-center justify-between">
                    <h2 className="text-xl">Todos los periodos</h2>
                    <div className="flex items-center gap-x-3">
                        <label htmlFor="search" className="flex items-center gap-x-2 text-gray-500 border-[2px] rounded-md pl-2">
                            <svg className="w-4 h-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
                            <input id="search" className="text-black rounded-md py-1" type="text" />
                        </label>
                        <button className="text-gray-500 flex items-center gap-x-2 border-[2px] rounded-md py-1 px-2 font-medium">
                            <svg className="w-4 h-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z"/></svg>
                            <span className="">Filtros</span>
                        </button>
                        <button onClick={createPeriod} className="flex items-center gap-x-2 bg-[#2C3E50] py-1 px-2 rounded-md text-white font-medium">
                            <svg className="w-4 h-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/></svg>
                            Agregar Periodo
                        </button>
                    </div>
                </div>
                <hr className="my-5" />
                <div>
                    <PeriodsList list={periods}></PeriodsList>
                </div>
            </article>
            {alert && <Alert onClose={() => setAlert(null)} alertType={alert.type} msg={alert.msg}></Alert>}
        </AppLayout>
    )
}