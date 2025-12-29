const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-foreground text-background">
      <div className="container-narrow">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-background/70">
            © {currentYear} Data Analyst Portfolio. All rights reserved.
          </p>
          <p className="text-sm text-background/70">
            Built with React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
