import { Monitor, Gamepad2 } from "lucide-react";
import GameCard from "./GameCard";

interface PlatformSectionProps {
  platform: string;
  icon: React.ReactNode;
  games: Array<{
    id: string;
    title: string;
    originalPrice: number;
    currentPrice: number;
    discount?: number;
    rating: number;
    image: string;
    isOnSale?: boolean;
  }>;
}

const PlatformSection = ({ platform, icon, games }: PlatformSectionProps) => {
  return (
    <section id={platform.toLowerCase()} className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-8">
          <div className="flex items-center space-x-3">
            {icon}
            <h2 className="text-3xl font-bold">{platform}</h2>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {games.map((game) => (
            <GameCard
              key={game.id}
              title={game.title}
              platform={platform}
              originalPrice={game.originalPrice}
              currentPrice={game.currentPrice}
              discount={game.discount}
              rating={game.rating}
              image={game.image}
              isOnSale={game.isOnSale}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformSection;