import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const works = [
  {
    category: "Graphic Design",
    items: [
      {
        title: "Brand Identity Design",
        image: "https://images.unsplash.com/photo-1626785774573-4b799315345d",
        description: "Contemporary brand identity project"
      },
      {
        title: "Social Media Package",
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113",
        description: "Engaging social media designs"
      },
      {
        title: "Print Materials",
        image: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338",
        description: "Professional print design work"
      }
    ]
  },
  {
    category: "Motion Graphics",
    items: [
      {
        title: "Animated Logo Reveal",
        image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d",
        description: "Dynamic logo animations"
      },
      {
        title: "Explainer Video",
        image: "https://images.unsplash.com/photo-1551269901-5c5e14c25df7",
        description: "Informative motion graphics"
      },
      {
        title: "Title Sequences",
        image: "https://images.unsplash.com/photo-1536240478700-b869070f9279",
        description: "Creative title animations"
      }
    ]
  },
  {
    category: "Animation",
    items: [
      {
        title: "Character Animation",
        image: "https://images.unsplash.com/photo-1534783504516-f5273747c9aa",
        description: "2D character animations & expressions"
      },
      {
        title: "Game Animation",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f",
        description: "Animated game assets & sprites"
      },
      {
        title: "Educational Animation",
        image: "https://images.unsplash.com/photo-1516131206008-dd041a9764fd",
        description: "Engaging educational content"
      }
    ]
  },
  {
    category: "Video Editing",
    items: [
      {
        title: "Corporate Video",
        image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
        description: "Professional corporate edits"
      },
      {
        title: "Commercial Spot",
        image: "https://images.unsplash.com/photo-1579165466741-7f35e4755660",
        description: "Engaging commercial edits"
      },
      {
        title: "Social Content",
        image: "https://images.unsplash.com/photo-1533702165324-66678e2069b3",
        description: "Short-form video content"
      }
    ]
  }
];

export default function WorkCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {works.map((category, index) => (
            <div key={index} className="flex-[0_0_100%] min-w-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index }}
                className="p-4"
              >
                <h3 className="text-2xl font-bold mb-6 text-center">{category.category}</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {category.items.map((item, itemIndex) => (
                    <motion.div
                      key={itemIndex}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.1 * itemIndex }}
                      className="group relative aspect-video rounded-lg overflow-hidden bg-card"
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <div className="text-center p-4">
                          <h4 className="text-white text-lg font-bold">{item.title}</h4>
                          <p className="text-white/80 mt-2 text-sm">{item.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={scrollPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-primary/80 text-primary-foreground hover:bg-primary transition-colors"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={scrollNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-primary/80 text-primary-foreground hover:bg-primary transition-colors"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
    </div>
  );
}