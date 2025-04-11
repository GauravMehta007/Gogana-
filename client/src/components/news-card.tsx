import { Link } from "wouter";
import { cn } from "@/lib/utils";
import { News } from "@shared/schema";

interface NewsCardProps {
  news: News;
  className?: string;
}

const NewsCard = ({ news, className }: NewsCardProps) => {
  const { id, title, content, imageUrl, date } = news;
  
  // Truncate content for preview
  const truncatedContent = content.length > 120
    ? content.substring(0, 120) + '...'
    : content;

  return (
    <div className={cn(
      "bg-[#F4F1DE] rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:shadow-xl",
      className
    )}>
      <img 
        src={imageUrl} 
        alt={title} 
        className="w-full h-48 object-cover"
      />
      
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-600 mb-3">
          <i className="far fa-calendar-alt mr-2"></i>
          <span>{date}</span>
        </div>
        
        <h3 className="font-['Playfair_Display'] text-xl font-semibold mb-3">{title}</h3>
        
        <p className="mb-4">{truncatedContent}</p>
        
        <Link 
          href={`/news/${id}`} 
          className="text-[#2C5F2D] hover:text-opacity-80 font-medium inline-flex items-center"
        >
          Read More <i className="fas fa-arrow-right ml-2 text-sm"></i>
        </Link>
      </div>
    </div>
  );
};

export default NewsCard;
