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
    return (
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            required={required}
            className={`
            px-4 py-3 rounded-md border border-green-600
            focus: outline-none focus:ring-2 focus:ring-green-600
            text-white placeholder-grey-300
                ${className}"
            `}
        />
    );
}
