import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CoffeeModalProps {
  isOpen: boolean;
  onClose: () => void;
  coffee: {
    name: string;
    description: string;
    image: string;
    ingredients: string[];
    intensity: number;
    price: string;
    preparation: string;
  } | null;
}

const CoffeeModal = ({ isOpen, onClose, coffee }: CoffeeModalProps) => {
  if (!coffee) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-3xl font-display flex items-center gap-2">
            <Coffee className="w-8 h-8 text-primary" />
            {coffee.name}
          </DialogTitle>
          <DialogDescription className="text-lg">
            {coffee.description}
          </DialogDescription>
        </DialogHeader>

        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div className="relative w-full h-64 flex items-center justify-center bg-secondary/30 rounded-xl">
            <img
              src={coffee.image}
              alt={coffee.name}
              className="w-56 h-56 object-contain drop-shadow-2xl"
            />
          </div>

          <div className="space-y-4">
            <div>
              <h4 className="font-bold text-lg mb-2">Ingredientes:</h4>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                {coffee.ingredients.map((ingredient, i) => (
                  <li key={i}>{ingredient}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-2">Intensidade:</h4>
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div
                    key={i}
                    className={`w-8 h-2 rounded-full ${
                      i < coffee.intensity ? "bg-primary" : "bg-secondary"
                    }`}
                  />
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-2">Preparo:</h4>
              <p className="text-muted-foreground">{coffee.preparation}</p>
            </div>

            <div className="pt-4 border-t">
              <p className="text-3xl font-bold text-primary">{coffee.price}</p>
              <Button className="w-full mt-4 bg-primary hover:bg-primary/90">
                Adicionar ao Pedido
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CoffeeModal;
