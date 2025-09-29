import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, Github, Linkedin, ExternalLink } from "lucide-react";
import profileImage from "@assets/generated_images/WhatsApp Image 2025-09-19 at 14.21.22_ffedd17f.jpg";

interface HeroProps {
  name: string;
  title: string;
  description: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  skills: string[];
}

export default function Hero({
  name,
  title,
  description,
  email,
  phone,
  github,
  linkedin,
  skills
}: HeroProps) {
  const handleContactClick = (type: 'email' | 'phone' | 'github' | 'linkedin') => {
    console.log(`${type} contact clicked`);
    switch (type) {
      case 'email':
        window.open(`mailto:${email}`);
        break;
      case 'phone':
        window.open(`tel:${phone}`);
        break;
      case 'github':
        window.open(`https://github.com/${github}`, '_blank');
        break;
      case 'linkedin':
        window.open(linkedin.startsWith('http') ? linkedin : `https://linkedin.com/in/${linkedin}`, '_blank');
        break;
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted px-6" data-testid="hero-section">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent" data-testid="text-name">
              {name}
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground font-medium" data-testid="text-title">
              {title}
            </h2>
            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed" data-testid="text-description">
              {description}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <Badge key={skill} variant="secondary" className="text-sm" data-testid={`badge-skill-${skill.toLowerCase().replace(/\s+/g, '-')}`}>
                {skill}
              </Badge>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <Button 
              onClick={() => handleContactClick('email')}
              className="gap-2"
              data-testid="button-email"
            >
              <Mail className="h-4 w-4" />
              Contact Me
            </Button>
            <Button 
              onClick={() => handleContactClick('github')}
              variant="outline" 
              className="gap-2"
              data-testid="button-github"
            >
              <Github className="h-4 w-4" />
              GitHub
            </Button>
            <Button 
              onClick={() => handleContactClick('linkedin')}
              variant="outline" 
              className="gap-2"
              data-testid="button-linkedin"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span data-testid="text-email">{email}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span data-testid="text-phone">{phone}</span>
            </div>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
              <img 
                src={profileImage} 
                alt={`${name} - Professional headshot`}
                className="w-full h-full object-cover"
                data-testid="img-profile"
              />
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-t from-primary/10 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}