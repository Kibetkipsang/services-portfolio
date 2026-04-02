// src/components/ThemeProvider.tsx
import { useEffect } from 'react';
import { useThemeStore } from '../stores/ThemeStore';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const { resolvedTheme } = useThemeStore();

  useEffect(() => {
    const root = document.documentElement;
    root.style.colorScheme = resolvedTheme;
    
    // Update CSS variables for dark mode
    if (resolvedTheme === 'dark') {
      root.style.setProperty('--text', '#9ca3af');
      root.style.setProperty('--text-h', '#f3f4f6');
      root.style.setProperty('--bg', '#16171d');
      root.style.setProperty('--border', '#2e303a');
      root.style.setProperty('--code-bg', '#1f2028');
      root.style.setProperty('--accent', '#c084fc');
      root.style.setProperty('--accent-bg', 'rgba(192, 132, 252, 0.15)');
      root.style.setProperty('--accent-border', 'rgba(192, 132, 252, 0.5)');
      root.style.setProperty('--social-bg', 'rgba(47, 48, 58, 0.5)');
      root.style.setProperty('--shadow', 'rgba(0, 0, 0, 0.4) 0 10px 15px -3px, rgba(0, 0, 0, 0.25) 0 4px 6px -2px');
    } else {
      root.style.setProperty('--text', '#6b6375');
      root.style.setProperty('--text-h', '#08060d');
      root.style.setProperty('--bg', '#fff');
      root.style.setProperty('--border', '#e5e4e7');
      root.style.setProperty('--code-bg', '#f4f3ec');
      root.style.setProperty('--accent', '#aa3bff');
      root.style.setProperty('--accent-bg', 'rgba(170, 59, 255, 0.1)');
      root.style.setProperty('--accent-border', 'rgba(170, 59, 255, 0.5)');
      root.style.setProperty('--social-bg', 'rgba(244, 243, 236, 0.5)');
      root.style.setProperty('--shadow', 'rgba(0, 0, 0, 0.1) 0 10px 15px -3px, rgba(0, 0, 0, 0.05) 0 4px 6px -2px');
    }
  }, [resolvedTheme]);

  return <>{children}</>;
}