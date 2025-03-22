
import { motion } from "framer-motion";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  author: string;
}

const samplePosts: BlogPost[] = [
  {
    id: 1,
    title: "The Art of Animation",
    excerpt: "Exploring the principles of animation and how they bring characters to life.",
    date: "2024-01-15",
    author: "John Doe"
  },
  {
    id: 2,
    title: "Design Trends 2024",
    excerpt: "A look at the emerging design trends shaping the digital landscape.",
    date: "2024-01-10",
    author: "John Doe"
  },
  {
    id: 3,
    title: "Creating Engaging UI/UX",
    excerpt: "Tips and tricks for designing user interfaces that captivate and convert.",
    date: "2024-01-05",
    author: "John Doe"
  }
];

export default function Blog() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Blog</h1>
          <p className="text-muted-foreground">
            Thoughts and insights on animation, design, and creativity
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid gap-8">
          {samplePosts.map((post) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-card rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
              <div className="flex gap-4 text-sm text-muted-foreground mb-4">
                <span>{post.date}</span>
                <span>By {post.author}</span>
              </div>
              <p className="text-muted-foreground">{post.excerpt}</p>
              <button className="mt-4 text-primary hover:underline">Read more →</button>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
