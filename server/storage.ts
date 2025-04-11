import { 
  users, type User, type InsertUser,
  gallery, type Gallery, type InsertGallery,
  attractions, type Attraction, type InsertAttraction,
  news, type News, type InsertNews,
  messages, type Message, type InsertMessage,
  subscribers, type Subscriber, type InsertSubscriber
} from "@shared/schema";

// Interface for storage operations
export interface IStorage {
  // Users
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Gallery
  getAllGalleryItems(): Promise<Gallery[]>;
  getGalleryItemsByCategory(category: string): Promise<Gallery[]>;
  getGalleryItem(id: number): Promise<Gallery | undefined>;
  createGalleryItem(item: InsertGallery): Promise<Gallery>;
  
  // Attractions
  getAllAttractions(): Promise<Attraction[]>;
  getAttraction(id: number): Promise<Attraction | undefined>;
  createAttraction(attraction: InsertAttraction): Promise<Attraction>;
  
  // News
  getAllNews(): Promise<News[]>;
  getNewsItem(id: number): Promise<News | undefined>;
  createNewsItem(newsItem: InsertNews): Promise<News>;
  
  // Messages
  createMessage(message: InsertMessage): Promise<Message>;
  getAllMessages(): Promise<Message[]>;
  
  // Newsletter subscribers
  createSubscriber(subscriber: InsertSubscriber): Promise<Subscriber>;
  getSubscriberByEmail(email: string): Promise<Subscriber | undefined>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private galleryItems: Map<number, Gallery>;
  private attractionsItems: Map<number, Attraction>;
  private newsItems: Map<number, News>;
  private messagesItems: Map<number, Message>;
  private subscribersItems: Map<number, Subscriber>;
  
  private userCurrentId: number;
  private galleryCurrentId: number;
  private attractionsCurrentId: number;
  private newsCurrentId: number;
  private messagesCurrentId: number;
  private subscribersCurrentId: number;

  constructor() {
    this.users = new Map();
    this.galleryItems = new Map();
    this.attractionsItems = new Map();
    this.newsItems = new Map();
    this.messagesItems = new Map();
    this.subscribersItems = new Map();
    
    this.userCurrentId = 1;
    this.galleryCurrentId = 1;
    this.attractionsCurrentId = 1;
    this.newsCurrentId = 1;
    this.messagesCurrentId = 1;
    this.subscribersCurrentId = 1;
    
    // Initialize with sample data
    this.initializeGallery();
    this.initializeAttractions();
    this.initializeNews();
  }

  // Users
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userCurrentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  
  // Gallery
  async getAllGalleryItems(): Promise<Gallery[]> {
    return Array.from(this.galleryItems.values());
  }
  
  async getGalleryItemsByCategory(category: string): Promise<Gallery[]> {
    return Array.from(this.galleryItems.values())
      .filter(item => category === 'all' || item.category === category);
  }
  
  async getGalleryItem(id: number): Promise<Gallery | undefined> {
    return this.galleryItems.get(id);
  }
  
  async createGalleryItem(item: InsertGallery): Promise<Gallery> {
    const id = this.galleryCurrentId++;
    const galleryItem: Gallery = { ...item, id };
    this.galleryItems.set(id, galleryItem);
    return galleryItem;
  }
  
  // Attractions
  async getAllAttractions(): Promise<Attraction[]> {
    return Array.from(this.attractionsItems.values());
  }
  
  async getAttraction(id: number): Promise<Attraction | undefined> {
    return this.attractionsItems.get(id);
  }
  
  async createAttraction(attraction: InsertAttraction): Promise<Attraction> {
    const id = this.attractionsCurrentId++;
    const attractionItem: Attraction = { ...attraction, id };
    this.attractionsItems.set(id, attractionItem);
    return attractionItem;
  }
  
  // News
  async getAllNews(): Promise<News[]> {
    return Array.from(this.newsItems.values());
  }
  
  async getNewsItem(id: number): Promise<News | undefined> {
    return this.newsItems.get(id);
  }
  
  async createNewsItem(newsItem: InsertNews): Promise<News> {
    const id = this.newsCurrentId++;
    const news: News = { ...newsItem, id };
    this.newsItems.set(id, news);
    return news;
  }
  
  // Messages
  async createMessage(message: InsertMessage): Promise<Message> {
    const id = this.messagesCurrentId++;
    const messageItem: Message = { ...message, id };
    this.messagesItems.set(id, messageItem);
    return messageItem;
  }
  
  async getAllMessages(): Promise<Message[]> {
    return Array.from(this.messagesItems.values());
  }
  
  // Newsletter subscribers
  async createSubscriber(subscriber: InsertSubscriber): Promise<Subscriber> {
    const id = this.subscribersCurrentId++;
    const subscriberItem: Subscriber = { ...subscriber, id };
    this.subscribersItems.set(id, subscriberItem);
    return subscriberItem;
  }
  
  async getSubscriberByEmail(email: string): Promise<Subscriber | undefined> {
    return Array.from(this.subscribersItems.values()).find(
      (subscriber) => subscriber.email === email,
    );
  }
  
