export interface TextAreaProps {
    label: string;
    placeholder?: string;
    rows?: number;
}

export const TextArea = ({label,placeholder,rows}:TextAreaProps) => {
    return (
        <div className="flex flex-col gap-2 text-white my-4">
            <label className="text-[15px]">{label}</label>
            <textarea name="1"  rows={rows ?? 3} cols={3} placeholder={placeholder} className="border-b p-2 border-white w-[100%] h-[40px] bg-transparent"/>
        </div>
    )
}