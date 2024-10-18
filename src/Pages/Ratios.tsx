export default function Ratios() {
    return (
        <form className='mt-10 mx-5' action="">
            <section className='grid grid-cols-2 gap-x-5'>
                <article className='rounded-xl bg-white shadow-xl p-4'>
                    <h1 className='text-xl text-[#6B8E23]'>Balance General</h1>
                </article>
                <article className='rounded-xl text-[#6B8E23] bg-white shadow-xl p-4'>
                    <h1 className='text-xl'>Estado de Resultados</h1>
                </article>
            </section>
            <button className='bg-[#2C3E50] rounded-md py-2 px-4 text-white font-medium text-lg mt-5'>
                Realizar Analisis
            </button>
        </form>
    )
}