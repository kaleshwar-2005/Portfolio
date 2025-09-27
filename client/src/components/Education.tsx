import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  duration: string;
  grade: string;
  gradeType: 'CGPA' | 'Percentage';
  status?: string;
}

interface EducationProps {
  education: EducationItem[];
}

export default function Education({ education }: EducationProps) {
  return (
    <section className="py-16 px-6" data-testid="education-section">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-education-title">
            Education
          </h2>
          <p className="text-lg text-muted-foreground" data-testid="text-education-description">
            My academic journey and achievements
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block"></div>
          
          <div className="space-y-8">
            {education.map((item, index) => (
              <div key={index} className="relative" data-testid={`item-education-${index}`}>
                {/* Timeline dot */}
                <div className="absolute left-6 top-6 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block"></div>
                
                <Card className="md:ml-20 hover-elevate">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <CardTitle className="flex items-center gap-2">
                        <GraduationCap className="h-5 w-5 text-primary" />
                        <span data-testid={`text-degree-${index}`}>{item.degree}</span>
                        {item.status && (
                          <Badge variant="outline" className="ml-2" data-testid={`badge-status-${index}`}>
                            {item.status}
                          </Badge>
                        )}
                      </CardTitle>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span data-testid={`text-duration-${index}`}>{item.duration}</span>
                        </div>
                      </div>
                    </div>
                    <CardDescription>
                      <div className="space-y-1">
                        <div className="font-medium text-foreground" data-testid={`text-institution-${index}`}>
                          {item.institution}
                        </div>
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <MapPin className="h-3 w-3" />
                          <span data-testid={`text-location-${index}`}>{item.location}</span>
                        </div>
                      </div>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        {item.gradeType}:
                      </span>
                      <Badge variant="secondary" className="font-medium" data-testid={`badge-grade-${index}`}>
                        {item.grade}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}