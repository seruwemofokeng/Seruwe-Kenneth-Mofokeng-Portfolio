import { GraduationCap, Award, Calendar, ExternalLink } from "lucide-react";

const education = [
  {
    degree: "Advanced Diploma in Information Technology",
    institution: "Central University of Technology",
    period: "In progress",
    description:
      "Currently studying towards the Advanced Diploma in Information Technology, building further specialisation on top of the National Diploma.",
  },
  {
    degree: "Diploma in Information Technology",
    institution: "Central University of Technology",
    period: "2022 – 2025",
    description:
      "Comprehensive program covering software development, database management, networking, and IT fundamentals with practical Work-Integrated Learning experience.",
  },
  {
    degree: "Grade 12 (National Senior Certificate)",
    institution: "Sekgotlong High School",
    period: "2021",
    description: "Completed Grade 12 (Matric).",
  },
];

const certifications = [
  {
    name: "Introduction to Cybersecurity",
    issuer: "Cisco",
    icon: "🔐",
  },
  {
    name: "IT Essentials – PC Hardware & Software",
    issuer: "Cisco",
    icon: "💻",
  },
  {
    name: "Operating Systems Basics",
    issuer: "Cisco",
    icon: "⚙️",
  },
  {
    name: "Digital Awareness",
    issuer: "Cisco",
    icon: "🌐",
  },
  {
    name: "Using Computer and Mobile Devices",
    issuer: "Cisco",
    icon: "📱",
  },
];

const languages = [
  { name: "English", level: "Good", flag: "🇬🇧" },
  { name: "Sesotho", level: "Good", flag: "🇱🇸" },
  { name: "Setswana", level: "Good", flag: "🇧🇼" },
  { name: "isiZulu", level: "Fair", flag: "🇿🇦" },
  { name: "Afrikaans", level: "Fair", flag: "🇳🇱" },
];

const EducationSection = () => {
  return (
    <section id="education" className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-mono text-primary mb-3 tracking-wider">
            // EDUCATION & CERTIFICATIONS
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold">
            Academic <span className="gradient-text">Background</span>
          </h3>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10 text-primary">
                <GraduationCap className="h-5 w-5" />
              </div>
              <h4 className="text-xl font-bold">Education</h4>
            </div>

            <div className="space-y-4">
              {education.map((edu) => (
                <div
                  key={edu.degree}
                  className="glass-card rounded-2xl p-6 hover:border-primary/30 transition-all"
                >
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <h5 className="text-lg font-semibold">{edu.degree}</h5>
                      <p className="text-primary">{edu.institution}</p>
                    </div>
                    <span className="flex items-center gap-1 text-sm text-muted-foreground whitespace-nowrap">
                      <Calendar className="h-4 w-4" />
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm">{edu.description}</p>
                </div>
              ))}
            </div>

            {/* Languages */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4">Languages</h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {languages.map((lang) => (
                  <div
                    key={lang.name}
                    className="glass-card rounded-xl px-4 py-3 flex items-center gap-3 hover:border-primary/30 transition-all"
                  >
                    <span className="text-2xl">{lang.flag}</span>
                    <div className="min-w-0">
                      <p className="font-medium truncate">{lang.name}</p>
                      <p className="text-xs text-muted-foreground">{lang.level}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-primary/10 text-primary">
                  <Award className="h-5 w-5" />
                </div>
                <h4 className="text-xl font-bold">Certifications</h4>
              </div>
              <a
                href="https://www.credly.com/users/seruwe-mofokeng"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm text-primary hover:underline"
              >
                View on Credly
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>

            <div className="space-y-3">
              {certifications.map((cert, index) => (
                <div
                  key={cert.name}
                  className="glass-card rounded-xl p-4 flex items-center gap-4 hover:border-primary/30 transition-all group"
                >
                  <span className="text-2xl">{cert.icon}</span>
                  <div className="flex-1 min-w-0">
                    <h5 className="font-medium truncate group-hover:text-primary transition-colors">
                      {cert.name}
                    </h5>
                    <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
