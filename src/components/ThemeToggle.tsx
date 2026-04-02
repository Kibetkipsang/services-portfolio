// src/components/ThemeToggle.tsx
import { Moon, Sun, Monitor } from 'lucide-react';
import { useThemeStore } from '../stores/ThemeStore';
import { PremiumButton } from '../components/ui/premium-button';
import { motion } from 'framer-motion';

export function ThemeToggle() {
  const { theme, setTheme } = useThemeStore();

  const cycleTheme = () => {
    if (theme === 'light') setTheme('dark');
    else if (theme === 'dark') setTheme('system');
    else setTheme('light');
  };

  const getIcon = () => {
    if (theme === 'light') return <Sun className="w-4 h-4" />;
    if (theme === 'dark') return <Moon className="w-4 h-4" />;
    return <Monitor className="w-4 h-4" />;
  };

  const getLabel = () => {
    if (theme === 'light') return 'Light';
    if (theme === 'dark') return 'Dark';
    return 'Auto';
  };

  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <PremiumButton
        variant="ghost"
        size="sm"
        onClick={cycleTheme}
        className="gap-2"
      >
        {getIcon()}
        <span className="hidden sm:inline">{getLabel()}</span>
      </PremiumButton>
    </motion.div>
  );
}