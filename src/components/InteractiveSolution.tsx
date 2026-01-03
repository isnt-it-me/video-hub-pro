import { useState, useRef, useCallback } from "react";
import { Upload, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const InteractiveSolution = () => {
  const [uploadedVideo, setUploadedVideo] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Demo URL - replace with actual CV tracked result video
  const resultVideoSrc = "https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4";

  const handleFileChange = (file: File | null) => {
    if (file && file.type.startsWith("video/")) {
      const url = URL.createObjectURL(file);
      setUploadedVideo(url);
    }
  };

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    handleFileChange(file);
  }, []);

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <section className="py-12 px-6">
      <div className="container mx-auto">
        <h2 className="text-3xl font-display font-bold text-primary mb-3">
          Interactive Solution
        </h2>
        
        <p className="text-foreground/80 mb-8 max-w-2xl text-sm">
          Experience how our Computer Vision model translates raw video footage into real-time tracking data.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left - Upload Section */}
          <div className="space-y-4">
            <div
              className={`bg-card rounded-lg aspect-video flex flex-col items-center justify-center cursor-pointer transition-all duration-200 overflow-hidden ${
                isDragging ? "ring-2 ring-secondary ring-offset-2 ring-offset-background" : ""
              }`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={handleUploadClick}
            >
              {uploadedVideo ? (
                <video
                  src={uploadedVideo}
                  controls
                  className="w-full h-full object-cover"
                  onClick={(e) => e.stopPropagation()}
                />
              ) : (
                <div className="flex flex-col items-center gap-4 p-8">
                  <Upload className="h-10 w-10 text-card-foreground/60" />
                  <span className="text-card-foreground text-lg font-medium">Upload</span>
                  <p className="text-card-foreground/60 text-sm text-center">
                    Drag & drop video here
                  </p>
                </div>
              )}
            </div>
            
            <input
              ref={fileInputRef}
              type="file"
              accept="video/*"
              className="hidden"
              onChange={(e) => handleFileChange(e.target.files?.[0] || null)}
            />
            
            <Button
              onClick={handleUploadClick}
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Upload className="mr-2 h-4 w-4" />
              Upload Video
            </Button>
            
            <p className="text-center text-foreground/70 text-sm">Raw Footage Upload</p>
          </div>

          {/* Right - Result Section */}
          <div className="space-y-4">
            <div className="bg-card rounded-lg aspect-video flex items-center justify-center overflow-hidden">
              <video
                src={resultVideoSrc}
                controls
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="h-10" /> {/* Spacer to match left side */}
            
            <p className="text-center text-foreground/70 text-sm">CV Tracked Result</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveSolution;
