import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const HeroSection = () => {
  // Demo URLs - replace these with actual URLs
  const heroImageSrc = "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop";

  return (
    <section className="pt-24 pb-12 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left - Image Card */}
          <div className="flex-1">
            <div className="bg-card rounded-lg overflow-hidden aspect-[4/3]">
              <img
                src={heroImageSrc}
                alt="Hero"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right - About Card */}
          <div className="flex-1">
            <div className="bg-card rounded-lg p-8 aspect-[4/3] flex flex-col justify-center">
              <h2 className="text-3xl font-display font-bold text-card-foreground mb-4">
                About
              </h2>
              <p className="text-card-foreground/80 text-sm leading-relaxed">
                An accessibility-focused solution that translates live sports visuals 
                into haptic feedback for the visually impaired, enabling them to 
                experience the rhythm and excitement of the game.
              </p>
            </div>
          </div>
        </div>

        {/* Credits & Source Code */}
        <div className="flex items-center justify-between mt-6">
          <p className="text-foreground font-medium text-sm">
            Jasmine | Dhruv | Ashutosh
          </p>
          <Button
            variant="outline"
            size="sm"
            className="bg-card text-card-foreground border-0 hover:bg-card/90"
          >
            View Source Code
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
