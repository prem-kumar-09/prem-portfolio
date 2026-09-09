'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail, Sparkles, Code, Link2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { fadeInUp, fadeInLeft, fadeInRight, floatAnimation, staggerContainer, scaleIn } from '@/lib/animations';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-purple-500/10 to-pink-500/10" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
      
      {/* Floating Particles */}
      <motion.div
        variants={floatAnimation}
        animate="visible"
        className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl"
      />
      <motion.div
        variants={floatAnimation}
        animate="visible"
        transition={{ delay: 1 }}
        className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
      />
      <motion.div
        variants={floatAnimation}
        animate="visible"
        transition={{ delay: 2 }}
        className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="text-center mb-8">
            <Badge variant="outline" className="mb-4 px-4 py-2 text-sm border-primary/50 bg-primary/10">
              <Sparkles className="w-4 h-4 mr-2" />
              Available for new opportunities
            </Badge>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-center leading-tight"
          >
            <span className="gradient-text">Prem Kumar</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 text-center text-muted-foreground"
          >
            Full Stack Developer
          </motion.p>

          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-center text-muted-foreground mb-8 max-w-3xl mx-auto"
          >
            Building Scalable Software Solutions with Modern Technologies
          </motion.p>

          <motion.p
            variants={fadeInUp}
            className="text-base md:text-lg text-center text-muted-foreground mb-12 max-w-2xl mx-auto"
          >
            I develop high-performance web applications, enterprise solutions, and user-focused digital experiences.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Button size="lg" className="group text-lg px-8 py-6">
              View Projects
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 group">
              <Download className="mr-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
              Download Resume
            </Button>
          </motion.div>

          {/* Stats Cards */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto"
          >
            {[
              { value: '1.5+', label: 'Years Experience' },
              { value: '10+', label: 'Projects' },
              { value: '15+', label: 'Technologies' },
              { value: '∞', label: 'Continuous Learner' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className="glass-card p-6 rounded-2xl text-center hover:scale-105 transition-transform"
              >
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-sm md:text-base text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={fadeInUp}
            className="flex justify-center gap-4 mt-12"
          >
            <Button variant="ghost" size="icon" className="h-12 w-12 rounded-full">
              <Code className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon" className="h-12 w-12 rounded-full">
              <Link2 className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon" className="h-12 w-12 rounded-full">
              <Mail className="h-6 w-6" />
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-border rounded-full flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-3 bg-primary rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
