import { z } from "zod";

// User interface
export interface User {
  id: number;
  username: string;
  password: string;
}

export const insertUserSchema = z.object({
  username: z.string(),
  password: z.string(),
});

export type InsertUser = z.infer<typeof insertUserSchema>;

// Gallery interface
export interface Gallery {
  id: number;
  title: string;
  description: string | null;
  imageUrl: string;
  category: string;
}

export const insertGallerySchema = z.object({
  title: z.string(),
  description: z.string().nullable(),
  imageUrl: z.string(),
  category: z.string(),
});

export type InsertGallery = z.infer<typeof insertGallerySchema>;

// Attractions interface
export interface Attraction {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  details: string | null;
  location: string | null;
}

export const insertAttractionSchema = z.object({
  title: z.string(),
  description: z.string(),
  imageUrl: z.string(),
  details: z.string().nullable(),
  location: z.string().nullable(),
});

export type InsertAttraction = z.infer<typeof insertAttractionSchema>;

// News interface
export interface News {
  id: number;
  title: string;
  content: string;
  imageUrl: string;
  date: string;
}

export const insertNewsSchema = z.object({
  title: z.string(),
  content: z.string(),
  imageUrl: z.string(),
  date: z.string(),
});

export type InsertNews = z.infer<typeof insertNewsSchema>;

// Messages interface
export interface Message {
  id: number;
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: string;
}

export const insertMessageSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  subject: z.string(),
  message: z.string(),
  createdAt: z.string(),
});

export type InsertMessage = z.infer<typeof insertMessageSchema>;

// Newsletter subscription interface
export interface Subscriber {
  id: number;
  email: string;
  subscriptionDate: string;
}

export const insertSubscriberSchema = z.object({
  email: z.string().email(),
  subscriptionDate: z.string(),
});

export type InsertSubscriber = z.infer<typeof insertSubscriberSchema>;
