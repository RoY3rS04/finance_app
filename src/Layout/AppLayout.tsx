import { Outlet, useLocation } from "react-router-dom";
import LogoImage from '../assets/360_F_223091926_taex8viqFkpWkmWd2isa6jijLAnZWKTF.png'

export function AppLayout() {

    const { pathname } = useLocation();

    return (
        <div className='flex flex-col h-screen' style={{ fontFamily: "Afacad Flux" }}>
            <header className='p-5 bg-[#a9dfbf41]'>
                <nav className='flex items-center justify-between text-lg'>
                    <a href="/" className="flex items-center gap-x-1">
                        <div className="w-[50px] h-[60px]">
                            <img className="h-full w-full object-fill" src={LogoImage} alt="App Logo" />
                        </div>
                        <p className="text-[#228B22] text-3xl font-semibold">Finance</p>
                    </a>
                    <a className={`text-xl hover:text-[#228B22] ${pathname === '/' ? 'text-[#006400] underline' : ''}`} href="/">Razones Financieras</a>
                    <a className={`text-xl hover:text-[#228B22] ${pathname === '/analysis' ? 'text-[#006400] underline' : ''}`} href="/analysis">Analisis Vertical y Horizontal</a>
                    <a className={`text-xl hover:text-[#228B22] ${pathname === '/origin_application' ? 'text-[#006400] underline' : ''}`} href="/origin_application">Estado de origen y aplicacion de fondos</a>
                </nav>
            </header>
            <main className='w-full bg-[#f5f8f9] flex-1'>
                <Outlet/>
            </main>
        </div>
    )
}