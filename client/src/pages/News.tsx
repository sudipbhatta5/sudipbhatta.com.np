
import { motion } from "framer-motion";

interface NewsItem {
  id: number;
  title: string;
  content: string;
  date: string;
  category: string;
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "Latest Animation Technology Trends",
    content: "Exploring the cutting-edge technologies shaping the future of animation and digital design.",
    date: "2024-01-20",
    category: "Technology"
  },
  {
    id: 2,
    title: "Industry Awards Recognition",
    content: "Our studio receives recognition for outstanding contributions to digital animation.",
    date: "2024-01-18",
    category: "Awards"
  },
  {
    id: 3,
    title: "Upcoming Digital Art Exhibition",
    content: "Join us for an exclusive showcase of digital art and animation projects.",
    date: "2024-01-15",
    category: "Events"
  }
];

export default function News() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Latest News</h1>
          <p className="text-muted-foreground">
            Stay updated with our latest announcements and industry news
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {newsItems.map((item) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-card rounded-lg p-6"
            >
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm mb-4">
                {item.category}
              </span>
              <h2 className="text-2xl font-bold mb-2">{item.title}</h2>
              <div className="text-sm text-muted-foreground mb-4">{item.date}</div>
              <p className="text-muted-foreground">{item.content}</p>
              <button className="mt-4 text-primary hover:underline">Read full story →</button>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
