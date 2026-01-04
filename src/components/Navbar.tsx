const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          
          <a
            href="https://mybharat.gov.in/pages/design_home"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-medium text-white"
          >
            Design for Bharat
          </a>

          <span className="text-lg font-display font-bold text-foreground">
            NIRMAAN51
          </span>

          <a
            href="https://mybharat.gov.in/pages/vbyld_2026"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-medium text-white"
          >
            VBYLD26
          </a>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
