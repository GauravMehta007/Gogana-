import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn, CategoryType, formatCategories } from "@/lib/utils";
import { Gallery } from "@shared/schema";

interface GalleryGridProps {
  items: Gallery[];
  className?: string;
}

const GalleryGrid = ({ items, className }: GalleryGridProps) => {
  const [activeFilter, setActiveFilter] = useState<CategoryType>("all");

  const handleFilterChange = (filter: CategoryType) => {
    setActiveFilter(filter);
  };

  const filteredItems = activeFilter === "all" 
    ? items 
    : items.filter(item => item.category === activeFilter);

  return (
    <div className={className}>
      <div className="gallery-filter flex flex-wrap justify-center gap-4 mb-10">
        <Button
          onClick={() => handleFilterChange("all")}
          variant={activeFilter === "all" ? "default" : "outline"}
          className={cn(
            "px-5 py-2 rounded-full transition-colors",
            activeFilter === "all" 
              ? "bg-[#2C5F2D] text-white" 
              : "bg-white text-gray-800 hover:bg-[#2C5F2D] hover:text-white"
          )}
        >
          All
        </Button>
        
        {Object.entries(formatCategories).map(([key, label]) => (
          <Button
            key={key}
            onClick={() => handleFilterChange(key as CategoryType)}
            variant={activeFilter === key ? "default" : "outline"}
            className={cn(
              "px-5 py-2 rounded-full transition-colors",
              activeFilter === key 
                ? "bg-[#2C5F2D] text-white" 
                : "bg-white text-gray-800 hover:bg-[#2C5F2D] hover:text-white"
            )}
          >
            {label}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredItems.map((item) => (
          <div 
            key={item.id}
            className="gallery-item overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-[1.02]"
          >
            <img 
              src={item.imageUrl} 
              alt={item.title} 
              className="w-full h-64 object-cover hover:opacity-90 transition-opacity"
            />
            <div className="p-4 bg-white">
              <h3 className="font-['Playfair_Display'] text-lg font-medium">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryGrid;
