import { QueryClient, QueryFunction } from "@tanstack/react-query";
import { galleryData, attractionsData, newsData, getGalleryByCategory, handleAddMessage, handleAddSubscriber } from "./mockData";
import { Message, Subscriber } from "@shared/schema";

// Mock API request function that simulates API calls using mock data
export async function apiRequest(
  method: string,
  url: string,
  data?: unknown | undefined,
): Promise<any> {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 200));
  
  // Process request based on URL and method
  if (url === "/api/contact" && method === "POST") {
    return handleAddMessage(data as Message);
  }
  
  if (url === "/api/subscribe" && method === "POST") {
    try {
      return handleAddSubscriber(data as Subscriber);
    } catch (error) {
      throw new Error((error as Error).message || "Subscription failed");
    }
  }
  
  // If no match, return an error
  throw new Error(`Endpoint not found: ${method} ${url}`);
}

type QueryParams = {
  category?: string;
  [key: string]: any;
};

// Mock query function that returns data based on the queryKey
export const getQueryFn: <T>(options: any) => QueryFunction<T> =
  () =>
  async ({ queryKey }) => {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 300));
    
    const path = queryKey[0] as string;
    const params = queryKey.length > 1 ? queryKey[1] as QueryParams : {} as QueryParams;
    
    // Return mock data based on the path
    switch (path) {
      case "/api/gallery":
        if (params.category) {
          return getGalleryByCategory(params.category) as any;
        }
        return galleryData as any;
        
      case "/api/attractions":
        return attractionsData as any;
        
      case "/api/news":
        return newsData as any;
        
      default:
        throw new Error(`Endpoint not found: ${path}`);
    }
  };

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: getQueryFn({}),
      refetchInterval: false,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      retry: false,
    },
    mutations: {
      retry: false,
    },
  },
});
