import { Link, router, usePage } from "@inertiajs/react";
import { AppLayout } from "../Layout/AppLayout";
import { useEffect, useState } from "react";
import RatioCard from "../Components/RatioCard";
import Alert from "../Components/Alert";

export default function PeriodRatios({period}) {

  const [analyzing, setAnalyzing] = useState(false);
  const flash = usePage().props.flash;
  const [alert, setAlert] = useState(flash.alert);

  setTimeout(() => {
    setAlert(null);
  }, 5000);

  useEffect(() => {
    setAlert(flash.alert);
  }, [flash.alert]);

  function onClickAnalysis() {

    setAnalyzing(true);
      
    router.post(`/periods/${period.id}/ratios`, null, {
      onFinish: () => setAnalyzing(false),
    });

  }

    return (
        <AppLayout>
            <h1 className="text-3xl">{period.description}</h1>
            <nav className="flex items-center gap-x-5 mt-4 text-lg text-gray-600 border-b-2">
                <Link className="flex items-center gap-x-2 py-2" href={`/periods/${period.id}`}>
                    <svg className="w-5 h-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-288-128 0c-17.7 0-32-14.3-32-32L224 0 64 0zM256 0l0 128 128 0L256 0zM80 64l64 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L80 96c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64l64 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-64 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm16 96l192 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32L96 352c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32zm0 32l0 64 192 0 0-64L96 256zM240 416l64 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-64 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/></svg>
                    Estados Finacieros
                </Link>
                <Link className={`flex items-center gap-x-2 py-2 ${window.location.pathname.includes('ratios') ? 'border-b-2 border-b-[#228B22] text-[#228B22]': null}`} href={`/periods/${period.id}/ratios`}>
                    <svg className="w-5 h-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M304 240l0-223.4c0-9 7-16.6 16-16.6C443.7 0 544 100.3 544 224c0 9-7.6 16-16.6 16L304 240zM32 272C32 150.7 122.1 50.3 239 34.3c9.2-1.3 17 6.1 17 15.4L256 288 412.5 444.5c6.7 6.7 6.2 17.7-1.5 23.1C371.8 495.6 323.8 512 272 512C139.5 512 32 404.6 32 272zm526.4 16c9.3 0 16.6 7.8 15.4 17c-7.7 55.9-34.6 105.6-73.9 142.3c-6 5.6-15.4 5.2-21.2-.7L320 288l238.4 0z"/></svg>
                    Razones Financieras
                </Link>
            </nav>
            {
              period.ratios.length > 0 ?
                <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-5 mt-5">
                  {period.ratios.map(ratio => <RatioCard key={ratio.id} ratio={ratio}></RatioCard>)}
                </div>
                : !analyzing ? <div className="flex items-center justify-center absolute top-[50%] left-[25%] flex-col gap-y-5">
                    <h2 className="text-2xl">Aun no has realizado un analisis de las razones de este periodo</h2>
                    <button onClick={onClickAnalysis} className="flex items-center gap-x-2 bg-[#2C3E50] py-2 px-4 rounded-md text-white font-medium text-lg">
                        <svg className='w-6 h-6' fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zm-312 8l0 64c0 13.3 10.7 24 24 24s24-10.7 24-24l0-64c0-13.3-10.7-24-24-24s-24 10.7-24 24zm80-96l0 160c0 13.3 10.7 24 24 24s24-10.7 24-24l0-160c0-13.3-10.7-24-24-24s-24 10.7-24 24zm80 64l0 96c0 13.3 10.7 24 24 24s24-10.7 24-24l0-96c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/></svg>
                        Hacer analisis
                    </button>
                </div>
              : null
            }
            {
                analyzing ? <div className="flex items-center justify-center absolute top-[50%] left-[50%]">
                        <svg class="animate-spin -ml-1 mr-3 h-[60px] w-[60px] text-[#228B22]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                </div>
                : null
        }
        {alert && <Alert onClose={() => setAlert(null)} alertType={alert.type} msg={alert.msg}></Alert>}
        </AppLayout>
    )

}