  // Initialize with sample data
  private initializeGallery() {
    const galleryData: InsertGallery[] = [
      {
        title: "Mountain Vista",
        description: "Panoramic view of the Himalayan range",
        imageUrl: "https://images.unsplash.com/photo-1527579584910-275bae7f0d06?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
        category: "landscapes"
      },
      {
        title: "Cultural Performance",
        description: "Traditional Kumaoni dance celebration",
        imageUrl: "https://images.unsplash.com/photo-1599031567103-1e7c71f4db3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1968&q=80",
        category: "culture"
      },
      {
        title: "Traditional Farming",
        description: "Sustainable agricultural practices",
        imageUrl: "https://images.unsplash.com/photo-1601902349453-b6c3bc6096c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1957&q=80",
        category: "lifestyle"
      },
      {
        title: "Forest Trail",
        description: "Hiking path through pine forests",
        imageUrl: "https://images.unsplash.com/photo-1520853504280-249c75a11f40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        category: "landscapes"
      },
      {
        title: "Ancient Temple",
        description: "Historic spiritual site of the village",
        imageUrl: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1972&q=80",
        category: "culture"
      },
      {
        title: "Local Craftsmanship",
        description: "Traditional weaving techniques",
        imageUrl: "https://images.unsplash.com/photo-1597226051193-c5a93607dfd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
        category: "lifestyle"
      },
      {
        title: "Hidden Waterfall",
        description: "Natural beauty near Gogana",
        imageUrl: "https://images.unsplash.com/photo-1532517964525-a617c2f64f74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        category: "landscapes"
      },
      {
        title: "Harvest Festival",
        description: "Annual celebration of crops",
        imageUrl: "https://images.unsplash.com/photo-1618176729090-253077a8f948?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
        category: "culture"
      }
    ];
    
    galleryData.forEach(item => this.createGalleryItem(item));
  }
  
  private initializeAttractions() {
    const attractionsData: InsertAttraction[] = [
      {
        title: "Himalayan Trekking",
        description: "Explore scenic mountain trails ranging from easy walks to challenging treks, offering breathtaking views of the Himalayan landscape.",
        imageUrl: "https://images.unsplash.com/photo-1510797226080-76912e49ab62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
        details: "Duration: 2-6 hours",
        location: "Various trails starting from the village"
      },
      {
        title: "Heritage Temples",
        description: "Visit centuries-old temples with intricate woodcarvings and architecture that showcase the region's cultural and spiritual heritage.",
        imageUrl: "https://images.unsplash.com/photo-1583236922407-dca19c0a92d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        details: "Visit hours: 8:00 AM - 6:00 PM",
        location: "Village center and surrounding hills"
      },
      {
        title: "Bird Watching",
        description: "Observe diverse Himalayan bird species in their natural habitat. The region is home to numerous rare and migratory birds.",
        imageUrl: "https://images.unsplash.com/photo-1549890219-2be6880414c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1933&q=80",
        details: "Best time: Early morning or late afternoon",
        location: "Forest areas east of the village"
      },
      {
        title: "Culinary Experiences",
        description: "Sample authentic Kumaoni cuisine made from locally-sourced ingredients. Participate in cooking demonstrations with village families.",
        imageUrl: "https://images.unsplash.com/photo-1514190051997-0f6f39ca5cde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        details: "Must try: Bhatt ki Churkani, Aloo ke Gutke",
        location: "Village homes and community kitchen"
      },
      {
        title: "Craft Workshops",
        description: "Learn traditional craft-making techniques from village artisans, including wool weaving, bamboo crafts, and traditional painting.",
        imageUrl: "https://images.unsplash.com/photo-1523285367489-d38aec03b6bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        details: "Duration: 2-3 hour workshops available",
        location: "Craft center in village market"
      },
      {
        title: "Scenic Viewpoints",
        description: "Visit spectacular viewpoints offering panoramic vistas of the Himalayan ranges, especially magical during sunrise and sunset.",
        imageUrl: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        details: "Best times: Sunrise and sunset",
        location: "Gogana Ridge (2km from village center)"
      }
    ];
    
    attractionsData.forEach(item => this.createAttraction(item));
  }
  
  private initializeNews() {
    const newsData: InsertNews[] = [
      {
        title: "Road Improvement Project Completed",
        content: "The village road connecting Gogana to the main highway has been fully renovated, making travel more convenient for visitors and locals alike. The project, which took three months to complete, included widening the road, adding proper drainage systems, and installing safety barriers in steep sections.",
        imageUrl: "https://images.unsplash.com/photo-1606768666853-403c90a981ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
        date: "October 15, 2023"
      },
      {
        title: "Annual Cultural Festival Announced",
        content: "Mark your calendars for the upcoming Gogana Cultural Festival on November 12-14, featuring traditional performances, crafts, and cuisine. This year's festival will include special performances from neighboring village artists and a crafts exhibition showcasing the finest local handicrafts.",
        imageUrl: "https://images.unsplash.com/photo-1569564156016-22ec00a639d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80",
        date: "September 28, 2023"
      },
      {
        title: "New Homestay Initiative Launched",
        content: "Five families in Gogana have joined a new homestay program, offering authentic accommodations for visitors looking to experience village life. Each homestay offers a unique experience of traditional Kumaoni hospitality, home-cooked meals, and cultural immersion opportunities.",
        imageUrl: "https://images.unsplash.com/photo-1513177582619-8c89022dbd6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        date: "August 19, 2023"
      }
    ];
    
    newsData.forEach(item => this.createNewsItem(item));
  }
}

export const storage = new MemStorage();
