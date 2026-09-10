'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { fadeInUp, staggerContainer, scaleIn } from '@/lib/animations';
import { services } from '@/data/portfolio';
import {
  Layers,
  Globe,
  Database,
  Code2,
  CheckCircle,
  TrendingUp,
  LucideIcon
} from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Layers,
  Globe,
  Database,
  Code2,
  CheckCircle,
  TrendingUp,
};

export function Services() {
  return (
    <section id="services" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/5 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Services</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional services I offer to help businesses succeed
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon] || Layers;
              return (
                <motion.div key={index} variants={scaleIn}>
                  <Card className="glass-card h-full hover:scale-105 transition-all duration-300 group cursor-pointer">
                    <CardHeader>
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <Icon className="w-7 h-7 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{service.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* CTA Section */}
          <motion.div
            variants={fadeInUp}
            className="mt-16 text-center"
          >
            <Card className="glass-card max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Ready to Work Together?</h3>
                <p className="text-muted-foreground mb-6">
                  Let's discuss how I can help bring your project to life with my expertise and dedication.
                </p>
                <Button size="lg" className="group">
                  Get In Touch
                  <CheckCircle className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
