'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { fadeInUp, staggerContainer, scaleIn } from '@/lib/animations';
import { certifications } from '@/data/portfolio';
import { Award, BookOpen, Zap, Server, Database, Container } from 'lucide-react';

const iconMap: Record<string, any> = {
  Zap,
  Server,
  Container,
  Database,
  BookOpen,
  Award,
};

export function Certifications() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-yellow-500/5 to-transparent" />
      
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
              <span className="gradient-text">Certifications & Learning</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Continuous learning and professional development journey
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => {
              const Icon = iconMap[cert.icon] || Award;
              return (
                <motion.div key={index} variants={scaleIn}>
                  <Card className="glass-card h-full hover:scale-105 transition-all duration-300 group">
                    <CardHeader>
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-yellow-500/20 to-orange-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <Icon className="w-7 h-7 text-yellow-500" />
                      </div>
                      <CardTitle className="text-xl mb-2">{cert.title}</CardTitle>
                      <Badge variant="outline" className="w-fit">
                        {cert.issuer}
                      </Badge>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <BookOpen className="w-4 h-4" />
                        <span>{cert.date}</span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Learning Philosophy */}
          <motion.div
            variants={fadeInUp}
            className="mt-12"
          >
            <Card className="glass-card max-w-3xl mx-auto">
              <CardContent className="p-8 text-center">
                <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">Commitment to Learning</h3>
                <p className="text-muted-foreground mb-4">
                  I believe in continuous learning and staying updated with the latest technologies. 
                  My learning journey includes online courses, documentation study, and hands-on projects 
                  to master new skills and apply them effectively.
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  {['Next.js', 'FastAPI', 'Docker', 'PostgreSQL', 'TypeScript', 'React'].map((tech, index) => (
                    <Badge key={index} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
