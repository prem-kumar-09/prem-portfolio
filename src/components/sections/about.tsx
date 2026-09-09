'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Award, Target, MapPin, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { fadeInUp, staggerContainer, slideInFromLeft, slideInFromRight } from '@/lib/animations';
import { personalInfo } from '@/data/portfolio';

export function About() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
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
              <span className="gradient-text">About Me</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get to know me better - my journey, education, and what drives me
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Professional Summary */}
            <motion.div variants={slideInFromLeft}>
              <Card className="glass-card h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-primary" />
                    Professional Summary
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    I am a passionate Full Stack Developer with 1.5+ years of experience in building 
                    scalable web applications and enterprise solutions. My expertise spans across modern 
                    frontend technologies like React and Next.js, as well as robust backend systems 
                    using C# and ASP.NET MVC.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    I thrive on solving complex problems and creating user-focused digital experiences 
                    that make a real impact. Whether it's optimizing database performance or implementing 
                    cutting-edge features, I bring dedication and attention to detail to every project.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Core Strengths */}
            <motion.div variants={slideInFromRight}>
              <Card className="glass-card h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-primary" />
                    Core Strengths
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      'Full-stack development with modern frameworks',
                      'Database design and optimization',
                      'API development and integration',
                      'Performance optimization',
                      'Problem-solving and debugging',
                      'Continuous learning and adaptation',
                    ].map((strength, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{strength}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Education & Career */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Education */}
            <motion.div variants={slideInFromLeft}>
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-primary" />
                    Education
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <GraduationCap className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">BE Electronics and Communication Engineering</h4>
                        <p className="text-sm text-muted-foreground mb-2">Chennai, India</p>
                        <Badge variant="secondary">Graduated</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Career Journey */}
            <motion.div variants={slideInFromRight}>
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="w-5 h-5 text-primary" />
                    Career Journey
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Briefcase className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Software Developer</h4>
                        <p className="text-sm text-muted-foreground mb-2">Tech Company</p>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Calendar className="w-3 h-3" />
                          <span>2023 - Present</span>
                          <MapPin className="w-3 h-3 ml-2" />
                          <span>Chennai, India</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Quick Facts */}
          <motion.div
            variants={fadeInUp}
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {[
              { label: 'Experience', value: '1.5+ Years' },
              { label: 'Projects', value: '10+' },
              { label: 'Technologies', value: '15+' },
              { label: 'Location', value: 'Chennai' },
            ].map((fact, index) => (
              <Card key={index} className="glass-card text-center">
                <CardContent className="pt-6">
                  <div className="text-2xl font-bold gradient-text mb-1">{fact.value}</div>
                  <div className="text-sm text-muted-foreground">{fact.label}</div>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
