const ProblemSection = () => {
  return (
    <section className="py-12 px-6">
      <div className="container mx-auto">
        <h2 className="text-3xl font-display font-bold text-primary mb-6">
          The Problem
        </h2>
        
        <p className="text-foreground/90 mb-6 max-w-3xl">
          For millions, the excitement of live sports is just noise. They lack the rhythm and flow.
        </p>

        <div className="space-y-3 text-sm">
          <div className="flex gap-4">
            <span className="font-semibold text-foreground min-w-[100px]">Data (WHO) :</span>
            <span className="text-foreground/80">4.95M+ visually impaired. 58M+ engage via touch/sound.</span>
          </div>
          
          <div className="flex gap-4">
            <span className="font-semibold text-foreground min-w-[100px]">The Gap :</span>
            <span className="text-foreground/80">No visual access to live sports rhythm. Missing emotional connection.</span>
          </div>
          
          <div className="flex gap-4">
            <span className="font-semibold text-foreground min-w-[100px]">Target Sport TT :</span>
            <span className="text-foreground/80">Fast pace, high contrast, minimal commentary makes it ideal.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
