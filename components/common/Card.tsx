interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ 
  children, 
  className = '', 
  hover = true 
}: CardProps) {
  return (
    <div className={`
      bg-surface-light rounded-lg shadow-lg p-6 border border-gray-800
      ${hover ? 'hover:shadow-xl hover:border-accent-gold transition-all duration-300' : ''}
      ${className}
    `}>
      {children}
    </div>
  );
}