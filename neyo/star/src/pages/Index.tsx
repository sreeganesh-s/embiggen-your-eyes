import { StarCatalog } from "@/components/StarCatalog";
import { Star, Sparkles } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/80">
      {/* Hero Section */}
      <header className="relative overflow-hidden border-b border-border/50">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-2 h-2 bg-primary rounded-full animate-twinkle" />
          <div className="absolute top-40 right-32 w-1 h-1 bg-accent rounded-full animate-twinkle" style={{ animationDelay: "0.5s" }} />
          <div className="absolute bottom-32 left-1/3 w-1.5 h-1.5 bg-primary-glow rounded-full animate-twinkle" style={{ animationDelay: "1s" }} />
          <div className="absolute top-1/2 right-20 w-1 h-1 bg-accent rounded-full animate-twinkle" style={{ animationDelay: "1.5s" }} />
        </div>
        
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="text-center space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Interactive Celestial Explorer</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-foreground">
              Explore the
              <span className="block bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                Cosmos
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore the brightest stars in our night sky in stunning 3D.
              Rotate, zoom, and learn about the wonders of our universe.
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="space-y-6">
          <div className="text-center space-y-2 mb-8">
            <div className="inline-flex items-center gap-2 mb-4">
              <Star className="w-8 h-8 text-primary animate-twinkle" />
              <h2 className="text-3xl font-bold text-foreground">Notable Stars</h2>
            </div>
            <p className="text-muted-foreground">
              Discover the brightest and most fascinating stars visible from Earth in interactive 3D.
            </p>
          </div>
          <StarCatalog />
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/50 mt-20">
        <div className="container mx-auto px-4 py-8">
          <p className="text-center text-muted-foreground text-sm">
            Explore the wonders of space • Interactive 3D stars • Detailed celestial catalog
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
