import React from 'react';
import { twMerge } from 'tailwind-merge';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    customProp?: string;
}

export const Textarea: React.FC<TextareaProps> = ({ className, ...props }) => {
    const baseClasses =
        'block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm resize-y';
    return <textarea className={twMerge(baseClasses, className)} {...props} />;
};