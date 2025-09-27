import Skills from '../Skills';

export default function SkillsExample() {
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

  return <Skills categories={skillCategories} />;
}