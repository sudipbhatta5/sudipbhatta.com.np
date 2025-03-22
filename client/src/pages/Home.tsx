
import { motion } from "framer-motion";
import WorkCarousel from "@/components/WorkCarousel";
import { Link } from "wouter";

const photoGallery = [
  {
    url: "https://images.unsplash.com/photo-1550745165-9bc0b252726f",
    title: "Animation Studio"
  },
  {
    url: "https://images.unsplash.com/photo-1516131206008-dd041a9764fd",
    title: "Design Workshop"
  },
  {
    url: "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
    title: "Video Production"
  },
  {
    url: "https://images.unsplash.com/photo-1533702165324-66678e2069b3",
    title: "Creative Space"
  }
];

const recentPosts = [
  {
    title: "The Art of Animation",
    excerpt: "Exploring the principles of animation and how they bring characters to life.",
    date: "2024-01-15"
  },
  {
    title: "Design Trends 2024",
    excerpt: "A look at the emerging design trends shaping the digital landscape.",
    date: "2024-01-10"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden pt-16">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&q=80"
            alt="Creative Background"
            className="w-full h-full object-cover brightness-[0.3]"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="pt-24 pb-16 max-w-3xl"
          >
            <motion.h1 
              className="text-5xl font-bold mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {["Creative", "Solutions", "for", "Digital", "Success"].map((word, i) => (
                <motion.span
                  key={i}
                  className="inline-block mr-2"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: i * 0.2, duration: 0.5 }}
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>
            <motion.p 
              className="text-xl text-muted-foreground mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              Specializing in animation, design, and digital content creation that brings your vision to life.
            </motion.p>
            <div className="flex gap-4">
              <Link href="/work">
                <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition">
                  View My Work
                </button>
              </Link>
              <Link href="/contact">
                <button className="border border-input bg-background hover:bg-accent hover:text-accent-foreground px-6 py-3 rounded-lg transition">
                  Get in Touch
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Featured Work Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="py-16 bg-muted"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Work</h2>
          <WorkCarousel />
        </div>
      </motion.div>

      {/* Photo Gallery Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="py-16"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Photo Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {photoGallery.map((photo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="relative group overflow-hidden rounded-lg"
              >
                <img
                  src={photo.url}
                  alt={photo.title}
                  className="w-full h-64 object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <h3 className="text-white text-xl font-bold">{photo.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Blog Preview Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="py-16 bg-muted"
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Latest Articles</h2>
            <Link href="/blog">
              <button className="text-primary hover:text-primary/80 transition">
                View All Posts →
              </button>
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {recentPosts.map((post, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="bg-card rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-2xl font-bold mb-2">{post.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{post.date}</p>
                <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                <Link href="/blog">
                  <button className="text-primary hover:underline">Read more →</button>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
}
