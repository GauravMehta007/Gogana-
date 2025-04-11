import { db } from './db';
import {
  gallery, type InsertGallery,
  attractions, type InsertAttraction,
  news, type InsertNews
} from "@shared/schema";

async function seed() {
  console.log('Starting database seeding...');
  
  try {
    // Clear any existing data (optional)
    await db.delete(gallery);
    await db.delete(attractions);
    await db.delete(news);
    
    console.log('Seeding gallery items...');
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
    
    for (const item of galleryData) {
      await db.insert(gallery).values(item);
    }
    
    console.log('Seeding attractions...');
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
    
    for (const item of attractionsData) {
      await db.insert(attractions).values(item);
    }
    
    console.log('Seeding news...');
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
    
    for (const item of newsData) {
      await db.insert(news).values(item);
    }
    
    console.log('Database seeding completed successfully!');
  } catch (error) {
    console.error('Error seeding database:', error);
    throw error;
  }
}

// ES Module equivalent of checking if file is being run directly
import { fileURLToPath } from 'url';
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  seed()
    .then(() => process.exit(0))
    .catch(error => {
      console.error('Seeding failed:', error);
      process.exit(1);
    });
}

export { seed };