import { Code2, Smartphone, Database, Settings, Users, Clock, MessageSquare, Palette } from "lucide-react";

const skillCategories = [
  {
    title: "Programming & Development",
    icon: Code2,
    skills: [
      { name: "C# ASP.NET", level: 85 },
      { name: "Flutter & Dart", level: 80 },
      { name: "HTML & CSS", level: 90 },
    ],
  },
  {
    title: "Architecture & Tools",
    icon: Settings,
    skills: [
      { name: "MVVM Architecture", level: 75 },
      { name: "Firebase", level: 80 },
      { name: "SDLC & Agile", level: 85 },
    ],
  },
  {
    title: "Design & Tools",
    icon: Palette,
    skills: [
      { name: "UI/UX Basics", level: 70 },
      { name: "Microsoft 365", level: 90 },
    ],
  },
];

const softSkills = [
  { name: "Teamwork", icon: Users },
  { name: "Time Management", icon: Clock },
  { name: "Communication", icon: MessageSquare },
  { name: "Problem Solving", icon: Code2 },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding bg-muted/20">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-mono text-primary mb-3 tracking-wider">
            // SKILLS & EXPERTISE
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold">
            Technologies I <span className="gradient-text">Work With</span>
          </h3>
        </div>

        {/* Technical Skills */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="glass-card rounded-2xl p-6 hover:border-primary/30 transition-all group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <category.icon className="h-5 w-5" />
                </div>
                <h4 className="font-semibold">{category.title}</h4>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-foreground">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-muted overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-primary to-primary/60 transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills */}
        <div className="text-center mb-8">
          <h4 className="text-xl font-semibold mb-8">Soft Skills</h4>
          <div className="flex flex-wrap justify-center gap-4">
            {softSkills.map((skill) => (
              <div
                key={skill.name}
                className="flex items-center gap-2 px-6 py-3 glass-card rounded-full hover:border-primary/30 hover:bg-primary/5 transition-all"
              >
                <skill.icon className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
