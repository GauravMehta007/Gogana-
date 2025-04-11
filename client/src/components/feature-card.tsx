import { cn } from "@/lib/utils";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
  iconBgColor?: string;
  className?: string;
}

const FeatureCard = ({
  title,
  description,
  icon,
  iconBgColor = "#2C5F2D",
  className
}: FeatureCardProps) => {
  return (
    <div className={cn(
      "bg-[#F4F1DE] p-8 rounded-lg shadow hover:shadow-lg transition-shadow",
      className
    )}>
      <div 
        className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
        style={{ backgroundColor: iconBgColor }}
      >
        <i className={`${icon} text-white text-2xl`}></i>
      </div>
      
      <h3 className="font-['Playfair_Display'] text-xl font-semibold mb-3">{title}</h3>
      
      <p>{description}</p>
    </div>
  );
};

export default FeatureCard;
