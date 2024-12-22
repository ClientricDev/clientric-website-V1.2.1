import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
  onClick?: () => void;
  href?: string;
  type?: 'button' | 'submit';
}

export default function Button({ 
  children, 
  variant = 'primary', 
  className = '', 
  onClick,
  href,
  type = 'button'
}: ButtonProps) {
  const baseStyles = 'font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg inline-flex items-center justify-center';
  const variantStyles = {
    primary: 'bg-accent-yellow hover:bg-accent-red text-gray-900',
    secondary: 'bg-white hover:bg-gray-100 text-primary border border-primary'
  };

  const buttonClasses = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <Link 
        role="button"
        href={href} 
        className={buttonClasses}
        aria-label={children?.toString()}
      >
        {children}
      </Link>
    );
  }

  return (
    <button 
      className={buttonClasses}
      onClick={onClick}
      aria-label={children?.toString()}
      type={type}
    >
      {children}
    </button>
  );
}