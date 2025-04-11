import { cn } from "@/lib/utils";
import { Attraction } from "@shared/schema";

interface AttractionCardProps {
  attraction: Attraction;
  className?: string;
}

const AttractionCard = ({ attraction, className }: AttractionCardProps) => {
  const { title, description, imageUrl, details, location } = attraction;

  return (
    <div className={cn(
      "bg-[#F4F1DE] rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:shadow-xl",
      className
    )}>
      <img 
        src={imageUrl} 
        alt={title} 
        className="w-full h-56 object-cover"
      />
      
      <div className="p-6">
        <h3 className="font-['Playfair_Display'] text-xl font-semibold mb-3">{title}</h3>
        
        <p className="mb-4">{description}</p>
        
        {details && (
          <div className="flex items-center text-sm text-gray-600">
            <i className="fas fa-info-circle mr-2"></i>
            <span>{details}</span>
          </div>
        )}
        
        {location && (
          <div className="flex items-center text-sm text-gray-600 mt-2">
            <i className="fas fa-map-marker-alt mr-2"></i>
            <span>{location}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default AttractionCard;
