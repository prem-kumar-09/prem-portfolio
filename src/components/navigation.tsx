'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { personalInfo, navItems } from '@/data/portfolio';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['transparent', 'rgba(var(--background-rgb, 10,10,12), 0.7)']
  );

  const borderColor = useTransform(
    scrollY,
    [0, 100],
    ['transparent', 'rgba(255,255,255, 0.05)']
  );

  const backdropFilter = useTransform(
    scrollY,
    [0, 100],
    ['blur(0px)', 'blur(16px)']
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-50 flex justify-center mt-6 px-4 transition-all duration-500"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.nav
        style={{
          backgroundColor,
          borderColor,
          backdropFilter,
        }}
        className={`w-full max-w-5xl rounded-full border transition-all duration-300 ${isScrolled ? 'py-3 px-6 shadow-2xl' : 'py-4 px-4'}`}
      >
        <div className="flex items-center justify-between pointer-events-auto">
          {/* Logo */}
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-xl md:text-2xl font-black tracking-tighter flex flex-col leading-none"
          >
            <span className="text-foreground">{personalInfo.name.split(' ')[0]}</span>
            <span className="gradient-text text-sm">Portfolio</span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            <div className="flex items-center gap-1 mr-4 bg-white/5 rounded-full p-1 border border-white/5">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className="text-sm font-medium text-muted-foreground hover:text-primary hover:bg-white/10 px-4 py-2 rounded-full transition-all"
                >
                  {item.name}
                </motion.a>
              ))}
            </div>

            <ThemeToggle />
            <a href={personalInfo.hireMeUrl}>
              <Button className="rounded-full px-6 bg-primary text-primary-foreground hover:brightness-110 shadow-[0_0_15px_rgba(var(--primary-rgb),0.3)] border-none">
                Hire Me
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 md:hidden">
            <ThemeToggle />
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-white/5 border-white/10"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -10 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -10 }}
            className="md:hidden pt-4 pb-2 mt-2 border-t border-white/10 overflow-hidden"
          >
            <div className="flex flex-col gap-2 bg-background/95 rounded-2xl p-4 border border-white/5 shadow-2xl">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className="text-base font-medium text-muted-foreground hover:text-primary hover:bg-white/5 rounded-xl transition-all p-3"
                >
                  {item.name}
                </a>
              ))}
              <a href={personalInfo.hireMeUrl} className="w-full">
                <Button className="w-full rounded-xl mt-2 bg-primary">
                  Hire Me
                </Button>
              </a>
            </div>
          </motion.div>
        )}
      </motion.nav>
    </motion.div>
  );
}
