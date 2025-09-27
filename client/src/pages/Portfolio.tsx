import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Education from '@/components/Education';
import Certificates from '@/components/Certificates';
import Footer from '@/components/Footer';

// Import images
import weatherAppImage from "@assets/generated_images/Weather_app_interface_screenshot_135bac7e.png";
import foodDeliveryImage from "@assets/generated_images/Food_delivery_app_screenshot_ccc0c173.png";
import ecommerceImage from "@assets/generated_images/E-commerce_platform_screenshot_8c27c010.png";

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('darkMode') === 'true';
    }
    return false;
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('darkMode', darkMode.toString());
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Portfolio data
  const personalInfo = {
    name: "Kaleshwar Lakaram",
    email: "kaleshwarlakaram2005@gmail.com",
    phone: "9182375278",
    github: "kaleshwar-2005",
    linkedin: "Kaleshwar Lakaram"
  };

  const skillCategories = [
    {
      title: "Frontend",
      icon: "🎨",
      skills: ["HTML", "CSS", "Bootstrap", "JavaScript", "React.js"]
    },
    {
      title: "Backend",
      icon: "⚙️",
      skills: ["Node.js", "Express.js", "RESTful APIs"]
    },
    {
      title: "Programming Languages",
      icon: "💻",
      skills: ["Python", "Java", "Data Structures & Algorithms (C++)"]
    },
    {
      title: "Databases",
      icon: "🗄️",
      skills: ["MySQL", "SQLite", "MongoDB"]
    },
    {
      title: "Tools & Platforms",
      icon: "🔧",
      skills: ["Git", "GitHub", "Render"]
    },
    {
      title: "Soft Skills",
      icon: "🤝",
      skills: ["Time Management", "Problem Solving"]
    }
  ];

  const projects = [
    {
      title: "Weather App",
      description: "Built a responsive weather app used by 10+ peers during testing, fetching live weather data via REST APIs.",
      image: weatherAppImage,
      technologies: ["React.js", "OpenWeatherMap API"],
      liveUrl: "#",
      githubUrl: "#",
      highlights: [
        "Built a responsive weather app used by 10+ peers during testing",
        "Optimized API request handling to improve data fetch reliability", 
        "Implemented instant city search and dynamic UI updates for seamless UX"
      ]
    },
    {
      title: "Food Delivery Web Application",
      description: "Developed a full-stack delivery platform in a team of 4, enabling restaurant and order management.",
      image: foodDeliveryImage,
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#",
      highlights: [
        "Developed a full-stack delivery platform in a team of 4",
        "Implemented JWT authentication for secure login and protected routes",
        "Integrated REST APIs to process 10–15 sample orders daily during testing"
      ]
    },
    {
      title: "E-commerce Platform – ShopHub",
      description: "Designed a demo e-commerce platform with 20+ sample products, supporting user registration, login, and cart checkout.",
      image: ecommerceImage,
      technologies: ["Node.js", "Express.js", "HTML", "CSS", "JavaScript"],
      liveUrl: "#",
      githubUrl: "#",
      highlights: [
        "Designed a demo e-commerce platform with 20+ sample products",
        "Created an admin dashboard to simplify product and user management tasks",
        "Delivered a fully responsive layout compatible with both desktop and mobile"
      ]
    }
  ];

  const educationData = [
    {
      degree: "B.Tech in Computer Science Engineering",
      institution: "Veltech Rangarajan Dr. Rangarajan R&D Institute of Science and Technology",
      location: "Chennai",
      duration: "Sept 2022 – May 2026",
      grade: "8.29",
      gradeType: "CGPA" as const,
      status: "Currently Pursuing"
    },
    {
      degree: "Intermediate MPC", 
      institution: "Krishnaveni Junior College",
      location: "Vinukonda",
      duration: "June 2020 – May 2022",
      grade: "76%",
      gradeType: "Percentage" as const
    },
    {
      degree: "10th Standard",
      institution: "Geethanjali High School", 
      location: "Vinukonda",
      duration: "June 2019 – April 2020",
      grade: "98%",
      gradeType: "Percentage" as const
    }
  ];

  const certificates = [
    {
      title: "Python Essentials 1",
      issuer: "Cisco",
      icon: "🐍",
      description: "Fundamental Python programming concepts including data types, control structures, and functions.",
      credentialUrl: "#"
    },
    {
      title: "Python Essentials 2", 
      issuer: "Cisco",
      icon: "🐍",
      description: "Advanced Python programming including object-oriented programming, exception handling, and modules.",
      credentialUrl: "#"
    },
    {
      title: "Introduction to Networks",
      issuer: "Cisco", 
      icon: "🌐",
      description: "Networking fundamentals covering protocols, network models, and basic network configuration.",
      credentialUrl: "#"
    },
    {
      title: "IBM z/OS Mainframe Practitioner",
      issuer: "IBM",
      icon: "💻", 
      description: "Comprehensive understanding of IBM mainframe systems and z/OS operating system fundamentals.",
      credentialUrl: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      <main>
        <Hero
          name={personalInfo.name}
          title="Full Stack Developer & CS Student"
          description="Passionate computer science student specializing in full-stack web development. Building responsive web applications with modern technologies and always eager to learn new frameworks."
          email={personalInfo.email}
          phone={personalInfo.phone}
          github={personalInfo.github}
          linkedin={personalInfo.linkedin}
          skills={['React.js', 'Node.js', 'MongoDB', 'Python', 'Java', 'Express.js']}
        />
        
        <Skills categories={skillCategories} />
        
        <Projects projects={projects} />
        
        <Education education={educationData} />
        
        <Certificates certificates={certificates} />
      </main>
      
      <Footer {...personalInfo} />
    </div>
  );
}