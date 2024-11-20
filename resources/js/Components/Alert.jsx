export default function Alert({alertType, msg, onClose}) {

    const color = alertType === 'Success' ? 'text-[#69B979] border-[#69B979]' : alertType === 'Error' ? 'text-[#DE6B6B] border-[#DE6B6B]' : alertType === 'warning' ? 'text-[#ECBD61] border-[#ECBD61]' : 'text-[#4150D9] border-[#4150D9]';
    
    const bgColor = alertType === 'Success' ? 'bg-[#F4FDF6]' : alertType === 'Error' ? 'bg-[#FFF9F9]' : alertType === 'Warning' ? 'bg-[#FEFAF3]' : 'bg-[#F0F1F7]';

    return (
        <div className={`rounded-md border-[1px] ${color} ${bgColor} min-w-[150px] pl-1 pr-2 py-2 absolute bottom-10 right-10 `}>
            <div className="flex items-stretch gap-x-2">
                <div className={`${color} rounded-sm w-1`}>

                </div>
                <div className="flex flex-1 flex-col h-full gap-y-1 relative">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-x-2">
                            {getIcon(alertType)}
                            <span className="font-medium text-xl">{alertType}</span>
                        </div>
                        <button onClick={onClose}>
                            <svg className="w-4 h-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
                        </button>
                    </div>
                    <p className="text-gray-500">{msg}</p>
                </div>
            </div>
        </div>
    )

}

function getIcon(alertType) {

    return (
        <>
            {
                alertType === 'Success' ? <svg className="w-4 h-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"/></svg>
                    : alertType === 'Error' ? <svg className="w-4 h-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z" /></svg>
                        : null
            }
        </>
    )

}