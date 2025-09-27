import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface SkillCategory {
  title: string;
  skills: string[];
  icon: string;
}

interface SkillsProps {
  categories: SkillCategory[];
}

export default function Skills({ categories }: SkillsProps) {
  return (
    <section className="py-16 px-6" data-testid="skills-section">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-skills-title">
            Technical Skills
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-skills-description">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Card key={category.title} className="hover-elevate" data-testid={`card-skill-category-${category.title.toLowerCase().replace(/\s+/g, '-')}`}>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <span className="text-2xl" data-testid={`icon-${category.title.toLowerCase().replace(/\s+/g, '-')}`}>
                    {category.icon}
                  </span>
                  <span data-testid={`text-category-${index}`}>{category.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="outline"
                      className="text-sm"
                      data-testid={`badge-skill-${skill.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}