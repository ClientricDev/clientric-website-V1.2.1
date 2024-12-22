import Image from './Image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
}

export default function Logo({ className = '', width = 140, height = 40 }: LogoProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Link href="/" className={`block ${className}`}>
      <div className="relative flex items-center">
        <Image
          src="/images/clientric-logo.png"
          alt="Clientric CRM Consulting"
          width={width}
          height={height}
          priority
          className="object-contain"
          sizes="(max-width: 768px) 140px, 180px"
          quality={90}
        />
      </div>
    </Link>
  );
}