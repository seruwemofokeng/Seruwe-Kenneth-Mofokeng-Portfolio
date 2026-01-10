import { ExternalLink, Github, Layout, Database, Shield, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Leave Management System",
    role: "UI/UX Designer & Developer",
    description:
      "A comprehensive leave management system built with modern web technologies. Features include user authentication, intuitive dashboards, detailed reporting, and data visualization.",
    technologies: ["HTML", "CSS", "C# ASP.NET", "Firebase", "MVVM"],
    features: [
      { icon: Shield, label: "Authentication" },
      { icon: Layout, label: "Dashboards" },
      { icon: BarChart3, label: "Reporting" },
      { icon: Database, label: "Data Visualization" },
    ],
    highlights: [
      "Designed and implemented responsive frontend using HTML & CSS",
      "Integrated with C# ASP.NET backend and Firebase",
      "Applied MVVM architecture for clean code separation",
      "Collaborated using Agile methodology",
    ],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-mono text-primary mb-3 tracking-wider">
            // FEATURED PROJECTS
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold">
            What I've <span className="gradient-text">Built</span>
          </h3>
        </div>

        {/* Projects */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="glass-card rounded-2xl overflow-hidden hover:border-primary/30 transition-all"
            >
              <div className="grid lg:grid-cols-5 gap-6 p-6 md:p-8">
                {/* Left - Main Content */}
                <div className="lg:col-span-3 space-y-6">
                  <div>
                    <span className="text-xs font-mono text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {project.role}
                    </span>
                    <h4 className="text-2xl font-bold mt-4 mb-3">{project.title}</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm bg-muted rounded-lg text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right - Features */}
                <div className="lg:col-span-2">
                  <div className="grid grid-cols-2 gap-4">
                    {project.features.map((feature) => (
                      <div
                        key={feature.label}
                        className="p-4 bg-muted/50 rounded-xl text-center hover:bg-primary/10 transition-colors group"
                      >
                        <feature.icon className="h-6 w-6 mx-auto mb-2 text-muted-foreground group-hover:text-primary transition-colors" />
                        <span className="text-sm font-medium">{feature.label}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-3 mt-6">
                    <Button variant="hero" className="flex-1" disabled>
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button variant="heroOutline" size="icon" disabled>
                      <Github className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground text-center mt-2">
                    Project available upon request
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More Projects CTA */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/seruwemofokeng"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="heroOutline" size="lg">
              <Github className="h-4 w-4 mr-2" />
              View More on GitHub
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
