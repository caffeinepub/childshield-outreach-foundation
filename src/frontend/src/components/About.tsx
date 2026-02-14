import { LandingSection } from './LandingSection';
import { Heart, Users, Globe } from 'lucide-react';

export function About() {
  const values = [
    {
      icon: Heart,
      title: 'Compassion',
      description: 'Every child deserves love, care, and protection in a safe environment.'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'We work together with families and communities to create lasting change.'
    },
    {
      icon: Globe,
      title: 'Impact',
      description: 'Our programs reach children and families where they need us most.'
    }
  ];

  return (
    <LandingSection id="about" title="About Us" className="bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-12 text-center">
          CHILDSHIELD OUTREACH FOUNDATION is dedicated to protecting vulnerable children 
          and empowering communities to create safe, nurturing environments where every 
          child can thrive. Through education, advocacy, and direct support, we work 
          tirelessly to ensure that children everywhere have the opportunity to grow up 
          healthy, safe, and loved.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="text-center p-6 rounded-2xl bg-card hover:shadow-lg transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <Icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </LandingSection>
  );
}
