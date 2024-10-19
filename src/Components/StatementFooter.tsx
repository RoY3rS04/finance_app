export default function StatementFooter({ goTo }: {goTo: string}) {
    return (
        <div className="my-4 flex items-center justify-between">
            <button className='bg-[#2C3E50] rounded-md py-2 px-4 text-white font-medium text-lg' type="reset">
            Borrar Datos
            </button>
            <span className="inline-block h-10 w-10 p-2 bg-[#2C3E50] rounded-full">
                <a href={`#${goTo}`} className='text-white w-full h-full flex items-center justify-center'>
                    <svg width='20' height='20' fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2 160 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-306.7L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"/></svg>
                </a>
            </span>
        </div>
    )
}