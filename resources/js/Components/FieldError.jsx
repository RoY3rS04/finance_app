export default function FieldError({ message }) {

    return (
        <div className="py-1 px-2 bg-red-200 text-red-600 rounded-sm">
            {message}
        </div>
    )

}