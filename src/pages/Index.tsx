import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Calendar, Clock, Users, Gamepad2 } from "lucide-react";
import heroImage from "@/assets/gaming-hero.jpg";

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
            {/* Main Title */}
            <h1 className="text-5xl md:text-7xl font-bold mb-8 text-foreground">
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
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Feature Icons */}
            <div className="flex flex-wrap justify-center gap-8 text-muted-foreground">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
