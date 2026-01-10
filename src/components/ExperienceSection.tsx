import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "IT Lab Assistant / Teacher's Assistant",
    company: "Educational Institution",
    location: "Bloemfontein, South Africa",
    period: "2025 – Present",
    description:
      "Supporting students and educators in IT laboratory environments, providing technical assistance and fostering inclusive learning experiences.",
    responsibilities: [
      "Assisted students with special needs in accessing and using IT resources",
      "Supported classroom activities and ensured lab safety protocols",
      "Encouraged problem-solving approaches and collaborative learning",
      "Provided tutoring and academic support to enhance student success",
      "Maintained lab equipment and assisted with technical troubleshooting",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding bg-muted/20">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-mono text-primary mb-3 tracking-wider">
            // WORK EXPERIENCE
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold">
            Professional <span className="gradient-text">Journey</span>
          </h3>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 pb-12 last:pb-0">
              {/* Timeline Line */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-border" />
              
              {/* Timeline Dot */}
              <div className="absolute left-0 top-0 w-2 h-2 -translate-x-[3px] rounded-full bg-primary glow-effect" />

              <div className="glass-card rounded-2xl p-6 md:p-8 hover:border-primary/30 transition-all">
                {/* Header */}
                <div className="flex flex-wrap gap-4 items-start justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold">{exp.title}</h4>
                    <p className="text-primary font-medium">{exp.company}</p>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-4">{exp.description}</p>

                {/* Responsibilities */}
                <ul className="space-y-2">
                  {exp.responsibilities.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
