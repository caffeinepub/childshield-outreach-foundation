import { type ReactNode } from 'react';

interface LandingSectionProps {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
}

export function LandingSection({ id, title, children, className = '' }: LandingSectionProps) {
  return (
    <section id={id} className={`py-20 sm:py-24 lg:py-32 scroll-mt-20 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 sm:mb-16 text-foreground">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}
