import { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface CoffeeCardProps {
  name: string;
  description: string;
  image: string;
  onClick: () => void;
  index: number;
}

const CoffeeCard = ({ name, description, image, onClick, index }: CoffeeCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardRef.current) {
      gsap.from(cardRef.current, {
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top bottom-=100",
          toggleActions: "play none none reverse",
        },
        y: 100,
        opacity: 0,
        duration: 0.8,
        delay: index * 0.1,
        ease: "power3.out",
      });
    }
  }, [index]);

  const handleMouseEnter = () => {
    if (cardRef.current) {
      gsap.to(cardRef.current, {
        y: -10,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  };

  const handleMouseLeave = () => {
    if (cardRef.current) {
      gsap.to(cardRef.current, {
        y: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  };

  return (
    <Card
      ref={cardRef}
      className="cursor-pointer overflow-hidden hover:shadow-2xl transition-shadow border-2 border-border hover:border-primary"
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <CardContent className="p-6 space-y-4">
        <div className="relative w-full h-48 flex items-center justify-center bg-secondary/30 rounded-xl">
          <img
            src={image}
            alt={name}
            className="w-40 h-40 object-contain drop-shadow-xl"
          />
        </div>
        <div className="space-y-2">
          <h3 className="text-2xl font-display font-bold text-foreground">{name}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default CoffeeCard;
