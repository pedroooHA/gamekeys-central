import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, Mail, Phone, Clock, HelpCircle, Shield, Zap } from "lucide-react";

const Support = () => {
  const faqs = [
    {
      question: "Como recebo minha key após a compra?",
      answer: "Após a confirmação do pagamento, você receberá sua key por email instantaneamente. Também ficará disponível na sua conta."
    },
    {
      question: "E se minha key não funcionar?",
      answer: "Oferecemos garantia total. Entre em contato conosco imediatamente e providenciaremos uma nova key ou reembolso."
    },
    {
      question: "Posso reembolsar uma compra?",
      answer: "Sim, dentro de 24 horas da compra, caso a key não tenha sido ativada, oferecemos reembolso completo."
    },
    {
      question: "Como sei se uma key é compatível com minha região?",
      answer: "Todas as keys são claramente marcadas com suas regiões. A maioria é global, mas sempre verifique na descrição."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-12">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Central de Suporte</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Estamos aqui para ajudar! Encontre respostas ou entre em contato conosco.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Methods */}
            <div className="lg:col-span-1 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <MessageCircle className="h-5 w-5 text-primary" />
                    <span>Chat ao Vivo</span>
                  </CardTitle>
                  <CardDescription>
                    Resposta imediata para suas dúvidas
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full">
                    Iniciar Chat
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <span>Email</span>
                  </CardTitle>
                  <CardDescription>
                    suporte@gamekeys.com
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Resposta em até 2 horas
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <span>Telefone</span>
                  </CardTitle>
                  <CardDescription>
                    (11) 9999-9999
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>24/7 disponível</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Envie sua Mensagem</CardTitle>
                  <CardDescription>
                    Descreva seu problema e entraremos em contato rapidamente
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium">Nome</label>
                      <Input placeholder="Seu nome completo" />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Email</label>
                      <Input placeholder="seu@email.com" type="email" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Assunto</label>
                    <Input placeholder="Resumo do seu problema" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Mensagem</label>
                    <Textarea 
                      placeholder="Descreva detalhadamente seu problema ou dúvida..."
                      rows={6}
                    />
                  </div>
                  <Button className="w-full" size="lg">
                    Enviar Mensagem
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-center mb-8">Perguntas Frequentes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {faqs.map((faq, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-start space-x-3">
                      <HelpCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <span>{faq.question}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Guarantees */}
          <div className="mt-16 bg-secondary/50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-center mb-8">Nossas Garantias</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="font-semibold mb-2">Entrega Instantânea</h3>
                <p className="text-muted-foreground">Keys entregues em segundos após confirmação do pagamento</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-accent to-gaming-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="font-semibold mb-2">100% Seguro</h3>
                <p className="text-muted-foreground">Todas as keys são testadas e verificadas antes da venda</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-gaming-green to-gaming-orange rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="font-semibold mb-2">Suporte 24/7</h3>
                <p className="text-muted-foreground">Equipe sempre disponível para ajudar você</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Support;