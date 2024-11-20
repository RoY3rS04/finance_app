export default function AccountValue({ account }) {
    
    return (
        <div>
            <div className="flex items-center justify-between gap-x-5">
                {account.account_name}
                <input name={account.account_name} className="p-2 border-[2px]" type="text" defaultValue={account.ammount} />
            </div>
        </div>
    )

}