// src/components/ThemeProvider.tsx
import { useEffect } from 'react';
import { useThemeStore } from '@/stores/ThemeStore';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const { resolvedTheme } = useThemeStore();

  useEffect(() => {
    const root = document.documentElement;
    
    // Just toggle the class - CSS handles everything else
    if (resolvedTheme === 'dark') {
      root.classList.add('dark');
      root.style.colorScheme = 'dark';
    } else {
      root.classList.remove('dark');
      root.style.colorScheme = 'light';
    }
  }, [resolvedTheme]);

  return <>{children}</>;
}