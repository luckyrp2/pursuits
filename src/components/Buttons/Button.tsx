import React from "react";
import Link from "next/link";

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'nav';
  className?: string;
  text: string;
  href: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  className = '', 
  text,
  href
}) => {
  let baseClass = '';

  switch (variant) {
    case 'primary':
    case 'secondary':
      baseClass = `btn-${variant}`;
      break;
  }

  return (
    <Link href={href} className={`${baseClass} ${className}`}>
      {text}
    </Link>
  );
};