import React from 'react';
import classNames from 'classnames';

export const Button = ({ children, onClick, variant = 'primary', className, ...props }) => {
  const baseStyles = 'px-4 py-2 rounded-xl font-medium transition-all duration-300 shadow';

  const variants = {
    primary: 'bg-indigo-500 text-white hover:bg-indigo-600',
    ghost: 'bg-transparent text-indigo-600 hover:bg-indigo-100',
    danger: 'bg-red-500 text-white hover:bg-red-600',
  };

  return (
    <button
      onClick={onClick}
      className={classNames(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
};
