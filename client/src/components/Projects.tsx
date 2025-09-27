import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  highlights: string[];
}

interface ProjectsProps {
  projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
  const handleLinkClick = (url: string, type: 'live' | 'github') => {
    console.log(`${type} link clicked: ${url}`);
    window.open(url, '_blank');
  };

  return (
    <section className="py-16 px-6 bg-muted/30" data-testid="projects-section">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-projects-title">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-projects-description">
            A collection of projects that showcase my development skills and problem-solving abilities
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={project.title} className="overflow-hidden hover-elevate" data-testid={`card-project-${index}`}>
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={`${project.title} screenshot`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  data-testid={`img-project-${index}`}
                />
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl" data-testid={`text-project-title-${index}`}>
                  {project.title}
                </CardTitle>
                <CardDescription data-testid={`text-project-description-${index}`}>
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="space-y-2">
                  {project.highlights.map((highlight, highlightIndex) => (
                    <div key={highlightIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span data-testid={`text-highlight-${index}-${highlightIndex}`}>{highlight}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="secondary" 
                      className="text-xs"
                      data-testid={`badge-tech-${tech.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2 pt-2">
                  {project.liveUrl && (
                    <Button 
                      size="sm" 
                      onClick={() => handleLinkClick(project.liveUrl!, 'live')}
                      className="gap-1.5"
                      data-testid={`button-live-${index}`}
                    >
                      <ExternalLink className="h-3 w-3" />
                      Live Demo
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={() => handleLinkClick(project.githubUrl!, 'github')}
                      className="gap-1.5"
                      data-testid={`button-github-${index}`}
                    >
                      <Github className="h-3 w-3" />
                      Code
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}