import React from 'react';

const InputField = ({ label, type, placeholder, value, onChange, accept }) => {
  return (
    <div className="mt-6">
      <label className="block text-sm font-medium text-slate-700">{label}</label>
      <input
        type={type}
        className="px-4 py-2 border rounded-md w-full"
        placeholder={placeholder}
        value={type !== "file" ? value : undefined} // Manejo opcional de value
        onChange={onChange}
        accept={accept} // Para inputs de tipo file
      />
    </div>
  );
};

export default InputField;