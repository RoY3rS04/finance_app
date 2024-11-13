import { useState } from 'react'
import LogoImage from '../../assets/logo.png'

export function AppLayout({children}) {

    const [collapsed, setCollapsed] = useState(false);

    function onClickCollapseButton() {
        setCollapsed((prev) => !prev);
    }

    return (
        <div className='flex min-h-screen bg-[#f5f8f9]' style={{ fontFamily: "Afacad Flux" }}>
            <aside className={`${!collapsed ? 'w-[250px]' : 'w-20 items-center'} flex flex-col p-5 gap-y-10 transition-all ease-in duration-300 relative`}>
                <a href="/" className="flex items-center gap-x-1">
                    <div className="w-[50px] h-[60px]">
                        <img className="h-full w-full object-fill" src={LogoImage} alt="App Logo" />
                    </div>
                    {
                        !collapsed && <p className="text-[#228B22] text-3xl font-semibold">Finance</p>
                    }
                </a>
                <nav className={`flex flex-col ${!collapsed ? '' : 'items-center'} gap-y-5 text-lg`}>
                    <a className='flex items-center gap-x-2 text-gray-500 hover:text-[#228B22]' href="/">
                        <svg className='w-[20px] h-[20px]' fill='currentColor' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" /></svg>
                        {
                            !collapsed && <span>Dashboard</span>
                        }
                    </a>
                    <a className='flex items-center gap-x-2 text-gray-500 hover:text-[#228B22]' href="/periods">
                        <svg className='w-[20px] h-[20px]' fill='currentColor' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M128 72a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm32 97.3c28.3-12.3 48-40.5 48-73.3c0-44.2-35.8-80-80-80S48 51.8 48 96c0 32.8 19.7 61 48 73.3L96 224l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l256 0 0 54.7c-28.3 12.3-48 40.5-48 73.3c0 44.2 35.8 80 80 80s80-35.8 80-80c0-32.8-19.7-61-48-73.3l0-54.7 256 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0 0-54.7c28.3-12.3 48-40.5 48-73.3c0-44.2-35.8-80-80-80s-80 35.8-80 80c0 32.8 19.7 61 48 73.3l0 54.7-320 0 0-54.7zM488 96a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM320 392a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"/></svg>
                        {
                            !collapsed && <span>Periodos Contables</span>
                        }
                    </a>
                </nav>
                {
                    !collapsed ? <button onClick={onClickCollapseButton} className='rounded-full w-10 h-10 shadow-lg bg-white absolute top-[50%] right-[-20px] text-gray-500 flex items-center justify-center hover:bg-[#a0c752] hover:text-white'>
                        <svg width={15} height={15} fill='currentColor' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
                    </button>
                    : 
                    <button onClick={onClickCollapseButton} className='rounded-full w-10 h-10 shadow-lg bg-white absolute top-[50%] right-[-20px] text-gray-500 flex items-center justify-center hover:bg-[#a0c752] hover:text-white'>
                        <svg width={15} height={15} fill='currentColor' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
                    </button>
                }
            </aside>
            <main className='flex-1 p-5 mt-3 rounded-md shadow-xl bg-white'>
                <div className='ml-3'>
                    {children}
                </div>
            </main>
        </div>
    )
}

/*
<header className='p-3 bg-[#a0c752] sticky top-0 left-0 z-10'>
                <nav className='flex items-center justify-between text-lg'>
                    <a href="/" className="flex items-center gap-x-1">
                        <div className="w-[50px] h-[60px]">
                            <img className="h-full w-full object-fill" src={LogoImage} alt="App Logo" />
                        </div>
                        <p className="text-white text-3xl font-semibold">Finance</p>
                    </a>
                </nav>
            </header>
*/ 