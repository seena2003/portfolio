<<<<<<< HEAD
import React, { useState } from 'react';
=======
import React, { useState, useEffect, useRef } from 'react';
>>>>>>> b8b473e (Initial commit with portfolio project files)
import { Menu, X, ExternalLink, Github, Linkedin, Mail, Phone, MapPin, Calendar, Award, Code, Briefcase, User, ChevronRight, Download, Star, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';
<<<<<<< HEAD
=======
import { motion, AnimatePresence } from "framer-motion";
import ProjectCarousel from '@/components/ProjectCarousel';
>>>>>>> b8b473e (Initial commit with portfolio project files)

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

<<<<<<< HEAD
  // This handleSubmit function currently submits data to a Google Form.
  // While functional, for a more robust and professional solution, consider:
  // 1. Using a service like EmailJS (https://www.emailjs.com/) which allows sending emails directly from JavaScript.
  // 2. Implementing a simple backend (e.g., using Node.js with Express, or a serverless function)
  //    to handle form submissions and send emails.
  //
  // To use this Google Form, you need to:
  // 1. Create your own Google Form with fields for Name, Email, and Message.
  // 2. Get the Form ID from the form's URL (it looks like '1FAIpQLSf_YOUR_FORM_ID').
  // 3. Get the entry IDs for your Name, Email, and Message fields using browser developer tools when inspecting the live Google Form.
  //    (Right-click on an input field, select "Inspect", and look for the 'name' attribute of the input, e.g., 'entry.123456789').
  // 4. Update the `googleFormURL`, `entry.YOUR_NAME_FIELD_ID`, `entry.YOUR_EMAIL_FIELD_ID`,
  //    and `entry.YOUR_MESSAGE_FIELD_ID` variables in this function.
=======
>>>>>>> b8b473e (Initial commit with portfolio project files)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const googleFormURL = 'https://docs.google.com/forms/d/e/1FAIpQLSf_YOUR_FORM_ID/formResponse';
      
      const formDataToSend = new FormData();
      formDataToSend.append('entry.YOUR_NAME_FIELD_ID', formData.name);
      formDataToSend.append('entry.YOUR_EMAIL_FIELD_ID', formData.email);
      formDataToSend.append('entry.YOUR_MESSAGE_FIELD_ID', formData.message);

      await fetch(googleFormURL, {
        method: 'POST',
        mode: 'no-cors',
        body: formDataToSend
      });

      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      });

      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const projects = [
    {
      title: "AgriBot",
      description: "AI-powered agriculture platform for smart farming solutions with predictive analytics and IoT integration.",
      tech: ["Python", "TensorFlow", "React", "IoT", "PostgreSQL"],
<<<<<<< HEAD
      // TODO: Replace with actual project image path (e.g., "/photos/project-agribot.png")
      image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=500&h=300&fit=crop",
      github: "#",
      demo: "#"
=======
      image: "/photos/agribot.png",
      github: "https://github.com/seena2003/AgriBot",
      demo: "https://github.com/seena2003/AgriBot"
>>>>>>> b8b473e (Initial commit with portfolio project files)
    },
    {
      title: "Taste Explorer",
      description: "Interactive restaurant finder application using Google Maps API with real-time reviews and recommendations.",
      tech: ["React.js", "Node.js", "Maps API", "MongoDB"],
<<<<<<< HEAD
      // TODO: Replace with actual project image path (e.g., "/photos/project-taste-explorer.png")
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&h=300&fit=crop",
      github: "#",
      demo: "#"
=======
      image: "/photos/tastexplorer.png",
      github: "https://github.com/seena2003/tastexplorer",
      demo: "https://tastexplorer.vercel.app/"
    },
    
    {
      title: "Malnad Eco Club Website",
      description: "Official website for Malnad Eco Club, featuring events, gallery, and environmental initiatives.",
      tech: ["React.js", "TailwindCSS", "Node.js"],
      image: "/photos/malnadecoclub.png",
      github: "https://github.com/malnadecoclub/malnad-eco-club",
      demo: "https://malnad-eco-club.vercel.app/"
    },
    {
      title: "ToDO Application",
      description: "A simple and intuitive ToDo app to manage daily tasks efficiently.",
      tech: ["React.js", "TypeScript", "CSS"],
      image: "/photos/todo.png",
      github: "https://github.com/seena2003/ToDO",
      demo: "https://to-do-bice-phi.vercel.app/"
    },
    {
      title: "My Portfolio",
      description: "Personal portfolio website showcasing my projects, skills, and experience.",
      tech: ["React.js", "Vite", "TailwindCSS"],
      image: "/photos/portfolio.png",
      github: "https://github.com/seena2003/portfolio",
      demo: "https://portfolio-psi-henna-70.vercel.app/"
    },
    {
      title: "AI Fashion Design Generator",
      description: "A frontend design for AI Fashion Design generator for cotton-textile industry which is done during my internship at IMERSE digital.",
      tech: ["React.js", "Next.js", "TailwindCSS", "Node.js", "OpenAI API"],
      image: "/photos/imerse.png",
      github: "https://github.com/seena2003/AI-Fashion-Design-Generator",
      demo: "https://ai-fashion-design-generator.vercel.app/"
>>>>>>> b8b473e (Initial commit with portfolio project files)
    },
    {
      title: "IoT Sunglass",
      description: "Real-world IoT solution for driver safety with smart monitoring and alert systems.",
      tech: ["Arduino", "IoT", "C++", "Sensors", "Mobile App"],
<<<<<<< HEAD
      // TODO: Replace with actual project image path (e.g., "/photos/project-iot-sunglass.png")
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&h=300&fit=crop",
=======
      image: "/photos/iot.jpg",
      github: "#",
      demo: "#"
    },
    {
      title: "Real-Time Weather Forecast App",
      description: "Weather app providing real-time forecasts and weather data for any location.",
      tech: ["React.js", "OpenWeatherMap API", "CSS"],
      image: "/photos/weatherapp.png",
      github: "https://github.com/seena2003/RealTimeWeatherApp",
      demo: "https://github.com/seena2003/RealTimeWeatherApp"
    },
    {
      title: "Amazon Frontend Clone",
      description: "A frontend clone of Amazon with product listings, cart, and responsive design.",
      tech: ["HTML", "CSS"],
      image: "/photos/amazon.png",
>>>>>>> b8b473e (Initial commit with portfolio project files)
      github: "#",
      demo: "#"
    }
  ];

  const skills = {
<<<<<<< HEAD
    "Languages": ["Java", "Python", "JavaScript", "C++", "SQL"],
    "Frameworks": ["React.js", "Next.js", "Flask", "Node.js", "Express"],
    "Tools": ["Docker", "AWS", "Git", "PostgreSQL", "MongoDB"],
    "Specialties": ["AI/ML", "IoT", "DevOps", "API Integration"]
  };

  const certifications = [
    { name: "Intro to Data Science", org: "Cisco", year: "2024" },
    { name: "Soft Skill Development", org: "NPTEL", year: "2024" },
    { name: "DevOps Fundamentals", org: "Seminarroom Education", year: "2023" },
    { name: "Deloitte NLA Clearance", org: "Deloitte", year: "2023" }
=======
    "Languages": ["Java", "Python","HTML/CSS", "JavaScript", "C++", "SQL"],
    "Frameworks": ["React.js", "Next.js", "Node.js", "Flask","Django"],
    "Tools": ["Docker", "AWS", "Git", "PostgreSQL", "MongoDB"],
    "Specialties": ["AI/ML", "DevOps", "API Integration", "IoT", "Data Science"]
  };

  const certifications = [
    { name: "Intro to Data Science", org: "Cisco", year: "2025" },
    { name: "Soft Skill Development", org: "NPTEL", year: "2024" },
    { name: "DevOps Fundamentals", org: "Seminarroom Education", year: "2024" },
    { name: "Deloitte NLA Clearance", org: "Deloitte", year: "2025" }
>>>>>>> b8b473e (Initial commit with portfolio project files)
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(3deg); }
        }
        
        @keyframes glow-pulse {
<<<<<<< HEAD
          0%, 100% { box-shadow: 0 0 15px rgba(249, 115, 22, 0.2); }
          50% { box-shadow: 0 0 25px rgba(249, 115, 22, 0.4); }
=======
          0%, 100% { box-shadow: 0 0 20px rgba(249, 115, 22, 0.3); }
          50% { box-shadow: 0 0 40px rgba(249, 115, 22, 0.6), 0 0 60px rgba(249, 115, 22, 0.3); }
>>>>>>> b8b473e (Initial commit with portfolio project files)
        }
        
        @keyframes geometric-rotate {
          0% { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(180deg) scale(1.1); }
          100% { transform: rotate(360deg) scale(1); }
        }
        
