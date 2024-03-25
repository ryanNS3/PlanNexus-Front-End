import React from 'react';

export function PinkButton({ text, size, action, align }) {
  // Definir o tamanho do botão
  let buttonSize = '';
  switch (size) {
    case 'small':
        buttonSize = 'w-1/2 sm:w-1/4';
      break;
    case 'medium':
        buttonSize = 'w-1/2 sm:w-1/3';
      break;
    case 'big':
        buttonSize = 'w-1/2';
      break;
    default:
        buttonSize = 'w-1/3';
  }

    // Definir o posicionamento do botão
    let alignment = '';
    switch (align) {
      case 'start':
        alignment = 'start';
        break;
      case 'end':
        alignment = 'end';
        break;
      case 'center':
        alignment = 'center';
        break;
      case 'stretch':
        alignment = 'stretch';
        break;
      case 'baseline':
        alignment = 'baseline';
        break;
      default:
        alignment = 'auto';
  }

  return (
    <button
      type="submit"
      onClick={action}
      className={`flex justify-center bg-gradient-to-r from-[#BD3FD1] to-[#9332AE] hover:bg-rosa-300 hover:scale-105 active:scale-100 transform transition duration-300 rounded-[4px] text-branco text-fun1 py-1 px-1 focus:outline-none focus:shadow-outline ${buttonSize} self-${alignment}`}
    >
      {text}
    </button>
  );
};
