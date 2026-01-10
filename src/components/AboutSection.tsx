import { MapPin, Mail, Phone } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-sm font-mono text-primary mb-3 tracking-wider">
              // ABOUT ME
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Passionate About Building{" "}
              <span className="gradient-text">Digital Solutions</span>
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I am a dedicated IT graduate from the Central University of Technology with a 
                Diploma in Information Technology. My journey in tech has been driven by curiosity 
                and a genuine desire to solve real-world problems through innovative software solutions.
              </p>
              <p>
                Through my Work-Integrated Learning experience, I've gained hands-on exposure to 
                the software development lifecycle, collaborative agile environments, and the 
                importance of user-centered design. I thrive in team settings and value clear 
                communication as the foundation of successful projects.
              </p>
              <p>
                I'm actively seeking internship opportunities where I can contribute my skills 
                in C# ASP.NET, Flutter, and web development while continuing to grow as a 
                professional developer. I'm excited about the opportunity to work on meaningful 
                projects and learn from experienced mentors.
              </p>
            </div>
          </div>

          {/* Right Content - Info Cards */}
          <div className="space-y-4">
            <div className="glass-card rounded-xl p-6 hover:border-primary/30 transition-all group">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Location</h4>
                  <p className="text-muted-foreground">Bethlehem, South Africa</p>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-xl p-6 hover:border-primary/30 transition-all group">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <a
                    href="mailto:mofokengseruwe799@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    mofokengseruwe799@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-xl p-6 hover:border-primary/30 transition-all group">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Phone</h4>
                  <a
                    href="tel:+27677566434"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    067 756 6434
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="glass-card rounded-xl p-4 text-center">
                <div className="text-2xl font-bold gradient-text">5+</div>
                <div className="text-xs text-muted-foreground mt-1">Certifications</div>
              </div>
              <div className="glass-card rounded-xl p-4 text-center">
                <div className="text-2xl font-bold gradient-text">3</div>
                <div className="text-xs text-muted-foreground mt-1">Years Study</div>
              </div>
              <div className="glass-card rounded-xl p-4 text-center">
                <div className="text-2xl font-bold gradient-text">2</div>
                <div className="text-xs text-muted-foreground mt-1">Languages</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
