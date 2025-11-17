'use client';

import { cn } from './lib/utils';
import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  size?: "sm" | "md" | "lg" | "icon"; // Add "icon" size
  variant?: "solid" | "outline" | "ghost";
}

export function Button({ className, size = "md", variant = "solid", ...props }: ButtonProps) {
  const sizeClasses = {
    sm: "px-2 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
    icon: "p-2", // Add styles for "icon" size
  };

  const variantClasses = {
    solid: "text-dark bg-dark",
    outline: "border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white",
    ghost: "text-dark ",
  };

  return (
    <button
      className={cn(
        "rounded-lg transition-all",
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
      {...props}
    />
  );
}
