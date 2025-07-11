'use client';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-accent/50 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Logo and description */}
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-foreground mb-2">
                Julio Salim
              </h3>
              <p className="text-muted-foreground text-sm">
                Full-stack developer passionate about creating beautiful web experiences
              </p>
            </div>

            {/* Quick links */}
            <div className="text-center">
              <h4 className="font-medium text-foreground mb-4">Quick Links</h4>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <a
                  href="#about"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  About
                </a>
                <a
                  href="#skills"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Skills
                </a>
                <a
                  href="#projects"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Projects
                </a>
                <a
                  href="#contact"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </a>
              </div>
            </div>

            {/* Back to top */}
            <div className="text-center md:text-right">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Back to Top
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
              </button>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-border mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-muted-foreground text-center md:text-left">
                © {new Date().getFullYear()} Julio Salim. All rights reserved.
              </p>
              
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <a
                  href="/privacy"
                  className="hover:text-primary transition-colors"
                >
                  Privacy Policy
                </a>
                <span>•</span>
                <a
                  href="/terms"
                  className="hover:text-primary transition-colors"
                >
                  Terms of Service
                </a>
              </div>
            </div>
          </div>

          {/* Made with love */}
          <div className="text-center mt-6">
            <p className="text-xs text-muted-foreground">
              Made with ❤️ using Next.js and Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
} 