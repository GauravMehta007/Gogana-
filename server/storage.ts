import { User, Gallery, Attraction, News, Message, Subscriber } from "@shared/schema";
import { galleryData, attractionsData, newsData, messagesStorage, subscribersStorage } from "../client/src/lib/mockData";

// Storage interface
export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: User): Promise<User>;
  
  // Gallery methods
  getGallery(): Promise<Gallery[]>;
  getGalleryByCategory(category: string): Promise<Gallery[]>;
  
  // Attractions methods
  getAttractions(): Promise<Attraction[]>;
  
  // News methods
  getNews(): Promise<News[]>;
  
  // Message methods
  addMessage(message: Message): Promise<Message>;
  
  // Subscriber methods
  addSubscriber(subscriber: Subscriber): Promise<Subscriber>;
}

// Memory storage implementation
export class MemStorage implements IStorage {
  private users: User[] = [
    { id: 1, username: "admin", password: "password" }
  ];
  
  private galleryItems: Gallery[] = galleryData;
  private attractionItems: Attraction[] = attractionsData;
  private newsItems: News[] = newsData;
  private messages: Message[] = messagesStorage;
  private subscribers: Subscriber[] = subscribersStorage;
  
  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.find(user => user.id === id);
  }
  
  async getUserByUsername(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  }
  
  async createUser(user: User): Promise<User> {
    const newUser = { ...user, id: this.users.length + 1 };
    this.users.push(newUser);
    return newUser;
  }
  
  // Gallery methods
  async getGallery(): Promise<Gallery[]> {
    return this.galleryItems;
  }
  
  async getGalleryByCategory(category: string): Promise<Gallery[]> {
    if (category === 'all') {
      return this.galleryItems;
    }
    return this.galleryItems.filter(item => item.category === category);
  }
  
  // Attractions methods
  async getAttractions(): Promise<Attraction[]> {
    return this.attractionItems;
  }
  
  // News methods
  async getNews(): Promise<News[]> {
    return this.newsItems;
  }
  
  // Message methods
  async addMessage(message: Message): Promise<Message> {
    const newMessage = {
      ...message,
      id: this.messages.length + 1,
      createdAt: new Date().toISOString()
    };
    this.messages.push(newMessage);
    return newMessage;
  }
  
  // Subscriber methods
  async addSubscriber(subscriber: Subscriber): Promise<Subscriber> {
    // Check if email already exists
    const existingSubscriber = this.subscribers.find(s => s.email === subscriber.email);
    if (existingSubscriber) {
      throw new Error('Email already subscribed');
    }
    
    const newSubscriber = {
      ...subscriber,
      id: this.subscribers.length + 1,
      subscriptionDate: new Date().toISOString()
    };
    this.subscribers.push(newSubscriber);
    return newSubscriber;
  }
}

// Export singleton instance
export const storage = new MemStorage();