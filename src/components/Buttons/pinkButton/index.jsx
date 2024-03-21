import React from 'react';

export function PinkButton({ text, size, action }) {
  let buttonSize = '';
  switch (size) {
    case 'pequeno':
        buttonSize = 'w-1/2 sm:w-1/4';
      break;
    case 'medio':
        buttonSize = 'w-1/2 sm:w-1/3';
      break;
    case 'grande':
        buttonSize = 'w-1/2';
      break;
    default:
        buttonSize = 'w-1/3';
  }

  return (
    <button
      type="submit"
      onClick={action}
      className={`flex justify-center bg-rosa-destaque hover:bg-rosa-300 hover:scale-105 active:scale-100 transform transition duration-300 rounded-sm text-roxo-50 text-fun1 py-1 px-1 rounded focus:outline-none focus:shadow-outline ${buttonSize} self-end`}
    >
      {text}
    </button>
  );
};
