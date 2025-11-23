import { useState, useEffect, useRef } from "react";
import CoffeeCard from "./CoffeeCard";
import CoffeeModal from "./CoffeeModal";
import americanoImg from "@/assets/americano.png";
import espressoImg from "@/assets/espresso.png";
import cappuccinoImg from "@/assets/cappuccino.png";
import latteImg from "@/assets/latte.png";
import mochaImg from "@/assets/mocha.png";
import macchiatoImg from "@/assets/macchiato.png";
import flatwhiteImg from "@/assets/flatwhite.png";
import affogatoImg from "@/assets/affogato.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Coffee {
  name: string;
  description: string;
  image: string;
  ingredients: string[];
  intensity: number;
  price: string;
  preparation: string;
}

const coffees: Coffee[] = [
  {
    name: "Americano",
    description: "Um café tradicional, feito com o melhor café do mundo.",
    image: americanoImg,
    ingredients: ["Espresso duplo", "Água quente"],
    intensity: 3,
    price: "R$ 8,00",
    preparation: "Espresso extraído com água quente adicionada para um sabor suave.",
  },
  {
    name: "Espresso",
    description: "Um café forte e intenso, feito com o melhor café do mundo.",
    image: espressoImg,
    ingredients: ["Grãos 100% arábica", "Extração sob pressão"],
    intensity: 5,
    price: "R$ 6,00",
    preparation: "Café concentrado extraído sob alta pressão, revelando notas complexas.",
  },
  {
    name: "Cappuccino",
    description: "Equilibrado e cremoso, com espuma aveludada perfeita.",
    image: cappuccinoImg,
    ingredients: ["Espresso", "Leite vaporizado", "Espuma de leite"],
    intensity: 2,
    price: "R$ 10,00",
    preparation: "Espresso coberto com leite vaporizado e espuma cremosa.",
  },
  {
    name: "Latte",
    description: "Suave e cremoso, com muito leite e toque de café.",
    image: latteImg,
    ingredients: ["Espresso", "Leite vaporizado", "Camada fina de espuma"],
    intensity: 2,
    price: "R$ 11,00",
    preparation: "Espresso misturado com leite vaporizado em camadas elegantes.",
  },
  {
    name: "Mocha",
    description: "Café com chocolate, chantilly e amor.",
    image: mochaImg,
    ingredients: ["Espresso", "Chocolate", "Leite", "Chantilly"],
    intensity: 3,
    price: "R$ 14,00",
    preparation: "Espresso misturado com chocolate, coberto com chantilly e calda.",
  },
  {
    name: "Macchiato",
    description: "Espresso manchado com espuma de leite delicada.",
    image: macchiatoImg,
    ingredients: ["Espresso", "Toque de espuma de leite"],
    intensity: 4,
    price: "R$ 7,50",
    preparation: "Espresso com uma pequena quantidade de espuma de leite no topo.",
  },
  {
    name: "Flat White",
    description: "Café australiano com microespuma aveludada.",
    image: flatwhiteImg,
    ingredients: ["Ristretto duplo", "Microespuma de leite"],
    intensity: 3,
    price: "R$ 12,00",
    preparation: "Ristretto coberto com microespuma aveludada e cremosa.",
  },
  {
    name: "Affogato",
    description: "Sobremesa italiana: sorvete afogado em espresso.",
    image: affogatoImg,
    ingredients: ["Espresso quente", "Sorvete de baunilha"],
    intensity: 4,
    price: "R$ 15,00",
    preparation: "Sorvete de baunilha coberto com espresso quente extraído na hora.",
  },
];

const Services = () => {
  const [selectedCoffee, setSelectedCoffee] = useState<Coffee | null>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (titleRef.current) {
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top bottom-=100",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
      });
    }
  }, []);

  return (
    <section id="servicos" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <h2
          ref={titleRef}
          className="text-4xl lg:text-5xl font-display font-bold text-center mb-4"
        >
          O café feito para você
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg max-w-2xl mx-auto">
          Descubra nossa seleção premium de cafés artesanais, cada um com sua própria história e sabor único.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coffees.map((coffee, index) => (
            <CoffeeCard
              key={coffee.name}
              {...coffee}
              onClick={() => setSelectedCoffee(coffee)}
              index={index}
            />
          ))}
        </div>
      </div>

      <CoffeeModal
        isOpen={!!selectedCoffee}
        onClose={() => setSelectedCoffee(null)}
        coffee={selectedCoffee}
      />
    </section>
  );
};

export default Services;
