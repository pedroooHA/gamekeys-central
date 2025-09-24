import { Button } from "@/components/ui/button";
import { Play, Shield, Zap } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";

const Hero = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img 
          src={heroBanner} 
          alt="Gaming keys marketplace"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-primary via-accent to-gaming-green bg-clip-text text-transparent">
              Keys de Jogos
            </span>
            <br />
            <span className="text-foreground">Com os Melhores Preços</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
            Encontre as melhores ofertas em jogos para PC, PlayStation e Xbox. 
            Entrega instantânea, suporte 24/7 e garantia total.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button size="lg" className="text-lg px-8 py-4">
              <Play className="h-5 w-5 mr-2" />
              Ver Catálogo
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4">
              Ver Ofertas
            </Button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                <Zap className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold">Entrega Instantânea</h3>
                <p className="text-sm text-muted-foreground">Keys na sua email em segundos</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-accent to-gaming-green rounded-full flex items-center justify-center">
                <Shield className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold">100% Seguro</h3>
                <p className="text-sm text-muted-foreground">Garantia total ou dinheiro de volta</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-gaming-green to-gaming-orange rounded-full flex items-center justify-center">
                <Play className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold">Suporte 24/7</h3>
                <p className="text-sm text-muted-foreground">Estamos sempre aqui para ajudar</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;