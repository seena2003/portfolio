import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  github: string;
  demo: string;
}

interface ProjectCarouselProps {
  projects: Project[];
}

const ProjectCarousel: React.FC<ProjectCarouselProps> = ({ projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Navigation functions
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, projects.length]);

  // Pause auto-play on hover
  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  return (
    <div 
      className="relative overflow-hidden py-8"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-slate-800/80 hover:bg-slate-700/80 p-2 rounded-full transition-colors duration-200"
        aria-label="Previous project"
      >
        <ChevronLeft className="h-6 w-6 text-orange-400" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-slate-800/80 hover:bg-slate-700/80 p-2 rounded-full transition-colors duration-200"
        aria-label="Next project"
      >
        <ChevronRight className="h-6 w-6 text-orange-400" />
      </button>

      <div className="flex justify-center items-center">
        <div className="relative w-[1200px] h-[400px] flex justify-center items-center">
          {projects.map((project, index) => {
            // Calculate position for each card
            const position = (index - currentIndex + projects.length) % projects.length;
            let translateX = 0;
            let scale = 1;
            let opacity = 1;
            let zIndex = 1;

            if (position === 0) {
              // Center card
              translateX = 0;
              scale = 1;
              opacity = 1;
              zIndex = 3;
            } else if (position === 1) {
              // Right card
              translateX = 380;
              scale = 0.85;
              opacity = 0.7;
              zIndex = 2;
            } else if (position === projects.length - 1) {
              // Left card
              translateX = -380;
              scale = 0.85;
              opacity = 0.7;
              zIndex = 2;
            } else {
              // Hidden cards
              translateX = position < projects.length / 2 ? 800 : -800;
              scale = 0.5;
              opacity = 0;
              zIndex = 1;
            }

            return (
              <motion.div
                key={project.title}
                className="absolute"
                animate={{
                  x: translateX,
                  scale: scale,
                  opacity: opacity,
                  zIndex: zIndex,
                }}
                transition={{
                  duration: 0.6,
                  ease: "easeInOut",
                }}
                style={{
                  width: '350px',
                }}
              >
                <Card className="bg-slate-900 border-slate-700 hover:border-orange-400 transition-all duration-300">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-white">{project.title}</CardTitle>
                    <CardDescription className="text-gray-400">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-slate-800 text-gray-300">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white"
                        onClick={() => window.open(project.github, '_blank')}
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white"
                        onClick={() => window.open(project.demo, '_blank')}
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Dots indicator */}
      <div className="flex justify-center mt-6 gap-2">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors duration-200 ${
              index === currentIndex ? 'bg-orange-400' : 'bg-slate-600'
            }`}
            aria-label={`Go to project ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectCarousel;
