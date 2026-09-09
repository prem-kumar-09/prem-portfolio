'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { fadeInUp, staggerContainer, scaleIn } from '@/lib/animations';
import { skills } from '@/data/portfolio';
import { Code, Server, Database, Wrench, CheckCircle } from 'lucide-react';

const categoryIcons = {
  frontend: Code,
  backend: Server,
  database: Database,
  tools: Wrench,
  testing: CheckCircle,
};

const categoryColors = {
  frontend: 'from-blue-500 to-cyan-500',
  backend: 'from-purple-500 to-pink-500',
  database: 'from-green-500 to-emerald-500',
  tools: 'from-orange-500 to-yellow-500',
  testing: 'from-red-500 to-rose-500',
};

export function Skills() {
  const categories = ['frontend', 'backend', 'database', 'tools', 'testing'] as const;

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent" />
      
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
              <span className="gradient-text">Skills & Technologies</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive overview of my technical expertise and the technologies I work with
            </p>
          </motion.div>

          <Tabs defaultValue="frontend" className="w-full">
            <TabsList className="grid w-full grid-cols-5 mb-8 bg-background/50 backdrop-blur-xl">
              {categories.map((category) => {
                const Icon = categoryIcons[category];
                return (
                  <TabsTrigger key={category} value={category} className="capitalize">
                    <Icon className="w-4 h-4 mr-2" />
                    {category}
                  </TabsTrigger>
                );
              })}
            </TabsList>

            {categories.map((category) => (
              <TabsContent key={category} value={category}>
                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                  className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {skills
                    .filter((skill) => skill.category === category)
                    .map((skill, index) => (
                      <motion.div key={index} variants={scaleIn}>
                        <Card className="glass-card hover:scale-105 transition-all duration-300 group cursor-pointer">
                          <CardHeader>
                            <CardTitle className="flex items-center justify-between">
                              <span className="text-lg">{skill.name}</span>
                              <Badge 
                                variant="outline" 
                                className={`bg-gradient-to-r ${categoryColors[category]} text-white border-0`}
                              >
                                {skill.level}%
                              </Badge>
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <Progress 
                              value={skill.level} 
                              className="h-2 mb-4"
                            />
                            <div className="flex items-center justify-between text-sm text-muted-foreground">
                              <span>Proficiency</span>
                              <span className="font-semibold">{skill.level}%</span>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>

          {/* Skills Summary */}
          <motion.div
            variants={fadeInUp}
            className="mt-16 grid md:grid-cols-3 gap-6"
          >
            {[
              {
                title: 'Frontend Mastery',
                description: 'Building responsive and performant user interfaces with modern frameworks',
                icon: Code,
              },
              {
                title: 'Backend Excellence',
                description: 'Developing robust server-side applications and APIs',
                icon: Server,
              },
              {
                title: 'Database Expertise',
                description: 'Designing efficient database schemas and optimizing queries',
                icon: Database,
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="glass-card text-center hover:scale-105 transition-transform">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
