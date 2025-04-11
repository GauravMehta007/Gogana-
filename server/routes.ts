import express from "express";
import { storage } from "./storage";

const router = express.Router();

// Gallery routes
router.get("/api/gallery", async (req, res) => {
  try {
    const category = req.query.category as string;
    if (category && category !== 'all') {
      const gallery = await storage.getGalleryByCategory(category);
      return res.json(gallery);
    }
    const gallery = await storage.getGallery();
    res.json(gallery);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
});

// Attractions routes
router.get("/api/attractions", async (_, res) => {
  try {
    const attractions = await storage.getAttractions();
    res.json(attractions);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
});

// News routes
router.get("/api/news", async (_, res) => {
  try {
    const news = await storage.getNews();
    res.json(news);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
});

// Contact form route
router.post("/api/contact", async (req, res) => {
  try {
    const message = req.body;
    message.createdAt = new Date().toISOString();
    const result = await storage.addMessage(message);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
});

// Subscription route
router.post("/api/subscribe", async (req, res) => {
  try {
    const subscriber = req.body;
    subscriber.subscriptionDate = new Date().toISOString();
    const result = await storage.addSubscriber(subscriber);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
});

export default router;