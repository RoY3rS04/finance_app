export function AccountInput({ name, periods }: { name: string, periods: number }) {
    
    function showInputs() {

        const inputs = [];

        const setWidth = (): string => {

            if (periods === 1) {
                return 'place-self-stretch';
            }

            if (periods === 2) {
                return 'max-w-[200px]'
            }

            return 'max-w-[120px]'
        }

        for (let i = 1; i <= periods; i++) {
            inputs.push(<input className={`${setWidth()} rounded-md border-2 border-gray-300 p-1`} type="number" />)
        }

        return inputs;
    }

    return (
         <div className="grid grid-cols-3 gap-x-2 items-center">
            <p className='text-md'>{name}</p>
            <div className={`col-span-2 grid grid-cols-${periods} gap-x-5 place-items-center`}>
                {showInputs()}
            </div>
        </div>
    )
}