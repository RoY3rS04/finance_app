import { router } from "@inertiajs/react";
import FieldError from "../Components/FieldError";
import { useModalStore } from "../stores/modalStore";
import { useState } from "react";

export default function CreatePeriod() {

    const { toggle } = useModalStore();
    const [errors, setErrors] = useState({});

    function handleSubmit(e) {

        e.preventDefault();

        const data = new FormData(e.target);

        router.post('/periods', data, {
            onError: errors => {
                setErrors(errors);
            },
            onSuccess: () => {
                toggle();
            }
        });

    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col space-y-5">
            <div className="flex flex-col gap-y-4">
                <div className="flex flex-col gap-y-2">
                    <label htmlFor="description">Descripcion</label>
                    <input name="description" id="description" className="px-2 py-1 border-[2px] rounded-md" type="text" />
                    {errors?.description && <FieldError message={errors.description}></FieldError>}
                </div>
                <div className="flex flex-col gap-y-2">
                    <label htmlFor="created_at">Fecha</label>
                    <input name="created_at" id="created_at" className="px-2 py-1 border-[2px] rounded-md" type="date" />
                    {errors?.created_at && <FieldError message={errors.created_at}></FieldError>}
                </div>
            </div>
            <button className="bg-[#2C3E50] p-2 rounded-md text-white font-medium">
                Agregar
            </button>
        </form>
    )

}