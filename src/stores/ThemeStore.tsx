// src/stores/useThemeStore.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Theme = 'light' | 'dark' | 'system';

interface ThemeState {
  theme: Theme;
  resolvedTheme: 'light' | 'dark';
  setTheme: (theme: Theme) => void;
  updateResolvedTheme: () => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set, get) => ({
      theme: 'system',
      resolvedTheme: 'light',
      
      setTheme: (theme) => {
        set({ theme });
        const store = get();
        store.updateResolvedTheme();
      },
      
      updateResolvedTheme: () => {
        const { theme } = get();
        if (theme === 'system') {
          const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
          set({ resolvedTheme: systemTheme });
        } else {
          set({ resolvedTheme: theme });
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
  mediaQuery.addEventListener('change', () => {
    const { theme, updateResolvedTheme } = useThemeStore.getState();
    if (theme === 'system') {
      updateResolvedTheme();
    }
  });
}