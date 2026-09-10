'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ThemeToggle } from '@/components/theme-toggle';
import { fadeInUp } from '@/lib/animations';
import { Code2, Link2, Mail, ArrowUp } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-border/50 bg-background/50 backdrop-blur-xl">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <motion.div variants={fadeInUp} className="space-y-4">
            <h3 className="text-2xl font-bold gradient-text">{personalInfo.name}</h3>
            <p className="text-sm text-muted-foreground">
              {personalInfo.role} building scalable software solutions with modern technologies.
            </p>
            <div className="flex gap-3">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full hover:bg-primary/20 hover:text-primary transition-all">
                  <Code2 className="h-4 w-4" />
                </Button>
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full hover:bg-primary/20 hover:text-primary transition-all">
                  <Link2 className="h-4 w-4" />
                </Button>
              </a>
              <a href={`mailto:${personalInfo.email}`}>
                <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full hover:bg-primary/20 hover:text-primary transition-all">
                  <Mail className="h-4 w-4" />
                </Button>
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={fadeInUp} className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#about" className="hover:text-primary transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-primary transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-primary transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={fadeInUp} className="space-y-4">
            <h4 className="font-semibold">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Full Stack Development</li>
              <li>Web Applications</li>
              <li>API Development</li>
              <li>Database Design</li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={fadeInUp} className="space-y-4">
            <h4 className="font-semibold">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>{personalInfo.location}</li>
              <li>{personalInfo.email}</li>
              <li>{personalInfo.phone}</li>
            </ul>
          </motion.div>
        </div>

        <Separator className="mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <motion.p variants={fadeInUp} className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </motion.p>

          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={scrollToTop}
              className="h-9 w-9 rounded-full"
            >
              <ArrowUp className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
