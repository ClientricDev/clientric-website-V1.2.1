interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
  centered?: boolean;
}

export default function SectionTitle({ 
  children, 
  className = '', 
  centered = true 
}: SectionTitleProps) {
  return (
    <h2 className={`
      text-3xl md:text-4xl font-bold text-white mb-6
      ${centered ? 'text-center' : ''}
      ${className}
    `}>
      {children}
    </h2>
  );
}