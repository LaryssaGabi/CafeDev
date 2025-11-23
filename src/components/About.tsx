import { useEffect, useRef } from "react";
import { Coffee, Heart, Award } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      const cards = sectionRef.current.querySelectorAll(".about-card");
      
      gsap.from(cards, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center+=100",
          toggleActions: "play none none reverse",
        },
        y: 80,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      });
    }
  }, []);

  return (
    <section id="sobre" ref={sectionRef} className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6">
            Sobre Nós
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Somos apaixonados por café e tecnologia. Nossa cafeteria nasceu do amor 
            por criar experiências únicas, onde cada xícara conta uma história e cada 
            cliente se torna parte da nossa família.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="about-card bg-card p-8 rounded-xl border-2 border-border hover:border-primary transition-colors">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Coffee className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-display font-bold mb-4 text-center">
              Qualidade Premium
            </h3>
            <p className="text-muted-foreground text-center">
              Selecionamos os melhores grãos do mundo, trabalhando diretamente 
              com produtores que compartilham nossa paixão por excelência.
            </p>
          </div>

          <div className="about-card bg-card p-8 rounded-xl border-2 border-border hover:border-primary transition-colors">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Heart className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-2xl font-display font-bold mb-4 text-center">
              Feito com Amor
            </h3>
            <p className="text-muted-foreground text-center">
              Cada café é preparado por baristas experientes que colocam 
              amor e dedicação em cada xícara servida.
            </p>
          </div>

          <div className="about-card bg-card p-8 rounded-xl border-2 border-border hover:border-primary transition-colors">
            <div className="w-16 h-16 bg-coffee-medium/10 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Award className="w-8 h-8 text-coffee-medium" />
            </div>
            <h3 className="text-2xl font-display font-bold mb-4 text-center">
              Premiado
            </h3>
            <p className="text-muted-foreground text-center">
              Reconhecidos nacionalmente pela qualidade dos nossos cafés 
              e pelo atendimento excepcional aos nossos clientes.
            </p>
          </div>
        </div>

        <div className="mt-16 max-w-3xl mx-auto bg-gradient-to-r from-primary/5 to-accent/5 p-8 rounded-xl border border-primary/20">
          <p className="text-center text-lg text-muted-foreground leading-relaxed">
            <span className="font-display font-bold text-2xl text-primary block mb-4">
              Nossa Missão
            </span>
            Criar momentos especiais através do café, combinando tradição e inovação 
            para oferecer experiências inesquecíveis. Acreditamos que cada xícara 
            é uma oportunidade de alegrar o dia de alguém.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
