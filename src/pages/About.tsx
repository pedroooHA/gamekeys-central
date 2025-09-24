import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Users, Zap, Trophy, Heart, Star } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Users, label: "Clientes Satisfeitos", value: "50.000+" },
    { icon: Trophy, label: "Keys Vendidas", value: "200.000+" },
    { icon: Star, label: "Avaliação Média", value: "4.9/5" },
    { icon: Shield, label: "Anos no Mercado", value: "5+" }
  ];

  const values = [
    {
      icon: Zap,
      title: "Velocidade",
      description: "Entrega instantânea das keys após confirmação do pagamento"
    },
    {
      icon: Shield,
      title: "Segurança",
      description: "Todas as keys são originais e verificadas pelos desenvolvedores"
    },
    {
      icon: Heart,
      title: "Atendimento",
      description: "Suporte humanizado 24/7 para resolver qualquer problema"
    },
    {
      icon: Trophy,
      title: "Qualidade",
      description: "Parcerias diretas com distribuidores oficiais das principais marcas"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-12">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Sobre a GameKeys
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Somos a maior plataforma de venda de keys de jogos digitais do Brasil, 
              conectando gamers aos melhores títulos com preços incríveis e entrega instantânea.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <stat.icon className="h-8 w-8 text-primary mx-auto mb-4" />
                  <div className="text-2xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Our Story */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Nossa História</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Fundada em 2019 por um grupo de gamers apaixonados, a GameKeys nasceu 
                  da necessidade de democratizar o acesso aos melhores jogos digitais no Brasil.
                </p>
                <p>
                  Começamos como uma pequena loja online e hoje somos referência nacional 
                  em venda de keys, com milhares de títulos disponíveis para PC, PlayStation e Xbox.
                </p>
                <p>
                  Nossa missão é simples: proporcionar a melhor experiência de compra de jogos 
                  digitais, com preços justos, entrega instantânea e suporte excepcional.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg p-8 h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
                    2019
                  </div>
                  <p className="text-lg font-semibold">Ano de Fundação</p>
                  <p className="text-muted-foreground">5 anos transformando o gaming no Brasil</p>
                </div>
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Nossos Valores</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="text-center h-full">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                      <value.icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <CardTitle>{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{value.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Team */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Nossa Equipe</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="w-24 h-24 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-12 w-12 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Desenvolvedores</h3>
                  <p className="text-muted-foreground">
                    Equipe técnica especializada em criar a melhor experiência de compra
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="w-24 h-24 bg-gradient-to-r from-accent to-gaming-green rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Heart className="h-12 w-12 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Suporte</h3>
                  <p className="text-muted-foreground">
                    Time dedicado 24/7 para garantir sua satisfação total
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="w-24 h-24 bg-gradient-to-r from-gaming-green to-gaming-orange rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Trophy className="h-12 w-12 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Parcerias</h3>
                  <p className="text-muted-foreground">
                    Relacionamento direto com desenvolvedores e distribuidores oficiais
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Junte-se a Milhares de Gamers</h2>
            <p className="text-xl text-muted-foreground mb-6">
              Descubra por que somos a escolha #1 para compra de games digitais no Brasil
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="bg-card rounded-lg p-4 flex items-center space-x-3">
                <Shield className="h-6 w-6 text-primary" />
                <span className="font-semibold">100% Seguro</span>
              </div>
              <div className="bg-card rounded-lg p-4 flex items-center space-x-3">
                <Zap className="h-6 w-6 text-accent" />
                <span className="font-semibold">Entrega Instantânea</span>
              </div>
              <div className="bg-card rounded-lg p-4 flex items-center space-x-3">
                <Heart className="h-6 w-6 text-gaming-green" />
                <span className="font-semibold">Suporte 24/7</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;