// src/stores/useUIStore.ts
import { create } from 'zustand';

interface UIState {
  isMobileMenuOpen: boolean;
  isScrolled: boolean;
  activeSection: string;
  toggleMobileMenu: () => void;
  closeMobileMenu: () => void;
  openMobileMenu: () => void;
  setScrolled: (scrolled: boolean) => void;
  setActiveSection: (section: string) => void;
}

export const useUIStore = create<UIState>((set) => ({
  isMobileMenuOpen: false,
  isScrolled: false,
  activeSection: 'home',
  
  toggleMobileMenu: () => set((state) => ({ isMobileMenuOpen: !state.isMobileMenuOpen })),
  closeMobileMenu: () => set({ isMobileMenuOpen: false }),
  openMobileMenu: () => set({ isMobileMenuOpen: true }),
  setScrolled: (scrolled) => set({ isScrolled: scrolled }),
  setActiveSection: (section) => set({ activeSection: section }),
}));