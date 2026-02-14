import { LandingSection } from './LandingSection';
import { BookOpen, Home, Stethoscope, Briefcase } from 'lucide-react';

export function Programs() {
  const programs = [
    {
      icon: BookOpen,
      title: 'Education Support',
      description: 'Providing access to quality education, school supplies, and tutoring programs to help children succeed academically.'
    },
    {
      icon: Home,
      title: 'Safe Spaces',
      description: 'Creating and maintaining safe environments where children can play, learn, and grow without fear.'
    },
    {
      icon: Stethoscope,
      title: 'Health & Wellness',
      description: 'Ensuring children have access to healthcare, nutrition programs, and mental health support services.'
    },
    {
      icon: Briefcase,
      title: 'Family Empowerment',
      description: 'Supporting families with resources, training, and opportunities to build stable, nurturing homes.'
    }
  ];

  return (
    <LandingSection id="programs" title="What We Do">
      <div className="max-w-6xl mx-auto">
        <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-16 text-center max-w-3xl mx-auto">
          Our comprehensive programs address the diverse needs of children and families, 
          creating holistic support systems that foster long-term positive outcomes.
        </p>

        <div className="grid sm:grid-cols-2 gap-8">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <div
                key={index}
                className="p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all hover:shadow-xl group"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 mb-5 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-foreground">{program.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{program.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </LandingSection>
  );
}
