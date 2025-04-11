import { useQuery } from "@tanstack/react-query";
import HeroSection from "@/components/hero-section";
import GalleryGrid from "@/components/gallery/gallery-grid";
import { Skeleton } from "@/components/ui/skeleton";
import type { Gallery } from "@shared/schema";

const GalleryPage = () => {
  const { data: galleryItems, isLoading } = useQuery<Gallery[]>({
    queryKey: ['/api/gallery'],
  });

  return (
    <div>
      <HeroSection
        title="Gallery of"
        subtitle="Explore the stunning landscapes, vibrant culture, and daily life of our village through our collection of photographs."
        imageUrl="https://images.unsplash.com/photo-1527579584910-275bae7f0d06?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
        hasScrollDown={true}
        scrollToId="gallery-content"
      />

      <section id="gallery-content" className="py-20 bg-[#F4F1DE]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="font-['Caveat'] text-2xl text-[#6A8EAE]">Visual Journey</span>
            <h2 className="font-['Playfair_Display'] text-4xl font-bold mt-2 mb-4">Gallery</h2>
            <div className="w-24 h-1 bg-[#CB997E] mx-auto"></div>
            <p className="max-w-2xl mx-auto mt-6">Explore the stunning landscapes, vibrant culture, and daily life of Gogana village through our collection of photographs.</p>
          </div>

          {isLoading ? (
            <>
              <div className="flex flex-wrap justify-center gap-4 mb-10">
                {[...Array(4)].map((_, i) => (
                  <Skeleton key={i} className="h-10 w-24 rounded-full" />
                ))}
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="overflow-hidden rounded-lg shadow-lg">
                    <Skeleton className="w-full h-64" />
                    <div className="p-4 bg-white">
                      <Skeleton className="h-6 w-3/4 mb-2" />
                      <Skeleton className="h-4 w-full" />
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <GalleryGrid items={galleryItems || []} />
          )}
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;
