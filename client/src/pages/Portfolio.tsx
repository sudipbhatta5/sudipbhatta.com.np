import { motion } from "framer-motion";
import PortfolioGrid from "@/components/PortfolioGrid";

export default function Portfolio() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Portfolio</h1>
          <p className="text-muted-foreground">
            A collection of my best work in animation and design
          </p>
        </motion.div>

        <PortfolioGrid />
      </div>
    </div>
  );
}
