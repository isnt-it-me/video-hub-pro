const PrototypeSection = () => {
  // Demo URL - replace with actual prototype video
  const videoSrc = "https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4";

  return (
    <section className="py-12 px-6">
      <div className="container mx-auto">
        <h2 className="text-3xl font-display font-bold text-primary mb-3">
          Prototype in Action
        </h2>
        
        <p className="text-foreground/80 mb-8 text-sm max-w-2xl">
          Watch our working 3x3 solenoid prototype sync perfectly with a live table tennis rally.
        </p>

        <div className="max-w-2xl">
          <div className="bg-card rounded-lg aspect-video overflow-hidden">
            <video
              src={videoSrc}
              controls
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrototypeSection;
