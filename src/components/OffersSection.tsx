import { Flame } from "lucide-react";
import GameCard from "./GameCard";

const OffersSection = () => {
  const hotOffers = [
    {
      id: "1",
      title: "Cyberpunk 2077",
      originalPrice: 199.99,
      currentPrice: 89.99,
      discount: 55,
      rating: 4.2,
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop&crop=face",
      isOnSale: true,
      platform: "PC"
    },
    {
      id: "2", 
      title: "God of War",
      originalPrice: 149.99,
      currentPrice: 74.99,
      discount: 50,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300&fit=crop&crop=face",
      isOnSale: true,
      platform: "PlayStation"
    },
    {
      id: "3",
      title: "Halo Infinite",
      originalPrice: 159.99,
      currentPrice: 79.99,
      discount: 50,
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=400&h=300&fit=crop&crop=face",
      isOnSale: true,
      platform: "Xbox"
    },
    {
      id: "4",
      title: "Elden Ring",
      originalPrice: 179.99,
      currentPrice: 119.99,
      discount: 33,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1556438064-2d7646166914?w=400&h=300&fit=crop&crop=face",
      isOnSale: true,
      platform: "PC"
    }
  ];

  return (
    <section id="ofertas" className="py-16 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-12">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-destructive to-warning rounded-full flex items-center justify-center">
              <Flame className="h-6 w-6 text-primary-foreground" />
            </div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-destructive to-warning bg-clip-text text-transparent">
              Ofertas Imperdíveis
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {hotOffers.map((game) => (
            <GameCard
              key={game.id}
              title={game.title}
              platform={game.platform}
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

export default OffersSection;