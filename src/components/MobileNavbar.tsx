// src/components/MobileNavbar.tsx
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { PremiumButton } from "../components/ui/premium-button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useUIStore } from "@/stores/useUIStore";
import { siteConfig } from "../config/siteConfig";

const navItems = ["Home", "Services", "Gallery", "About", "Contact"];

export function MobileNavbar() {
  const { isMobileMenuOpen, isScrolled, toggleMobileMenu, closeMobileMenu, setScrolled } = useUIStore();
  const [navbarHeight, setNavbarHeight] = useState(64);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    const updateNavbarHeight = () => {
      const navbar = document.querySelector('.mobile-navbar');
      if (navbar) {
        const height = navbar.getBoundingClientRect().height;
        setNavbarHeight(height);
        document.documentElement.style.setProperty('--navbar-height', `${height}px`);
      }
    };
    
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", updateNavbarHeight);
    updateNavbarHeight();
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateNavbarHeight);
    };
  }, [setScrolled]);

  const scrollToSection = (sectionId: string) => {
    closeMobileMenu();
    const element = document.getElementById(sectionId.toLowerCase());
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
      
      setTimeout(() => {
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }, 100);
    }
  };

  return (
    <>
      {/* Top Bar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="mobile-navbar fixed top-0 left-0 right-0 transition-all duration-300"
        style={{
          backgroundColor: isScrolled ? "var(--bg)" : "transparent",
          backdropFilter: isScrolled ? "blur(12px)" : "none",
          borderBottom: isScrolled ? "1px solid var(--border)" : "none",
          zIndex: 999,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
        }}
      >
        <div style={{ paddingLeft: "1rem", paddingRight: "1rem", maxWidth: "1126px", margin: "0 auto", width: "100%" }}>
          <div className="flex items-center justify-between" style={{ height: "64px" }}>
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="cursor-pointer"
              onClick={() => scrollToSection("home")}
              style={{ zIndex: 1000 }}
            >
              <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-accent to-purple-600 bg-clip-text text-transparent" style={{ margin: 0 }}>
                {siteConfig.name.split(" ")[0]}
              </h1>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-4 lg:gap-8">
              {navItems.map((item) => (
                <motion.button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  whileHover={{ y: -2 }}
                  className="text-sm lg:text-base text-[var(--text)] hover:text-accent transition-colors font-medium"
                >
                  {item}
                </motion.button>
              ))}
              <ThemeToggle />
              <PremiumButton size="sm" onClick={() => scrollToSection("contact")} icon={Phone}>
                Book Now
              </PremiumButton>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 md:hidden">
              <ThemeToggle />
              <button
                onClick={toggleMobileMenu}
                className="p-2 rounded-full hover:bg-[var(--accent-bg)] transition-colors"
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                style={{ zIndex: 1000, position: "relative" }}
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden"
            style={{
              position: "fixed",
              top: "64px",
              left: 0,
              right: 0,
              backgroundColor: "var(--bg)",
              borderBottom: "1px solid var(--border)",
              boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
              zIndex: 998,
              maxHeight: "calc(100vh - 64px)",
              overflowY: "auto",
            }}
          >
            <div style={{ padding: "1rem", maxWidth: "1126px", margin: "0 auto", width: "100%" }}>
              {navItems.map((item, idx) => (
                <motion.button
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left py-3 text-[var(--text)] hover:text-accent transition-colors font-medium"
                  style={{
                    borderBottom: idx < navItems.length - 1 ? "1px solid var(--border)" : "none"
                  }}
                >
                  {item}
                </motion.button>
              ))}
              <PremiumButton fullWidth className="mt-4" onClick={() => scrollToSection("contact")}>
                Book Now
              </PremiumButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer div to push content down */}
      <div style={{ height: "64px" }} />
    </>
  );
}