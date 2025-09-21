import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building } from "lucide-react";
import { LucideIcon } from "lucide-react";
import { ExperienceItem, EducationItem } from "@/types/qualification";

interface QualificationCardProps {
  item: ExperienceItem | EducationItem;
  index: number;
  icon: LucideIcon;
  isVisible: boolean;
  animationDelay: number;
}

export function QualificationCard({ 
  item, 
  index, 
  icon: Icon, 
  isVisible, 
  animationDelay 
}: QualificationCardProps) {
  return (
    <div
      data-index={index}
      className={`group transition-all duration-700 ease-out transform ${
        isVisible 
          ? "opacity-100 translate-y-0 scale-100" 
          : "opacity-0 translate-y-8 scale-95"
      }`}
      style={{ transitionDelay: `${animationDelay}ms` }}
    >
      <Card className="relative overflow-hidden border-0 bg-card/50 backdrop-blur-sm hover:shadow-card-hover transition-all duration-500 hover:-translate-y-1">
        {/* Gradient background overlay */}
        <div className={`absolute inset-0 ${item.gradientClass} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
        
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-background/10 to-background/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <CardContent className="p-6 relative z-10">
          <div className="flex items-start gap-4">
            {/* Icon container */}
            <div className="flex-shrink-0">
              <div className="relative">
                <div className={`p-3 rounded-xl bg-gradient-to-br from-background to-background/80 shadow-card group-hover:shadow-glow transition-all duration-300 group-hover:scale-110`}>
                  <Icon className={`h-5 w-5 ${item.accentColor} transition-all duration-300 group-hover:scale-110`} />
                </div>
                <div className={`absolute inset-0 rounded-xl ${item.gradientClass} opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm`} />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0 space-y-3">
              {/* Title */}
              <h3 className={`font-bold text-lg ${item.accentColor} transition-colors duration-300 group-hover:text-opacity-90`}>
                {item.title}
              </h3>

              {/* Company */}
              <div className="flex items-center text-foreground/80 font-medium">
                <Building className="h-4 w-4 mr-2 text-accent/70" />
                <span className="group-hover:text-foreground transition-colors duration-300">
                  {item.company}
                </span>
              </div>

              {/* Meta information */}
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <div className="flex items-center group-hover:text-foreground/70 transition-colors duration-300">
                  <Calendar className="h-3.5 w-3.5 mr-1.5" />
                  <span>{item.period}</span>
                </div>
                <div className="flex items-center group-hover:text-foreground/70 transition-colors duration-300">
                  <MapPin className="h-3.5 w-3.5 mr-1.5" />
                  <span>{item.location}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                {item.description}
              </p>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 pt-2">
                {item.skills.slice(0, 4).map((skill) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className="text-xs px-3 py-1 border-border/50 hover:border-accent/50 transition-all duration-300 group-hover:bg-background/50 group-hover:text-foreground"
                  >
                    {skill}
                  </Badge>
                ))}
                {item.skills.length > 4 && (
                  <Badge 
                    variant="outline" 
                    className={`text-xs px-3 py-1 border-border/50 ${item.accentColor} bg-background/50 group-hover:bg-background/80 transition-all duration-300`}
                  >
                    +{item.skills.length - 4} more
                  </Badge>
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}