const Footer = () => (
  <footer className="border-t border-border py-8">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} Shaik Shahid. Built with React & Tailwind CSS.
      </p>
    </div>
  </footer>
);

export default Footer;
