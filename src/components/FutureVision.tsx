const visionPoints = [
  {
    title: "The Multiplier Effect :",
    description:
      "Platform scales beyond Table Tennis to Cricket, Badminton, and Football using event-driven haptics.",
  },
  {
    title: "AI-Enhanced Experience :",
    description:
      "Future iterations use ML to analyze shot intention (spin, speed) for nuanced emotional feedback.",
  },
  {
    title: "Sustainable Design :",
    description:
      "Affordable (ESP32), durable materials, and modular repairable parts.",
  },
];

const FutureVision = () => {
  return (
    <section className="py-12 px-6 pb-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-display font-bold text-primary mb-8">
          Scaling Impact & Future Vision
        </h2>

        <div className="space-y-5 max-w-3xl">
          {visionPoints.map((point, index) => (
            <div
              key={index}
              className="animate-slide-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <p className="text-foreground text-sm">
                <span className="font-semibold text-primary">{point.title}</span>{" "}
                <span className="text-foreground/80">{point.description}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FutureVision;
