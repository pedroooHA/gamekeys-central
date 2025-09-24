import { ShoppingCart, User, Search, Menu, Gamepad2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Gamepad2 className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              GameKeys
            </span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Início
            </a>
            <a href="#pc" className="text-foreground hover:text-primary transition-colors">
              PC
            </a>
            <a href="#playstation" className="text-foreground hover:text-primary transition-colors">
              PlayStation
            </a>
            <a href="#xbox" className="text-foreground hover:text-primary transition-colors">
              Xbox
            </a>
            <a href="#ofertas" className="text-foreground hover:text-primary transition-colors">
              Ofertas
            </a>
            <a href="/suporte" className="text-foreground hover:text-primary transition-colors">
              Suporte
            </a>
            <a href="/sobre" className="text-foreground hover:text-primary transition-colors">
              Sobre
            </a>
          </nav>

          {/* Search */}
          <div className="hidden md:flex items-center space-x-4 flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Buscar jogos..."
                className="pl-10 bg-secondary border-border"
              />
            </div>
          </div>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
            </Button>
            <Button variant="outline">
              <User className="h-4 w-4 mr-2" />
              Entrar
            </Button>
            <Button variant="default">
              Cadastrar
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;