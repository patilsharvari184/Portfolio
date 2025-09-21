"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { Briefcase, GraduationCap } from "lucide-react";
import { QualificationCard } from "./qualificationCard";
import { experiences, education } from "@/ui/qualificationData";

export default function QualificationSection() {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const handleIntersection = useCallback((entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const index = Number(entry.target.getAttribute("data-index"));
        if (!isNaN(index)) {
          setVisibleCards(prev => new Set([...prev, index]));
        }
      }
    });
  }, []);

  const handleSectionInView = useCallback((entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      setIsInView(entry.isIntersecting);
    });
  }, []);

  useEffect(() => {
    // Card visibility observer with more aggressive settings
    observerRef.current = new IntersectionObserver(handleIntersection, {
      threshold: 0.1, // Lower threshold for earlier detection
      rootMargin: "100px 0px -50px 0px", // Larger root margin
    });

    // Section visibility observer
    const sectionObserver = new IntersectionObserver(handleSectionInView, {
      threshold: 0.1,
    });

    if (sectionRef.current) {
      sectionObserver.observe(sectionRef.current);
    }

    // Observe cards immediately and also with a backup timeout
    const observeCards = () => {
      const cards = sectionRef.current?.querySelectorAll("[data-index]");
      cards?.forEach((card) => observerRef.current?.observe(card));
    };

    // Immediate observation
    observeCards();
    
    // Backup observation after render
    const timeoutId = setTimeout(observeCards, 100);
    
    // Additional backup to ensure all cards are visible
    const forceShowTimeout = setTimeout(() => {
      const totalCards = experiences.length + education.length;
      const allIndices = Array.from({ length: totalCards }, (_, i) => i);
      setVisibleCards(new Set(allIndices));
    }, 2000); // Force show all cards after 2 seconds

    return () => {
      sectionObserver.disconnect();
      observerRef.current?.disconnect();
      clearTimeout(timeoutId);
      clearTimeout(forceShowTimeout);
    };
  }, [handleIntersection, handleSectionInView]);

  const totalItems = experiences.length + education.length;

  return (
    <section id="qualification" className="py-20 relative overflow-hidden bg-gradient-to-br from-background via-background/95 to-background/90">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        {/* Animated gradient orbs */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl animate-glow-pulse" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-accent/10 to-primary/10 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: "2s" }} />
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10" ref={sectionRef}>
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Experience & Education
          </h2>
          <div className="w-24 h-1.5 bg-gradient-primary mx-auto mb-6 rounded-full shadow-glow" />
          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            My professional journey and educational background in AI, Machine Learning, and cutting-edge technology
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Experience Section */}
          <div className={`transition-all duration-1000 delay-300 ${
            isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
          }`}>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 shadow-card">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">
                Professional Experience
              </h3>
            </div>
            
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <QualificationCard
                  key={`exp-${index}`}
                  item={exp}
                  index={index}
                  icon={Briefcase}
                  isVisible={visibleCards.has(index)}
                  animationDelay={index * 150}
                />
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div className={`transition-all duration-1000 delay-500 ${
            isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
          }`}>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-xl bg-gradient-to-br from-accent/20 to-primary/20 shadow-card">
                <GraduationCap className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground">
                Education
              </h3>
            </div>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <QualificationCard
                  key={`edu-${index}`}
                  item={edu}
                  index={experiences.length + index}
                  icon={GraduationCap}
                  isVisible={visibleCards.has(experiences.length + index)}
                  animationDelay={(experiences.length + index) * 150}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Progress indicator */}
        <div className="mt-16 flex justify-center">
          <div className="flex space-x-2">
            {Array.from({ length: totalItems }, (_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full transition-all duration-500 ${
                  visibleCards.has(i) 
                    ? "bg-gradient-primary shadow-glow scale-125" 
                    : "bg-border/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}