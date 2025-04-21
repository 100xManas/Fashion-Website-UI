import React from 'react';

function Button({
  content,
  Icon,
  py = 'py-2',
  px = 'px-6',
  bgColor,
  border,
  textColor,
  borderColor = 'border-zinc-700'
}) {
  return (
    <button
      className={`font-poppins flex items-center gap-4 uppercase text-sm font-[400] leading-tight ${bgColor ? `${bgColor} border-none` : ''} ${py} ${px} ${border && border} ${borderColor} ${textColor}`}
    >
      {content}
      {Icon && <Icon size={20} />}
    </button>
  );
}

export default Button;
