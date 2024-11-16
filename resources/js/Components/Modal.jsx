import { useModalStore } from "../stores/modalStore"

export default function Modal({ children, title }) {
    
    const { toggle } = useModalStore();

    return (
        <div className="absolute top-0 left-0 h-screen w-full flex items-center justify-center">
            <div className="bg-white rounded-md min-w-[400px] p-5 z-10 relative space-y-3">
                <div className="flex items-center gap-x-3 justify-between">
                    <p className="text-xl font-medium">{title}</p>
                    <button onClick={toggle} className="text-gray-500">
                        <svg className="w-5 h-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
                    </button>
                </div>
                {children}
            </div>
        </div>
    )

}