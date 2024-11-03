import React from 'react';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  className?: string;
}

export default function Select({ label, error, className = '', ...props }: SelectProps) {
  return (
    <div className={className}>
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}
      <select
        className={`block w-full rounded-lg border ${
          error ? 'border-red-300' : 'border-gray-300'
        } px-4 py-2.5 text-sm bg-white shadow-sm transition-colors duration-200 
        focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none 
        disabled:opacity-50 disabled:cursor-not-allowed`}
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
}