import React from 'react';
import { twMerge } from 'tailwind-merge';

interface SelectOption {
    value: string;
    label: string;
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    options: SelectOption[];
}

export const Select: React.FC<SelectProps> = ({ options, className, ...props }) => {
    const baseClasses =
        'block w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 sm:text-sm appearance-none pr-8 ' +
        'bg-gray-800 text-gray-100 border-gray-700 ' +
        'focus:ring-gray-500 focus:border-gray-900';
    return (
        <div className="relative">
            <select className={twMerge(baseClasses, className)} {...props}>
                {options.map((option) => (
                    <option key={option.value} value={option.value} className="bg-gray-800 text-gray-100">
                        {option.label}
                    </option>
                ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
            </div>
        </div>
    );
};