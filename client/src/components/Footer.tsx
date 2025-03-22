import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-8 border-b border-border pb-8 mb-8">
          <div>
            <h3 className="font-semibold text-lg mb-4">About</h3>
            <p className="text-muted-foreground">
              Creating digital experiences through animation, design, and creative solutions.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/portfolio" className="text-muted-foreground hover:text-primary transition">Portfolio</a></li>
              <li><a href="/about" className="text-muted-foreground hover:text-primary transition">About</a></li>
              <li><a href="/blog" className="text-muted-foreground hover:text-primary transition">Blog</a></li>
              <li><a href="/contact" className="text-muted-foreground hover:text-primary transition">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>📍 Location, City</li>
              <li>📧 contact@example.com</li>
              <li>📞 +1 (234) 567-890</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-muted-foreground"
          >
            © {currentYear} Your Name. All rights reserved.
          </motion.p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="/privacy" className="text-muted-foreground hover:text-primary transition">Privacy Policy</a>
            <a href="/terms" className="text-muted-foreground hover:text-primary transition">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}