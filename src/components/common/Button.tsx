import React from 'react';
import { twMerge } from 'tailwind-merge';


interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'danger';
}

export const Button: React.FC<ButtonProps> = ({
    children,
    className,
    variant = 'primary',
    ...props
}) => {
    const baseClasses = 'mt-3 px-6 py-3 rounded-lg font-semibold transition-all duration-200';
    const variantClasses = {
        primary: 'bg-blue-600 text-white hover:bg-blue-700 shadow-md',
        secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
        danger: 'bg-red-500 text-white hover:bg-red-600',
    };

    return (
        <button
            className={twMerge(baseClasses, variantClasses[variant], className)}
            {...props}
        >
            {children}
        </button>
    );
};