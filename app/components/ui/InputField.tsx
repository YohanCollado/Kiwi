import React from "react";

type InputFieldProps ={
    placeholder: string;
    type?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
    className?: string;
    error?: string;
};

export default function InputField({
    placeholder, 
    type = "text",
    value, 
    onChange,
    required = false,
    className = "",
    error="",
}: InputFieldProps) {
    
    const hasError = Boolean(error);
    return (
        <div className="flex flex-col w-full">
            <input
                type={type}
                placeholder={hasError ? error: placeholder}
                value={value}
                onChange={onChange}
                required={required}
                className={`
                    px-4 py-3 rounded-md border
                    text-white
                    focus:outline-none focus:ring-2 transition-all duration-200
                    ${
                        hasError
                        ? "border-red-500 focus:ring-red-500 placeholder-red-400"
                        : "border-green-600 focus:ring-green-600 placeholder-gray-300"
                    }
                    ${className}
                `}
            />

            {hasError && (
                <span className="text-red-500 text-sm mt-1">
                    {error}
                </span>
            )}
        </div>
    );
}
