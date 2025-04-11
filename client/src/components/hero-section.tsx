import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link } from "wouter";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  buttonText?: string;
  buttonHref?: string;
  imageUrl?: string;
  hasScrollDown?: boolean;
  scrollToId?: string;
  className?: string;
}

const HeroSection = ({
  title,
  subtitle,
  buttonText,
  buttonHref,
  imageUrl = "/Gog.jpg",
  hasScrollDown = false,
  scrollToId,
  className,
}: HeroSectionProps) => {
  const handleScrollDown = () => {
    if (scrollToId) {
      const element = document.getElementById(scrollToId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section className={cn("relative h-screen", className)}>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${imageUrl}')` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-start">
        <h1 className="font-['Playfair_Display'] text-4xl md:text-6xl font-bold text-white mb-4">
          {title} <span className="text-[#CB997E]">Gogana</span>
        </h1>

        <p className="font-body text-xl md:text-2xl text-white mb-8 max-w-2xl">
          {subtitle}
        </p>

        {buttonText && (
          <Button
            asChild
            className="bg-[#2C5F2D] hover:bg-opacity-90 text-white font-medium py-3 px-6 rounded-md transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <Link href={buttonHref || "#"}>{buttonText}</Link>
          </Button>
        )}
      </div>

      {hasScrollDown && (
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white">
          <button
            onClick={handleScrollDown}
            className="animate-bounce flex flex-col items-center"
            aria-label="Scroll down"
          >
            <span className="mb-2">Scroll Down</span>
            <i className="fas fa-chevron-down"></i>
          </button>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
