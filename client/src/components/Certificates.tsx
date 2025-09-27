import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Certificate {
  title: string;
  issuer: string;
  description?: string;
  date?: string;
  credentialUrl?: string;
  icon?: string;
}

interface CertificatesProps {
  certificates: Certificate[];
}

export default function Certificates({ certificates }: CertificatesProps) {
  const handleCredentialClick = (url: string, title: string) => {
    console.log(`Certificate credential clicked: ${title}`);
    window.open(url, '_blank');
  };

  return (
    <section className="py-16 px-6 bg-muted/30" data-testid="certificates-section">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-certificates-title">
            Certificates & Achievements
          </h2>
          <p className="text-lg text-muted-foreground" data-testid="text-certificates-description">
            Professional certifications that validate my technical expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <Card key={index} className="hover-elevate" data-testid={`card-certificate-${index}`}>
              <CardHeader>
                <CardTitle className="flex items-start gap-3">
                  <div className="flex-shrink-0">
                    {cert.icon ? (
                      <span className="text-2xl" data-testid={`icon-certificate-${index}`}>
                        {cert.icon}
                      </span>
                    ) : (
                      <Award className="h-6 w-6 text-primary" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold leading-tight" data-testid={`text-certificate-title-${index}`}>
                      {cert.title}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge variant="outline" className="text-xs" data-testid={`badge-issuer-${index}`}>
                        {cert.issuer}
                      </Badge>
                      {cert.date && (
                        <span className="text-xs text-muted-foreground" data-testid={`text-date-${index}`}>
                          {cert.date}
                        </span>
                      )}
                    </div>
                  </div>
                </CardTitle>
                {cert.description && (
                  <CardDescription data-testid={`text-certificate-description-${index}`}>
                    {cert.description}
                  </CardDescription>
                )}
              </CardHeader>
              {cert.credentialUrl && (
                <CardContent className="pt-0">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="gap-2"
                    onClick={() => handleCredentialClick(cert.credentialUrl!, cert.title)}
                    data-testid={`button-credential-${index}`}
                  >
                    <ExternalLink className="h-3 w-3" />
                    View Credential
                  </Button>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}