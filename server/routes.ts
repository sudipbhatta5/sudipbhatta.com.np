import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertMessageSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  app.get("/api/projects", async (_req, res) => {
    try {
      const projects = [
        {
          id: 1,
          title: "Character Animation Reel",
          description: "A showcase of character animations and expressions",
          imageUrl: "https://images.unsplash.com/photo-1472289065668-ce650ac443d2",
          category: "Character",
          link: "https://example.com/reel"
        },
        {
          id: 2,
          title: "Game UI Design",
          description: "UI/UX design for a mobile game",
          imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
          category: "UI/UX",
          link: "https://example.com/ui"
        },
        {
          id: 3,
          title: "Environment Design",
          description: "Background art and environment design",
          imageUrl: "https://images.unsplash.com/photo-1483058712412-4245e9b90334",
          category: "Environment",
          link: "https://example.com/env"
        },
        {
          id: 4,
          title: "Animation Workshop",
          description: "Educational animation series",
          imageUrl: "https://images.unsplash.com/photo-1504805572947-34fad45aed93",
          category: "Animation",
          link: "https://example.com/workshop"
        },
        {
          id: 5,
          title: "Character Design",
          description: "Original character designs and concepts",
          imageUrl: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173",
          category: "Character",
          link: "https://example.com/characters"
        },
        {
          id: 6,
          title: "UI Animation",
          description: "Micro-interactions and UI animations",
          imageUrl: "https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64",
          category: "UI/UX",
          link: "https://example.com/ui-anim"
        }
      ];
      
      res.json(projects);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch projects" });
    }
  });

  app.post("/api/contact", async (req, res) => {
    try {
      const data = insertMessageSchema.parse(req.body);
      const message = await storage.createMessage(data);
      res.json(message);
    } catch (error) {
      if (error instanceof Error) {
        const validationError = fromZodError(error);
        res.status(400).json({ message: validationError.message });
      } else {
        res.status(500).json({ message: "Failed to send message" });
      }
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
