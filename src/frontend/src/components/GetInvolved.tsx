import { useState } from 'react';
import { LandingSection } from './LandingSection';
import { DollarSign, Clock, Gift, Share2, ChevronDown, ChevronUp } from 'lucide-react';
import { BtcDonationDetails } from './BtcDonationDetails';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

export function GetInvolved() {
  const [isDonateOpen, setIsDonateOpen] = useState(false);

  const ways = [
    {
      icon: DollarSign,
      title: 'Donate',
      description: 'Your financial support helps us expand our programs and reach more children in need.',
      expandable: true,
    },
    {
      icon: Clock,
      title: 'Volunteer',
      description: 'Share your time and talents to make a direct impact in the lives of children and families.',
      expandable: false,
    },
    {
      icon: Gift,
      title: 'Sponsor',
      description: 'Become a program sponsor and help sustain our long-term initiatives for children.',
      expandable: false,
    },
    {
      icon: Share2,
      title: 'Spread the Word',
      description: 'Help us raise awareness by sharing our mission with your community and networks.',
      expandable: false,
    }
  ];

  return (
    <LandingSection id="get-involved" title="Get Involved" className="bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-16 text-center max-w-3xl mx-auto">
          There are many ways you can support our mission and help create a safer, 
          brighter future for children. Every contribution makes a difference.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ways.map((way, index) => {
            const Icon = way.icon;
            const isDonate = way.expandable;

            if (isDonate) {
              return (
                <Collapsible
                  key={index}
                  open={isDonateOpen}
                  onOpenChange={setIsDonateOpen}
                  className="sm:col-span-2 lg:col-span-4"
                >
                  <div className="p-6 rounded-2xl bg-card hover:shadow-lg transition-all">
                    <CollapsibleTrigger asChild>
                      <button
                        className="w-full text-center group cursor-pointer focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-lg"
                        aria-label={isDonateOpen ? 'Hide donation details' : 'Show donation details'}
                      >
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/20 mb-4 group-hover:bg-accent/30 transition-colors">
                          <Icon className="w-8 h-8 text-accent-foreground" strokeWidth={1.5} />
                        </div>
                        <div className="flex items-center justify-center gap-2 mb-3">
                          <h3 className="text-xl font-bold text-foreground">{way.title}</h3>
                          {isDonateOpen ? (
                            <ChevronUp className="w-5 h-5 text-muted-foreground" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-muted-foreground" />
                          )}
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed">{way.description}</p>
                      </button>
                    </CollapsibleTrigger>

                    <CollapsibleContent className="mt-6">
                      <BtcDonationDetails />
                    </CollapsibleContent>
                  </div>
                </Collapsible>
              );
            }

            return (
              <div
                key={index}
                className="p-6 rounded-2xl bg-card text-center hover:shadow-lg transition-all group cursor-pointer"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/20 mb-4 group-hover:bg-accent/30 transition-colors">
                  <Icon className="w-8 h-8 text-accent-foreground" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{way.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{way.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block p-8 rounded-2xl bg-primary/10 border-2 border-primary/20">
            <p className="text-lg font-semibold text-foreground mb-4">
              Ready to make a difference?
            </p>
            <p className="text-muted-foreground mb-6 max-w-md">
              Contact us today to learn more about how you can support our mission 
              and help protect children in your community.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  const offset = 80;
                  const elementPosition = element.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - offset;
                  window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                }
              }}
              className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:opacity-90 transition-all shadow-md hover:shadow-lg"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </LandingSection>
  );
}
