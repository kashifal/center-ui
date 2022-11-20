import React from "react";

function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className='rounded font-semibold hover:bg-blue-400 transition-all bg-blue-500 px-4 py-2'
    >
      {children}
    </button>
  );
}

export default Button;
