import React from 'react';
export function InputRadioInformation({
    id,
    value,
    checked,
    onChange,
    placeholder,
    description,
    disabled
}) {
    const [showDescription, setShowDescription] = React.useState(false);

    const handleInputChange = () => {
        setShowDescription(!showDescription);
    };

    return (
        <div className={`flex flex-col relative h-fit min-w-40 max-w-86 px-4 py-6 gap-2 border ${checked ? 'border-rosa-destaque' : 'border-cinza-100'} ${checked ? 'text-fun2' : 'text-ct3'} rounded-lg shadow-[0_4px_8px_0px_rgba(227,227,227)]`}>
            <div className='flex gap-2'>
                <input
                    id={id}
                    type="radio"
                    value={value}
                    checked={checked}
                    onChange={(e) => {
                        onChange(e);
                        handleInputChange();
                    }}
                    disabled={disabled}
                />
                <label htmlFor={id} className="cursor-pointer">{placeholder}</label>
            </div>
            
            {checked && (
                <div className="p-2 mt-1">
                    <p>{description}</p>
                </div>
            )}
        </div>
    );
}
