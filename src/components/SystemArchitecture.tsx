const architectureSteps = [
  {
    title: "Live Feed",
    description: "Tracks ball position using OpenCV.",
  },
  {
    title: "ESP32 MCU",
    description: "Processes data & executes logic.",
  },
  {
    title: "Event Recognition",
    description: "Differentiates bounce vs hit.",
  },
  {
    title: "Haptic Board",
    description: "Triggers 3x3 solenoid array.",
  },
  {
    title: "Tactile Sensation",
    description: "User feels the game's rhythm.",
  },
];

const SystemArchitecture = () => {
  return (
    <section className="py-12 px-6">
      <div className="container mx-auto">
        <h2 className="text-3xl font-display font-bold text-primary mb-3">
          System Architecture
        </h2>
        
        <p className="text-foreground/80 mb-8 text-sm">
          From pixels to physical sensation: The low-latency pipeline.
        </p>

        <div className="flex flex-wrap gap-4">
          {architectureSteps.map((step, index) => (
            <div
              key={index}
              className="bg-card rounded-lg p-5 min-w-[180px] flex-1 max-w-[220px] animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="text-card-foreground font-semibold text-sm mb-2">
                {step.title}
              </h3>
              <p className="text-card-foreground/70 text-xs leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SystemArchitecture;
