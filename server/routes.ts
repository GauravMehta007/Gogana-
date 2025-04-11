import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertMessageSchema, insertSubscriberSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes
  
  // Gallery routes
  app.get("/api/gallery", async (req: Request, res: Response) => {
    try {
      const category = req.query.category as string || 'all';
      const galleryItems = await storage.getGalleryItemsByCategory(category);
      res.json(galleryItems);
    } catch (error) {
      res.status(500).json({ message: "Error fetching gallery items" });
    }
  });
  
  app.get("/api/gallery/:id", async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      const galleryItem = await storage.getGalleryItem(id);
      
      if (!galleryItem) {
        return res.status(404).json({ message: "Gallery item not found" });
      }
      
      res.json(galleryItem);
    } catch (error) {
      res.status(500).json({ message: "Error fetching gallery item" });
    }
  });
  
  // Attractions routes
  app.get("/api/attractions", async (req: Request, res: Response) => {
    try {
      const attractions = await storage.getAllAttractions();
      res.json(attractions);
    } catch (error) {
      res.status(500).json({ message: "Error fetching attractions" });
    }
  });
  
  app.get("/api/attractions/:id", async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      const attraction = await storage.getAttraction(id);
      
      if (!attraction) {
        return res.status(404).json({ message: "Attraction not found" });
      }
      
      res.json(attraction);
    } catch (error) {
      res.status(500).json({ message: "Error fetching attraction" });
    }
  });
  
  // News routes
  app.get("/api/news", async (req: Request, res: Response) => {
    try {
      const news = await storage.getAllNews();
      res.json(news);
    } catch (error) {
      res.status(500).json({ message: "Error fetching news" });
    }
  });
  
  app.get("/api/news/:id", async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      const newsItem = await storage.getNewsItem(id);
      
      if (!newsItem) {
        return res.status(404).json({ message: "News item not found" });
      }
      
      res.json(newsItem);
    } catch (error) {
      res.status(500).json({ message: "Error fetching news item" });
    }
  });
  
  // Contact form submission
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      const validationResult = insertMessageSchema.safeParse(req.body);
      
      if (!validationResult.success) {
        return res.status(400).json({ 
          message: "Invalid form data", 
          errors: validationResult.error.format() 
        });
      }
      
      const message = await storage.createMessage(validationResult.data);
      res.status(201).json({ message: "Message sent successfully", id: message.id });
    } catch (error) {
      res.status(500).json({ message: "Error submitting message" });
    }
  });
  
  // Newsletter subscription
  app.post("/api/subscribe", async (req: Request, res: Response) => {
    try {
      const validationResult = insertSubscriberSchema.safeParse(req.body);
      
      if (!validationResult.success) {
        return res.status(400).json({ 
          message: "Invalid email", 
          errors: validationResult.error.format() 
        });
      }
      
      // Check if email already exists
      const existingSubscriber = await storage.getSubscriberByEmail(req.body.email);
      
      if (existingSubscriber) {
        return res.status(400).json({ message: "Email already subscribed" });
      }
      
      const subscriber = await storage.createSubscriber(validationResult.data);
      res.status(201).json({ message: "Subscribed successfully", id: subscriber.id });
    } catch (error) {
      res.status(500).json({ message: "Error subscribing to newsletter" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
