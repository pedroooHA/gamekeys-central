// Update this page (the content is just a fallback if you fail to update the page)

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PlatformSection from "@/components/PlatformSection";
import OffersSection from "@/components/OffersSection";
import Footer from "@/components/Footer";
import { Monitor, Gamepad2 } from "lucide-react";

const Index = () => {
  // Mock data for games
  const pcGames = [
    {
      id: "1",
      title: "Cyberpunk 2077",
      originalPrice: 199.99,
      currentPrice: 149.99,
      discount: 25,
      rating: 4.2,
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop&crop=face",
      isOnSale: true
    },
    {
      id: "2",
      title: "Red Dead Redemption 2",
      originalPrice: 179.99,
      currentPrice: 179.99,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300&fit=crop&crop=face"
    },
    {
      id: "3",
      title: "The Witcher 3",
      originalPrice: 89.99,
      currentPrice: 59.99,
      discount: 33,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1556438064-2d7646166914?w=400&h=300&fit=crop&crop=face",
      isOnSale: true
    },
    {
      id: "4",
      title: "Grand Theft Auto V",
      originalPrice: 119.99,
      currentPrice: 119.99,
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=400&h=300&fit=crop&crop=face"
    }
  ];

  const playstationGames = [
    {
      id: "5",
      title: "God of War",
      originalPrice: 149.99,
      currentPrice: 99.99,
      discount: 33,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300&fit=crop&crop=face",
      isOnSale: true
    },
    {
      id: "6",
      title: "The Last of Us Part II",
      originalPrice: 179.99,
      currentPrice: 179.99,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop&crop=face"
    },
    {
      id: "7",
      title: "Spider-Man: Miles Morales",
      originalPrice: 139.99,
      currentPrice: 89.99,
      discount: 36,
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1556438064-2d7646166914?w=400&h=300&fit=crop&crop=face",
      isOnSale: true
    },
    {
      id: "8",
      title: "Horizon Zero Dawn",
      originalPrice: 129.99,
      currentPrice: 129.99,
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=400&h=300&fit=crop&crop=face"
    }
  ];

  const xboxGames = [
    {
      id: "9",
      title: "Halo Infinite",
      originalPrice: 159.99,
      currentPrice: 109.99,
      discount: 31,
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=400&h=300&fit=crop&crop=face",
      isOnSale: true
    },
    {
      id: "10",
      title: "Forza Horizon 5",
      originalPrice: 179.99,
      currentPrice: 179.99,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop&crop=face"
    },
    {
      id: "11",
      title: "Gears 5",
      originalPrice: 119.99,
      currentPrice: 79.99,
      discount: 33,
      rating: 4.3,
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300&fit=crop&crop=face",
      isOnSale: true
    },
    {
      id: "12",
      title: "Microsoft Flight Simulator",
      originalPrice: 189.99,
      currentPrice: 189.99,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1556438064-2d7646166914?w=400&h=300&fit=crop&crop=face"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <OffersSection />
      
      <PlatformSection 
        platform="PC" 
        icon={<Monitor className="h-8 w-8 text-gaming-blue" />}
        games={pcGames}
      />
      
      <PlatformSection 
        platform="PlayStation" 
        icon={<Gamepad2 className="h-8 w-8 text-gaming-purple" />}
        games={playstationGames}
      />
      
      <PlatformSection 
        platform="Xbox" 
        icon={<Gamepad2 className="h-8 w-8 text-gaming-green" />}
        games={xboxGames}
      />
      
      <Footer />
    </div>
  );
};

export default Index;
