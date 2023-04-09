export interface InputProps {
    label: string;
    placeholder?: string;
}
export const Input = ({label,placeholder}:InputProps) => {
    return (
        <div className="flex flex-col gap-2 text-white py-1.5">
            <label className="text-[15px]">{label}</label>
            <input placeholder={placeholder} className="border-b border-white w-[100%] h-[40px] px-2 bg-transparent "/>
        </div>
    )
}   