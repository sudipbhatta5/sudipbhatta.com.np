import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

export default function Navigation() {
  const [location] = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const links = [
    { href: "/", label: "Home" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/blog", label: "Blog" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 bg-background/80 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 cursor-pointer"
          >
            <motion.div
              className="h-10 w-10 rounded-lg bg-gradient-to-br from-primary to-primary-foreground flex items-center justify-center text-primary-foreground font-bold text-xl"
              whileHover={{
                rotate: [0, -10, 10, 0],
                transition: { duration: 0.5 }
              }}
            >
              SB
            </motion.div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-primary-foreground bg-clip-text text-transparent">
              Sudip Bhatta
            </span>
          </motion.div>
        </Link>

        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        <div className="hidden md:flex space-x-8">
          {links.map(({ href, label }) => (
            <Link key={href} href={href}>
              <motion.span
                whileHover={{ scale: 1.05 }}
                className="relative cursor-pointer"
              >
                {location === href && (
                  <motion.div
                    layoutId="underline"
                    className="absolute -bottom-2 left-0 right-0 h-0.5 bg-primary"
                  />
                )}
                <span className={`${location === href ? 'text-primary' : 'text-foreground hover:text-primary/80'} transition-colors`}>
                  {label}
                </span>
              </motion.span>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && isMobile && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-background border-t border-border"
          >
            {links.map(({ href, label }) => (
              <Link key={href} href={href}>
                <motion.div
                  className="p-4 border-b border-border cursor-pointer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className={`${location === href ? 'text-primary' : 'text-foreground'}`}>
                    {label}
                  </span>
                </motion.div>
              </Link>
            ))}
          </motion.div>
        )}
      </div>
    </nav>
  );
}