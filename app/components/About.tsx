export function About() {
  return (
    <section id="about" className="py-20 bg-accent/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              About Me
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm a passionate developer who loves turning ideas into reality through code
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Photo placeholder */}
            <div className="relative">
              <div className="w-80 h-80 mx-auto lg:mx-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-primary/30 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-12 h-12 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                  </div>
                  <p className="text-muted-foreground">Photo coming soon</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Who I Am
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  I'm a full-stack developer with a passion for creating intuitive and efficient web applications. 
                  With expertise in modern web technologies, I focus on building scalable solutions that provide 
                  exceptional user experiences.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  What I Do
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  I specialize in React, Next.js, and modern web development practices. From concept to deployment, 
                  I handle every aspect of the development process, ensuring clean, maintainable code and 
                  optimal performance.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  My Approach
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  I believe in writing clean, well-documented code and staying up-to-date with the latest 
                  industry trends. Every project is an opportunity to learn and grow, and I'm always 
                  excited to tackle new challenges.
                </p>
              </div>

              {/* Quick facts */}
              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="text-center p-4 bg-background rounded-lg border border-border">
                  <div className="text-2xl font-bold text-primary">3+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-background rounded-lg border border-border">
                  <div className="text-2xl font-bold text-primary">20+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 