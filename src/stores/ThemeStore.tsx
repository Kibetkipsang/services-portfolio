// src/stores/useThemeStore.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Theme = 'light' | 'dark' | 'system';

interface ThemeState {
  theme: Theme;
  resolvedTheme: 'light' | 'dark';
  setTheme: (theme: Theme) => void;
  updateResolvedTheme: () => void;
  applyThemeToDOM: () => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set, get) => ({
      theme: 'system',
      resolvedTheme: 'light',
      
      setTheme: (theme: Theme) => {
        console.log('setTheme called:', theme);
        set({ theme });
        const store = get();
        store.updateResolvedTheme();
        store.applyThemeToDOM();
      },
      
      updateResolvedTheme: () => {
        const { theme } = get();
        let newResolvedTheme: 'light' | 'dark';
        
        if (theme === 'system') {
          const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
          newResolvedTheme = systemTheme;
          console.log('System theme detected:', newResolvedTheme);
        } else {
          newResolvedTheme = theme;
        }
        
        set({ resolvedTheme: newResolvedTheme });
      },
      
      applyThemeToDOM: () => {
        const { resolvedTheme } = get();
        const root = document.documentElement;
        
        console.log('Applying theme to DOM:', resolvedTheme);
        
        // Remove both classes first
        root.classList.remove('light', 'dark');
        
        // Add the correct class
        if (resolvedTheme === 'dark') {
          root.classList.add('dark');
          root.style.colorScheme = 'dark';
          document.body.style.backgroundColor = '#16171d';
          console.log('Dark theme applied');
        } else {
          root.classList.add('light');
          root.style.colorScheme = 'light';
          document.body.style.backgroundColor = '#ffffff';
          console.log('Light theme applied');
        }
      },
    }),
    {
      name: 'theme-storage',
    }
  )
);

// Listen to system theme changes
if (typeof window !== 'undefined') {
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  
  const handleSystemThemeChange = () => {
    const { theme, updateResolvedTheme, applyThemeToDOM } = useThemeStore.getState();
    if (theme === 'system') {
      updateResolvedTheme();
      applyThemeToDOM();
    }
  };
  
  mediaQuery.addEventListener('change', handleSystemThemeChange);
  
  // Apply theme on initial load
  const initializeTheme = () => {
    console.log('Initial theme application');
    const store = useThemeStore.getState();
    store.updateResolvedTheme();
    store.applyThemeToDOM();
  };
  
  setTimeout(initializeTheme, 0);
}