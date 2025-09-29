import { Button } from "@/components/ui/button";
import { Mail, Phone, Github, Linkedin, Heart } from "lucide-react";

interface FooterProps {
  name: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
}

export default function Footer({ name, email, phone, github, linkedin }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleContactClick = (type: 'email' | 'phone' | 'github' | 'linkedin') => {
    console.log(`Footer ${type} contact clicked`);
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
    <footer className="bg-muted/50 border-t py-12 px-6" data-testid="footer">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold" data-testid="text-footer-name">
              {name}
            </h3>
            <p className="text-muted-foreground max-w-md" data-testid="text-footer-description">
              Full Stack Developer passionate about creating innovative web solutions. 
              Always learning and exploring new technologies.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Get In Touch</h4>
            <div className="flex flex-wrap gap-3">
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleContactClick('email')}
                className="gap-2"
                data-testid="button-footer-email"
              >
                <Mail className="h-4 w-4" />
                Email
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleContactClick('github')}
                className="gap-2"
                data-testid="button-footer-github"
              >
                <Github className="h-4 w-4" />
                GitHub
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleContactClick('linkedin')}
                className="gap-2"
                data-testid="button-footer-linkedin"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t pt-8 text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-2" data-testid="text-copyright">
            © {currentYear} {name}. Made with <Heart className="h-4 w-4 text-red-500" /> using React.js
          </p>
        </div>
      </div>
    </footer>
  );
}