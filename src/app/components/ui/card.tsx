'use client'; // Marca este componente como Client Component


import { cn } from '../ui/lib/utils';
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return (
    <div className={cn("rounded-2xl shadow-md p-4 dark:bg-black-400 ", className, cn)}>
      {children}
    </div>
  );
}
