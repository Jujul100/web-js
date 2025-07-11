export function Skills() {
  const skills = [
    {
      category: "Frontend",
      items: [
        { name: "React", level: 90, icon: "⚛️" },
        { name: "Next.js", level: 85, icon: "▲" },
        { name: "TypeScript", level: 80, icon: "📘" },
        { name: "Tailwind CSS", level: 85, icon: "🎨" },
        { name: "HTML/CSS", level: 90, icon: "🌐" },
      ]
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js", level: 75, icon: "🟢" },
        { name: "Express", level: 70, icon: "🚂" },
        { name: "PostgreSQL", level: 65, icon: "🐘" },
        { name: "MongoDB", level: 60, icon: "🍃" },
        { name: "REST APIs", level: 80, icon: "🔌" },
      ]
    },
    {
      category: "Tools & Others",
      items: [
        { name: "Git", level: 85, icon: "📝" },
        { name: "Docker", level: 60, icon: "🐳" },
        { name: "AWS", level: 55, icon: "☁️" },
        { name: "Figma", level: 70, icon: "🎯" },
        { name: "Agile", level: 80, icon: "🔄" },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Skills & Technologies
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Here are the technologies and tools I work with
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((category, categoryIndex) => (
              <div key={categoryIndex} className="space-y-6">
                <h3 className="text-xl font-semibold text-foreground text-center">
                  {category.category}
                </h3>
                <div className="space-y-4">
                  {category.items.map((skill, skillIndex) => (
                    <div key={skillIndex} className="bg-accent/50 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <span className="text-lg">{skill.icon}</span>
                          <span className="font-medium text-foreground">{skill.name}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-background rounded-full h-2">
                        <div
                          className="bg-primary h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional skills */}
          <div className="mt-16 text-center">
            <h3 className="text-xl font-semibold text-foreground mb-6">
              Also familiar with
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Python", "Java", "GraphQL", "Redis", "Kubernetes", 
                "Jenkins", "Jest", "Cypress", "Storybook", "Webpack"
              ].map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 