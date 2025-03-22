import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen pt-24 pb-16 bg-background">

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="prose prose-invert mx-auto text-foreground"
          >
            <h1 className="text-4xl font-bold mb-8 text-center">About Me</h1>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              <motion.img
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                src="https://images.unsplash.com/photo-1642942552676-a02d4f94c727"
                alt="Sudip Bhatta"
                className="rounded-lg w-full"
              />

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <h2 className="text-2xl font-bold mb-4">My Journey</h2>
                <p className="text-muted-foreground">
                  With over 9 years of experience in digital creation, I've evolved into
                  a versatile professional specializing in animation, design, and digital
                  marketing. My journey has been marked by continuous learning and
                  adaptation to new technologies and creative trends.
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid md:grid-cols-3 gap-8 mb-12"
            >
              <div className="p-6 bg-card rounded-lg">
                <h3 className="text-xl font-bold mb-2">Animation</h3>
                <p className="text-muted-foreground">
                  Specializing in character animation, game assets, and storytelling through motion
                </p>
              </div>

              <div className="p-6 bg-card rounded-lg">
                <h3 className="text-xl font-bold mb-2">Design</h3>
                <p className="text-muted-foreground">
                  Creating engaging visual experiences for brands and digital platforms
                </p>
              </div>

              <div className="p-6 bg-card rounded-lg">
                <h3 className="text-xl font-bold mb-2">Marketing</h3>
                <p className="text-muted-foreground">
                  Driving results through strategic digital marketing and content creation
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <h2 className="text-2xl font-bold mb-4">My Approach</h2>
              <p className="text-muted-foreground mb-6">
                I believe in creating content that not only looks beautiful but also
                serves a purpose. Every project is an opportunity to tell a unique
                story and create meaningful connections with the audience.
              </p>
              <p className="text-muted-foreground">
                Whether it's crafting engaging animations, designing marketing
                materials, or developing websites, I focus on delivering results
                that exceed expectations and help businesses grow.
              </p>
            </motion.div>

            {/* Achievements Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="mt-12 p-6 bg-card rounded-lg"
            >
              <h2 className="text-2xl font-bold mb-4">Achievements</h2>
              <ul className="space-y-3 text-foreground">
                <li>• Successfully increased client website traffic by 50% through strategic marketing campaigns</li>
                <li>• Created animations for award-winning mobile games and educational platforms</li>
                <li>• Developed brand identities for multiple successful startups</li>
                <li>• Led creative direction for major advertising campaigns</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}