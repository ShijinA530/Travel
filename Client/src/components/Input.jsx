import React from 'react';

export default function Input({ title, options, bg, setFunction }) {
  return (
    <div className={`mb-14 max-w-sm mx-auto ${!bg ? 'bg-gray-900' : 'bg-gray-800'} rounded-md`}>
      <label className="float-left p-2 text-sm text-white">{title}</label>
      <select 
        onChange={(e) => setFunction(e.target.value)} 
        name={title} 
        id={title} 
        className={`${!bg ? 'bg-gray-900' : 'bg-gray-800'} font-medium text-white text-md rounded-md block w-full pb-2 pl-1 focus:ring-gray-500`}
      >
        <option value="">Select...</option>
        {
          options.map((option, index) => (
            <option value={option} key={index}>{option}</option>
          ))
        }
      </select>
    </div>
  );
}
