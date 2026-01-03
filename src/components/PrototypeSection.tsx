import { useState } from "react";
import { Play } from "lucide-react";
import { Input } from "@/components/ui/input";

const PrototypeSection = () => {
  const [videoSrc, setVideoSrc] = useState("");

  return (
    <section className="py-12 px-6">
      <div className="container mx-auto">
        <h2 className="text-3xl font-display font-bold text-primary mb-3">
          Prototype in Action
        </h2>
        
        <p className="text-foreground/80 mb-8 text-sm max-w-2xl">
          Watch our working 3x3 solenoid prototype sync perfectly with a live table tennis rally.
        </p>

        <div className="max-w-2xl space-y-4">
          <div className="bg-card rounded-lg aspect-video flex items-center justify-center overflow-hidden">
            {videoSrc ? (
              <video
                src={videoSrc}
                controls
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="flex flex-col items-center gap-3">
                <Play className="h-10 w-10 text-card-foreground/60" />
                <span className="text-card-foreground/60 text-sm">Video/Image</span>
              </div>
            )}
          </div>
          
          <Input
            placeholder="Enter video/image URL..."
            value={videoSrc}
            onChange={(e) => setVideoSrc(e.target.value)}
            className="bg-muted border-border text-sm"
          />
        </div>
      </div>
    </section>
  );
};

export default PrototypeSection;
