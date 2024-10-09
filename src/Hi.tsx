export function Hi({ msg }: {msg: string}) {
    return (
        <div className="h-full w-full flex justify-center items-center">
            <h1 className="text-6xl">{msg}</h1>
        </div>
    )
}