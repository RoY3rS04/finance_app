import { Outlet, useLocation } from "react-router-dom";
import LogoImage from '../assets/360_F_223091926_taex8viqFkpWkmWd2isa6jijLAnZWKTF.png'

export function AppLayout() {

    const { pathname } = useLocation();

    return (
        <div className='flex flex-col min-h-screen' style={{ fontFamily: "Afacad Flux" }}>
            <header className='p-3 bg-[#a0c752] sticky top-0 left-0 z-10'>
                <nav className='flex items-center justify-between text-lg'>
                    <a href="/" className="flex items-center gap-x-1">
                        <div className="w-[50px] h-[60px]">
                            <img className="h-full w-full object-fill" src={LogoImage} alt="App Logo" />
                        </div>
                        <p className="text-white text-3xl font-semibold">Finance</p>
                    </a>
                    <a className={`text-xl text-white hover:text-[#228B22] ${pathname === '/' ? 'text-[#006400] underline' : ''}`} href="/">Estados Financieros</a>
                    <a className={`text-xl text-white hover:text-[#228B22] ${pathname === '/ratios' ? 'underline' : ''}`} href="/ratios">Razones Financieras</a>
                    <a className={`text-xl text-white hover:text-[#228B22] ${pathname === '/analysis' ? 'underline' : ''}`} href="/analysis">Analisis Vertical y Horizontal</a>
                    <a className={`text-xl text-white hover:text-[#228B22] ${pathname === '/origin_application' ? ' underline' : ''}`} href="/origin_application">Estado de origen y aplicacion de fondos</a>
                </nav>
            </header>
            <main className='w-full bg-[#f5f8f9] flex-1'>
                <Outlet/>
            </main>
        </div>
    )
}