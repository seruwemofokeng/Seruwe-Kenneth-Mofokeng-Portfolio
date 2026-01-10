import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Mail, Github, Linkedin, Award } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(183_74%_44%/0.1),transparent_50%)]" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />
      
      <div className="container-custom relative z-10 pt-20">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-muted-foreground">Open to Internship Opportunities</span>
          </div>

          {/* Name */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Seruwe Kenneth{" "}
            <span className="gradient-text">Mofokeng</span>
          </h1>

          {/* Title */}
          <p className="text-xl md:text-2xl text-primary font-medium mb-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            IT Graduate | Aspiring Software & Mobile App Developer
          </p>

          {/* Introduction */}
          <p className="text-lg text-muted-foreground max-w-2xl mb-10 leading-relaxed animate-fade-up" style={{ animationDelay: "0.3s" }}>
            A motivated and eager IT graduate passionate about creating innovative solutions. 
            With hands-on experience in software development and a strong foundation in modern technologies, 
            I'm ready to contribute to impactful projects and grow alongside talented teams.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <a href="#projects">
              <Button variant="hero" size="lg">
                View Projects
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
            </a>
            <a href="/cv.pdf" download>
              <Button variant="heroOutline" size="lg">
                Download CV
                <Download className="ml-2 h-4 w-4" />
              </Button>
            </a>
            <a href="#contact">
              <Button variant="secondary" size="lg">
                Contact Me
                <Mail className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 animate-fade-up" style={{ animationDelay: "0.5s" }}>
            <a
              href="https://github.com/seruwemofokeng"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass-card hover:bg-primary/10 hover:border-primary/50 transition-all hover:scale-110"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5 text-muted-foreground hover:text-primary" />
            </a>
            <a
              href="https://linkedin.com/in/seruwe-mofokeng-a576242b5"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass-card hover:bg-primary/10 hover:border-primary/50 transition-all hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary" />
            </a>
            <a
              href="https://www.credly.com/users/seruwe-mofokeng"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass-card hover:bg-primary/10 hover:border-primary/50 transition-all hover:scale-110"
              aria-label="Credly"
            >
              <Award className="h-5 w-5 text-muted-foreground hover:text-primary" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default HeroSection;
