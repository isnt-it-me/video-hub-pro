const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-foreground/80">
            Design for Bharat
          </span>
          <span className="text-lg font-display font-bold text-foreground">
            NIRMAAN51
          </span>
          <span className="text-sm font-medium text-foreground/80">
            VBYLD26
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
