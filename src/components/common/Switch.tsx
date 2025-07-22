import React from 'react';

interface SwitchProps {
    id: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
}

export const Switch: React.FC<SwitchProps> = ({ id, checked, onChange }) => {
    return (
        <label htmlFor={id} className="flex items-center cursor-pointer">
            <div className="relative">
                <input
                    type="checkbox"
                    id={id}
                    className="sr-only"
                    checked={checked}
                    onChange={(e) => onChange(e.target.checked)}
                />
                <div
                    className={`block w-14 h-8 rounded-full transition-colors duration-200 ease-in-out ${checked ? 'bg-blue-600' : 'bg-gray-300'
                        }`}
                ></div>
                <div
                    className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform duration-200 ease-in-out ${checked ? 'translate-x-full' : ''
                        }`}
                ></div>
            </div>
        </label>
    );
};