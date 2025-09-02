import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Calendar, Clock, Users, Gamepad2 } from "lucide-react";
import heroImage from "@/assets/gaming-hero.jpg";
import bannerImage from "@/assets/banner-sm.jpg";
import logoImage from "@/assets/SLS-Logo.png";
import progenoLogo from "@/assets/progeno_logo.svg";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-warm">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-hero opacity-10" />
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            
            {/* Banner Image */}
            <div className="flex justify-center mb-8">
              <img 
                src={bannerImage} 
                alt="StadtLandSpielt Banner mit Terminen" 
                className="max-w-full h-auto rounded-lg shadow-playful"
              />
            </div>
            
            {/* Main Title */}
            <h1 className="text-4xl md:text-6xl font-bold mb-8 text-foreground">
              <span className="text-game-blue">Stadt</span>
              <span className="text-game-green">Land</span>
              <span className="text-game-orange">Spielt</span>
              <span className="text-muted-foreground">-Freiham</span>
            </h1>
            
            {/* Description */}
            <p className="text-xl md:text-2xl text-foreground mb-12 leading-relaxed max-w-3xl mx-auto">
              Offener Spielenachmittag für alle. Kommt vorbei. Bringt eure eigenen Spiele mit oder schnappt euch ein Leihspiel vor Ort. Spieleerklärung vor Ort möglich.
            </p>
            
            {/* Event Cards */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {/* Date Card */}
              <Card className="bg-card/80 backdrop-blur-sm shadow-warm border-2 border-game-blue/20">
                <CardContent className="p-8">
                  <div className="flex items-center justify-center mb-4">
                    <Calendar className="h-8 w-8 text-game-blue mr-3" />
                    <h3 className="text-2xl font-bold text-game-blue">Termine</h3>
                  </div>
                  <div className="space-y-3 text-lg">
                    <div className="flex items-center justify-center">
                      <span className="font-semibold text-foreground">20.09.2025</span>
                    </div>
                    <div className="flex items-center justify-center text-muted-foreground">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>14:00 - 20:00 Uhr</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <span className="font-semibold text-foreground">21.09.2025</span>
                    </div>
                    <div className="flex items-center justify-center text-muted-foreground">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>14:00 - 20:00 Uhr</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Location Card */}
              <Card className="bg-card/80 backdrop-blur-sm shadow-warm border-2 border-game-green/20">
                <CardContent className="p-8">
                  <div className="flex items-center justify-center mb-4">
                    <MapPin className="h-8 w-8 text-game-green mr-3" />
                    <h3 className="text-2xl font-bold text-game-green">Ort</h3>
                  </div>
                  <div className="text-lg text-center">
                    <p className="font-semibold text-foreground mb-2">
                      Gustl-Bayrhammer-Straße 1
                    </p>
                    <p className="text-muted-foreground">
                      81248 München-Freiham
                    </p>
                    <br />
                    <div className="mt-4">
                      <a 
                        href="https://maps.app.goo.gl/7EnwrN6NvC3Lo5hK7" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-game-green text-white font-semibold rounded-lg hover:bg-game-green/90 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105"
                      >
                        <MapPin className="h-5 w-5" />
                        In Google Maps öffnen
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Feature Icons */}
            <div className="flex flex-wrap justify-center gap-8 text-muted-foreground mb-16">
              <div className="flex items-center gap-2">
                <Users className="h-6 w-6 text-game-blue" />
                <span className="text-lg">Für alle</span>
              </div>
              <div className="flex items-center gap-2">
                <Gamepad2 className="h-6 w-6 text-game-green" />
                <span className="text-lg">Eigene Spiele</span>
              </div>
              <div className="flex items-center gap-2">
                <Gamepad2 className="h-6 w-6 text-game-orange" />
                <span className="text-lg">Leihspiele</span>
              </div>
            </div>

            {/* Sponsors Section */}
            <div className="text-center mb-16 bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-700 mb-6">
                Mit freundlicher Unterstützung der
              </h3>
              <div className="flex justify-center items-center">
                <img 
                  src={progenoLogo} 
                  alt="Progeno Wohnungsgenossenschaft eG Logo" 
                  className="h-16 md:h-20 opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto px-4 text-center">
          <h4 className="text-xl font-semibold mb-6 text-gray-300">Impressum</h4>
          <div className="space-y-2 text-sm md:text-base">
            <p><strong>Veranstalter:</strong> Alexander Troppmann</p>
            <p><strong>Kontakt für Fragen:</strong> <a href="tel:01752280570" className="hover:text-gray-300 transition-colors">01752280570</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
