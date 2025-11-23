import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Coffee } from "lucide-react";
import heroImage from "@/assets/hero-coffee.jpg";
import gsap from "gsap";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (heroRef.current) {
      const tl = gsap.timeline();
      
      tl.from(".hero-title", {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      })
      .from(".hero-subtitle", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      }, "-=0.8")
      .from(".hero-button", {
        scale: 0,
        opacity: 0,
        duration: 0.8,
        ease: "back.out(1.7)",
      }, "-=0.5")
      .from(".hero-image", {
        scale: 0.8,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      }, "-=1.2");
    }
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div ref={heroRef} className="space-y-8">
            <h1 className="hero-title text-5xl lg:text-7xl font-display font-bold leading-tight">
              Nós servimos o{" "}
              <span className="text-primary">Café</span>{" "}
              mais rico da cidade
            </h1>
            <p className="hero-subtitle text-xl text-muted-foreground max-w-lg">
              Cada xícara é preparada com amor e os melhores grãos selecionados do mundo. 
              Experimente a perfeição em cada gole.
            </p>
            <Button 
              onClick={() => scrollToSection("servicos")}
              size="lg" 
              className="hero-button bg-primary hover:bg-primary/90 text-lg px-8 py-6"
            >
              <Coffee className="w-5 h-5 mr-2" />
              Café e Código
            </Button>
          </div>

          <div className="hero-image relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={heroImage} 
                alt="Café artesanal" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground p-6 rounded-xl shadow-xl">
              <p className="text-3xl font-bold">100%</p>
              <p className="text-sm">Premium</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
