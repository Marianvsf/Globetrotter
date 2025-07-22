import React from 'react';
import { twMerge } from 'tailwind-merge';

interface DatePickerProps {
    selectedDate: string;
    onChange: (date: string) => void;
    className?: string;
    min?: string;
    max?: string;
    id?: string;
}

const DatePicker: React.FC<DatePickerProps> = ({ selectedDate, onChange, className, ...props }) => {
    const baseClasses =
        'block w-full px-4 py-2 border border-gray-700 rounded-lg shadow-sm ' +
        'bg-gray-800 text-gray-100 ' +
        'focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 sm:text-sm' +
        'dark-calendar-webkit';



    return (
        <input
            type="date"
            value={selectedDate}
            onChange={(e) => onChange(e.target.value)}
            className={twMerge(baseClasses, className)}
            {...props}
        />
    );
};

export default DatePicker;