<<<<<<< HEAD
        .float-animation { animation: float 6s ease-in-out infinite; }
        .glow-pulse { animation: glow-pulse 5s ease-in-out infinite; }
        .geometric-rotate { animation: geometric-rotate 20s linear infinite; }
=======
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 40px 10px rgba(249,115,22,0.5); }
          50% { box-shadow: 0 0 60px 20px rgba(249,115,22,0.8); }
        }
        
        .float-animation { animation: float 6s ease-in-out infinite; }
        .glow-pulse { animation: glow-pulse 3s ease-in-out infinite; }
        .geometric-rotate { animation: geometric-rotate 20s linear infinite; }
        .animate-glow {
          animation: glow 2.5s ease-in-out infinite;
        }
>>>>>>> b8b473e (Initial commit with portfolio project files)
      `}</style>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold text-orange-400">Srinath Gowda S M</div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'portfolio', 'experience', 'skills', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize hover:text-orange-400 transition-colors ${
                    activeSection === item ? 'text-orange-400' : 'text-gray-300'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button variant="ghost" size="sm" onClick={toggleMenu}>
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-800 border-b border-slate-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['home', 'about', 'portfolio', 'experience', 'skills', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block px-3 py-2 text-base font-medium capitalize hover:text-orange-400 transition-colors w-full text-left"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
<<<<<<< HEAD
          <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-orange-400 rounded-full"></div>
          <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-blue-400 rounded-full"></div>
=======
          <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-orange-400 rounded-full animate-ping"></div>
          <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-blue-400 rounded-full animate-ping delay-500"></div>
>>>>>>> b8b473e (Initial commit with portfolio project files)
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-bold">
                  Hello<span className="text-orange-400">.</span>
                </h1>
                <h2 className="text-2xl lg:text-3xl text-gray-300">
                  I'm <span className="text-white font-semibold">Srinath Gowda S M</span>
                </h2>
                <h3 className="text-3xl lg:text-4xl font-bold text-white">
                  AI & Full Stack Developer
                </h3>
                <p className="text-lg text-gray-400 max-w-xl">
                  Building smart solutions for a connected future through innovative web development, AI/ML, data science and IoT technologies.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button 
                  onClick={() => scrollToSection('portfolio')}
                  className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3"
                >
                  Explore My Work
                </Button>
                <a href="/resume.pdf" download>
                <Button
                  variant="outline"
                  className="border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white px-6 py-3"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Button>
                </a>
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-4 pt-8 border-t border-slate-800">
                {['Java', 'Python', 'React.js', 'Data Science', 'AI/ML', 'IoT', 'AWS'].map((tech) => (
                  <Badge key={tech} variant="secondary" className="bg-slate-800 text-gray-300 hover:text-white">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Modern Enhanced Photo Section - WITHOUT HOVER ANIMATIONS */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative float-animation">
                {/* Main Photo Container with Modern Design */}
                <div className="relative">
                  {/* Dynamic Geometric Background */}
                  <div className="absolute -inset-8">
                    {/* Large Orange Circle */}
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500/30 to-red-500/20 rounded-full blur-xl"></div>
                    {/* Geometric Shapes */}
<<<<<<< HEAD
                    <div className="absolute top-0 right-0 w-32 h-32 border-4 border-orange-500/30 rounded-full"></div>
=======
                    <div className="absolute top-0 right-0 w-32 h-32 border-4 border-orange-500/30 rounded-full geometric-rotate"></div>
>>>>>>> b8b473e (Initial commit with portfolio project files)
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-orange-500/20 to-transparent rounded-xl transform rotate-45"></div>
                  </div>
                  
                  {/* Enhanced Photo Frame - REMOVED HOVER EFFECTS */}
<<<<<<< HEAD
                  <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-8 border-gradient-to-r from-orange-500 to-red-500 shadow-2xl glow-pulse">
                    <img 
                      src="/photos/profile1.png"
                      alt="Srinath Gowda S M"
                      className="w-full h-full object-cover object-center"
                    />
                    
                    {/* Modern Overlay with Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-orange-500/10"></div>
                    
                  
=======
                  <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden z-10">
                    {/* Outer Glow/Gradient Border */}
                    <div className="absolute inset-0 rounded-full border-[10px] border-orange-500 shadow-[0_0_40px_10px_rgba(249,115,22,0.5)] animate-glow"></div>
                    {/* Main Photo */}
                    <img 
                      src="/photos/profilew.png"
                      alt="Srinath Gowda S M"
                      className="w-full h-full object-cover object-center rounded-full border-4 border-white relative z-10"
                    />
                    {/* Optional: Inner subtle white border for depth */}
                    <div className="absolute inset-2 rounded-full border-2 border-white opacity-60 z-0"></div>
>>>>>>> b8b473e (Initial commit with portfolio project files)
                  </div>
                </div>

                {/* Enhanced Floating Elements */}
                <div className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-br from-orange-500/30 to-red-500/20 backdrop-blur-sm rounded-3xl border border-orange-500/40 flex items-center justify-center animate-bounce shadow-lg">
                  <Code className="w-8 h-8 text-orange-300" />
                </div>
                
                <div className="absolute -bottom-8 -right-8 w-16 h-16 bg-gradient-to-br from-blue-500/30 to-purple-500/20 backdrop-blur-sm rounded-3xl border border-blue-500/40 flex items-center justify-center animate-bounce delay-1000 shadow-lg">
                  <Sparkles className="w-8 h-8 text-blue-300" />
                </div>
                
                <div className="absolute top-1/3 -left-16 w-14 h-14 bg-gradient-to-br from-purple-500/30 to-pink-500/20 backdrop-blur-sm rounded-2xl border border-purple-500/40 flex items-center justify-center animate-pulse shadow-lg">
                  <Star className="w-7 h-7 text-purple-300" />
                </div>

                {/* Animated Tech Orbit */}
                <div className="absolute inset-0 pointer-events-none">
<<<<<<< HEAD
                  <div className="absolute top-1/4 left-full w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center transform">
                    <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  </div>
                  <div className="absolute bottom-1/4 right-full w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center transform">
=======
                  <div className="absolute top-1/4 left-full w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center transform animate-ping">
                    <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  </div>
                  <div className="absolute bottom-1/4 right-full w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center transform animate-ping delay-700">
>>>>>>> b8b473e (Initial commit with portfolio project files)
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                  </div>
                </div>

                {/* Decorative Modern Lines */}
<<<<<<< HEAD
                <div className="absolute -inset-12 border border-orange-500/10 rounded-full opacity-30"></div>
                <div className="absolute -inset-16 border border-blue-500/5 rounded-full opacity-20"></div>
=======
                <div className="absolute -inset-12 border border-orange-500/10 rounded-full animate-spin opacity-30" style={{ animationDuration: '30s' }}></div>
                <div className="absolute -inset-16 border border-blue-500/5 rounded-full animate-spin opacity-20" style={{ animationDuration: '45s', animationDirection: 'reverse' }}></div>
>>>>>>> b8b473e (Initial commit with portfolio project files)
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">About Me</h2>
            <div className="w-20 h-1 bg-orange-400 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm a passionate Computer Science Engineering student with a strong foundation in web development, 
                artificial intelligence, and data science technologies. My journey began with curiosity about how technology 
                can solve real-world problems, leading me to specialize in creating smart, scalable solutions.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
<<<<<<< HEAD
                As the Digital Head at Malnad Eco Club, I combine technical expertise with leadership skills to 
=======
                As the Digital & Social Media Head at Malnad Eco Club, I combine technical expertise with leadership skills to 
>>>>>>> b8b473e (Initial commit with portfolio project files)
                drive innovation in environmental technology projects. I believe in continuous learning and 
                staying updated with the latest technological trends.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 pt-6">
                <Card className="bg-slate-800 border-slate-700">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-orange-400 flex items-center">
                      <User className="mr-2 h-5 w-5" />
                      Education
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
<<<<<<< HEAD
=======
                    <p className="text-sm text-gray-300">Malnad College of Engineering</p>
>>>>>>> b8b473e (Initial commit with portfolio project files)
                    <p className="text-sm text-gray-300">B.E in Computer Science</p>
                    <p className="text-xs text-gray-400">2021 - 2025</p>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800 border-slate-700">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-orange-400 flex items-center">
                      <Award className="mr-2 h-5 w-5" />
                      Leadership
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
<<<<<<< HEAD
                    <p className="text-sm text-gray-300">Digital Head</p>
                    <p className="text-xs text-gray-400">Malnad Eco Club</p>
=======
                    <p className="text-sm text-gray-300">Digital & Social Media Head</p>
                    <p className="text-xs text-gray-400">Malnad Eco Club</p>
                    <p className="text-xs text-gray-400">2021 - 2025</p>
>>>>>>> b8b473e (Initial commit with portfolio project files)
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">Quick Stats</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Projects Completed</span>
<<<<<<< HEAD
                    <span className="text-2xl font-bold text-orange-400">15+</span>
=======
                    <span className="text-2xl font-bold text-orange-400">10+</span>
>>>>>>> b8b473e (Initial commit with portfolio project files)
                  </div>
                  <Separator className="bg-slate-700" />
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Technologies Mastered</span>
<<<<<<< HEAD
                    <span className="text-2xl font-bold text-orange-400">20+</span>
=======
                    <span className="text-2xl font-bold text-orange-400">15+</span>
>>>>>>> b8b473e (Initial commit with portfolio project files)
                  </div>
                  <Separator className="bg-slate-700" />
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Years of Experience</span>
                    <span className="text-2xl font-bold text-orange-400">&lt; 1</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    {['Full-Stack Development', 'AI/ML Solutions', 'API Integration', 'IoT Prototyping'].map((service) => (
                      <div key={service} className="flex items-center space-x-2">
                        <ChevronRight className="h-4 w-4 text-orange-400" />
                        <span className="text-sm text-gray-300">{service}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-orange-400 mx-auto mb-4"></div>
            <p className="text-gray-400 max-w-2xl mx-auto">
<<<<<<< HEAD
              Here are some of my key projects that showcase my skills in web development, AI, data science and IoT technologies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-slate-900 border-slate-700 hover:border-orange-400 transition-all duration-300">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300"
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
                    <Button variant="outline" size="sm" className="border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                    <Button variant="outline" size="sm" className="border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
=======
              Here are some of my projects that showcase my skills in web development, AI & data science.
            </p>
          </div>

          <ProjectCarousel projects={projects} />
>>>>>>> b8b473e (Initial commit with portfolio project files)
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Experience</h2>
            <div className="w-20 h-1 bg-orange-400 mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-orange-400"></div>
              
              <div className="space-y-8">
                <div className="relative flex items-start space-x-6">
                  <div className="flex-shrink-0 w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center">
                    <Briefcase className="h-4 w-4 text-white" />
                  </div>
                  <Card className="flex-1 bg-slate-800 border-slate-700">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-white">AI Software Developer</CardTitle>
                          <CardDescription className="text-orange-400">IMERSE Digital</CardDescription>
                        </div>
                        <Badge variant="secondary" className="bg-slate-700 text-gray-300">
                          Feb 2025 - Present
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 mb-3">
                        Developing AI-powered solutions using Next.js and PostgreSQL, focusing on machine learning integration and scalable web applications.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {['Next.js', 'PostgreSQL', 'AI/ML', 'TypeScript'].map((tech) => (
                          <Badge key={tech} variant="outline" className="border-orange-400 text-orange-400">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="relative flex items-start space-x-6">
                  <div className="flex-shrink-0 w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center">
                    <Code className="h-4 w-4 text-white" />
                  </div>
                  <Card className="flex-1 bg-slate-800 border-slate-700">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-white">Web Developer Intern</CardTitle>
                          <CardDescription className="text-orange-400">JV Global Services Pvt. Ltd</CardDescription>
                        </div>
                        <Badge variant="secondary" className="bg-slate-700 text-gray-300">
                          Oct - Nov 2022
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 mb-3">
                        Gained hands-on experience in full-stack development, working on web applications and learning industry best practices.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {['React', 'Node.js', 'JavaScript', 'MongoDB'].map((tech) => (
                          <Badge key={tech} variant="outline" className="border-orange-400 text-orange-400">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Skills & Technologies</h2>
            <div className="w-20 h-1 bg-orange-400 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skills).map(([category, skillList]) => (
              <Card key={category} className="bg-slate-900 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-orange-400">{category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {skillList.map((skill) => (
                      <div key={skill} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                        <span className="text-gray-300">{skill}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Certifications */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center mb-8">Certifications</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {certifications.map((cert, index) => (
                <Card key={index} className="bg-slate-900 border-slate-700 text-center">
                  <CardHeader className="pb-2">
                    <Award className="h-8 w-8 text-orange-400 mx-auto mb-2" />
                    <CardTitle className="text-sm text-white">{cert.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xs text-gray-400">{cert.org}</p>
                    <p className="text-xs text-orange-400">{cert.year}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <div className="w-20 h-1 bg-orange-400 mx-auto mb-4"></div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <Card className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-orange-400" />
                    <span className="text-gray-300">srinathgowdasm09@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-orange-400" />
                    <span className="text-gray-300">+91 8618608097</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-orange-400" />
                    <span className="text-gray-300">Karnataka, India</span>
                  </div>
                </CardContent>
              </Card>

              <div className="flex space-x-4">
                <a href='https://www.linkedin.com/in/srinath-gowda-s-m/'>
                <Button variant="outline" size="sm" className="border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white">
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </Button>
                </a>
                <a href='https://github.com/seena2003'>
                <Button variant="outline" size="sm" className="border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Button>
                </a>
              </div>
            </div>

            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input 
                      type="text" 
                      name="name"
                      placeholder="Your Name" 
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:border-orange-400 focus:outline-none"
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      name="email"
                      placeholder="Your Email" 
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:border-orange-400 focus:outline-none"
                    />
                  </div>
                  <div>
                    <textarea 
                      name="message"
                      placeholder="Your Message" 
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:border-orange-400 focus:outline-none"
                    ></textarea>
                  </div>
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-xl font-bold text-orange-400 mb-4">Srinath Gowda S M</div>
            <p className="text-gray-400 mb-4">Building smart solutions for a connected future</p>
            <div className="flex justify-center space-x-6 mb-6">
              {['Home', 'About', 'Portfolio', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-400 hover:text-orange-400 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
            <p className="text-gray-500 text-sm">
              © 2024 Srinath Gowda S M. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
