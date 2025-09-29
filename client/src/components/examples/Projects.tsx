import Projects from '../Projects';
import weatherAppImage from "@assets/generated_images/weather-app.png";
import foodDeliveryImage from "@assets/generated_images/food-del.png";
import ecommerceImage from "@assets/generated_images/E-commerce_platform_screenshot_8c27c010.png";

export default function ProjectsExample() {
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

  return <Projects projects={projects} />;
}