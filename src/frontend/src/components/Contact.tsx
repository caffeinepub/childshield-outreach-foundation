import { LandingSection } from './LandingSection';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Contact() {
  return (
    <LandingSection id="contact" title="Contact Us">
      <div className="max-w-4xl mx-auto">
        <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-12 text-center">
          We'd love to hear from you. Whether you have questions about our programs, 
          want to get involved, or need assistance, please don't hesitate to reach out.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 rounded-2xl bg-card">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
              <Mail className="w-7 h-7 text-primary" strokeWidth={1.5} />
            </div>
            <h3 className="text-lg font-bold mb-2 text-foreground">Email</h3>
            <p className="text-muted-foreground text-sm">
              info@childshield.org
            </p>
          </div>

          <div className="text-center p-6 rounded-2xl bg-card">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
              <Phone className="w-7 h-7 text-primary" strokeWidth={1.5} />
            </div>
            <h3 className="text-lg font-bold mb-2 text-foreground">Phone</h3>
            <p className="text-muted-foreground text-sm">
              Available on request
            </p>
          </div>

          <div className="text-center p-6 rounded-2xl bg-card">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
              <MapPin className="w-7 h-7 text-primary" strokeWidth={1.5} />
            </div>
            <h3 className="text-lg font-bold mb-2 text-foreground">Location</h3>
            <p className="text-muted-foreground text-sm">
              Serving communities worldwide
            </p>
          </div>
        </div>

        <div className="mt-12 p-8 rounded-2xl bg-muted/50 text-center">
          <p className="text-muted-foreground">
            For urgent child protection concerns, please contact your local authorities 
            or child protection services immediately.
          </p>
        </div>
      </div>
    </LandingSection>
  );
}
