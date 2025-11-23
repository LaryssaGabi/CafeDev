import { useEffect, useRef } from "react";
import { Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";
import gsap from "gsap";

const Header = () => {
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (headerRef.current) {
      gsap.from(headerRef.current.children, {
        y: -50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      });
    }
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border"
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection("home")}>
          <Coffee className="w-8 h-8 text-primary" />
          <span className="text-2xl font-display font-bold text-primary">Cafeteria Dev</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("home")}
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("servicos")}
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            Serviços
          </button>
          <button
            onClick={() => scrollToSection("sobre")}
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            Sobre
          </button>
          <Button className="bg-primary hover:bg-primary/90">
            <Coffee className="w-4 h-4 mr-2" />
            Fazer Pedido
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
