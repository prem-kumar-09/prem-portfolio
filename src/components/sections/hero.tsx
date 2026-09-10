'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail, Sparkles, Code, Link2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { fadeInUp, staggerContainer, scaleIn } from '@/lib/animations';
import { personalInfo } from '@/data/portfolio';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden noise-bg">
      {/* Dynamic Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] rounded-full bg-primary/20 blur-[120px] mix-blend-screen animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute top-[40%] right-[10%] w-[400px] h-[400px] rounded-full bg-purple-500/20 blur-[100px] mix-blend-screen animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }} />
        <div className="absolute -bottom-[10%] left-[30%] w-[600px] h-[600px] rounded-full bg-pink-500/10 blur-[150px] mix-blend-screen animate-pulse" style={{ animationDuration: '5s' }} />
      </div>

      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03] dark:opacity-[0.05]" />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto flex flex-col items-center"
        >
          <motion.div variants={fadeInUp} className="text-center mb-8">
            <Badge variant="outline" className="mb-4 px-5 py-2.5 text-sm md:text-base border-primary/40 bg-primary/10 backdrop-blur-md text-primary-foreground font-medium rounded-full shadow-[0_0_20px_rgba(var(--primary-rgb),0.2)] flex items-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
              </span>
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-foreground">Available for new opportunities</span>
            </Badge>
          </motion.div>

          <motion.div variants={fadeInUp} className="text-center relative">
            <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-extrabold mb-6 tracking-tight leading-[1.1]">
              <span className="text-foreground">Hi, I'm </span>
              <span className="gradient-text drop-shadow-lg">{personalInfo.name}</span>
            </h1>
          </motion.div>

          <motion.p
            variants={fadeInUp}
            className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 text-center text-muted-foreground/80 tracking-wide"
          >
            {personalInfo.role.split(' ').slice(0, -1).join(' ')} <span className="text-foreground">{personalInfo.role.split(' ').slice(-1)}</span>
          </motion.p>

          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-center text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            {personalInfo.heroDescription}
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-24"
          >
            <Button size="lg" className="group text-lg px-8 py-7 rounded-2xl shadow-[0_0_30px_-5px_rgba(var(--primary-rgb),0.4)] hover:shadow-[0_0_40px_-5px_hsl(var(--primary))] transition-all duration-300">
              Explore My Work
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-7 rounded-2xl group border-border/50 hover:bg-white/5 backdrop-blur-sm transition-all duration-300">
              <Download className="mr-2 w-5 h-5 group-hover:-translate-y-1 transition-transform" />
              Download Resume
            </Button>
          </motion.div>

          {/* Stats Cards - Redesigned to floating glass cards */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 w-full max-w-5xl mx-auto"
          >
            {personalInfo.stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative glass-card p-8 rounded-3xl text-center hover:-translate-y-2 transition-all duration-500 border border-white/10 dark:border-white/5 bg-white/5 hover:bg-white/10">
                  <div className="text-4xl md:text-5xl font-extrabold gradient-text mb-3">{stat.value}</div>
                  <div className="text-sm md:text-base font-medium text-muted-foreground uppercase tracking-wider">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Modern Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary/50 to-transparent relative overflow-hidden">
          <motion.div
            animate={{ top: ['-100%', '100%'] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            className="absolute left-0 w-full h-1/2 bg-primary"
          />
        </div>
      </motion.div>
    </section>
  );
}

