import { ShoppingCart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface GameCardProps {
  title: string;
  platform: string;
  originalPrice: number;
  currentPrice: number;
  discount?: number;
  rating: number;
  image: string;
  isOnSale?: boolean;
}

const GameCard = ({ 
  title, 
  platform, 
  originalPrice, 
  currentPrice, 
  discount, 
  rating, 
  image, 
  isOnSale 
}: GameCardProps) => {
  const platformColors = {
    PC: "bg-gaming-blue",
    PlayStation: "bg-gaming-purple", 
    Xbox: "bg-gaming-green"
  };

  return (
    <div className="group relative bg-card rounded-lg overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1">
      {/* Discount Badge */}
      {isOnSale && discount && (
        <div className="absolute top-3 left-3 z-10">
          <Badge className="bg-destructive text-destructive-foreground font-bold">
            -{discount}%
          </Badge>
        </div>
      )}

      {/* Image */}
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Platform Badge */}
        <div className="absolute bottom-3 left-3">
          <Badge className={`${platformColors[platform as keyof typeof platformColors]} text-primary-foreground`}>
            {platform}
          </Badge>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        {/* Rating */}
        <div className="flex items-center mb-3">
          <Star className="h-4 w-4 text-warning fill-current" />
          <span className="ml-1 text-sm text-muted-foreground">{rating}</span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            {isOnSale && (
              <span className="text-sm text-muted-foreground line-through">
                R$ {originalPrice.toFixed(2)}
              </span>
            )}
            <span className="text-xl font-bold text-primary">
              R$ {currentPrice.toFixed(2)}
            </span>
          </div>
        </div>

        {/* Add to Cart Button */}
        <Button className="w-full" size="sm">
          <ShoppingCart className="h-4 w-4 mr-2" />
          Comprar
        </Button>
      </div>
    </div>
  );
};

export default GameCard;