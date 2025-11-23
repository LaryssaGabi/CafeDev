import { Coffee, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12 border-t border-primary/20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Coffee className="w-8 h-8" />
              <span className="text-2xl font-display font-bold">Cafeteria Dev</span>
            </div>
            <p className="text-primary-foreground/80">
              O melhor café da cidade, preparado com amor e dedicação para você.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#sobre" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Sobre
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Siga-nos</h3>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-primary-foreground/80">
            Desenvolvido por{" "}
            <a 
              href="#" 
              className="font-bold hover:text-primary-foreground transition-colors"
            >
              @LaryssaDev
            </a>
            {" "}• © 2024 Cafeteria Dev. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
