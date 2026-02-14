import { Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = typeof window !== 'undefined' 
    ? encodeURIComponent(window.location.hostname) 
    : 'childshield-foundation';

  return (
    <footer className="bg-muted/50 border-t border-border py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-3">
            <img
              src="/assets/generated/childshield-logo.dim_512x512.png"
              alt="CHILDSHIELD OUTREACH FOUNDATION"
              className="h-10 w-10 object-contain"
            />
            <span className="font-bold text-lg text-foreground">
              CHILDSHIELD OUTREACH FOUNDATION
            </span>
          </div>

          <p className="text-center text-muted-foreground max-w-2xl text-sm">
            Dedicated to protecting children and empowering communities to create 
            safe, nurturing environments where every child can thrive.
          </p>

          <div className="flex flex-col items-center gap-2 text-sm text-muted-foreground">
            <p>© {currentYear} CHILDSHIELD OUTREACH FOUNDATION. All rights reserved.</p>
            <p className="flex items-center gap-1">
              Built with <Heart className="w-4 h-4 text-primary fill-primary" /> using{' '}
              <a
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
