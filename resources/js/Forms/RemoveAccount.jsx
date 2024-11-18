export default function RemoveAccount({account}) {

    console.log(account);

    function handleSubmit(e) {

        e.preventDefault();

    }

    return (
        <form onSubmit={handleSubmit}>
            <p>Estas seguro de que quieres eliminar la cuenta?</p>
            <div className="flex items-center gap-x-3">
                <button className="p-1 rounded-md border-[1px] border-gray-500 text-gray-600" type="button">Cancelar</button>
                <button className="flex items-center gap-x-2 p-1 text-white font-semibold bg-red-600">
                    <svg className="w-4 h-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0L284.2 0c12.1 0 23.2 6.8 28.6 17.7L320 32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64S14.3 32 32 32l96 0 7.2-14.3zM32 128l384 0 0 320c0 35.3-28.7 64-64 64L96 512c-35.3 0-64-28.7-64-64l0-320zm96 64c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16z"/></svg>
                    Eliminar
                </button>
            </div>
        </form>
    )

}