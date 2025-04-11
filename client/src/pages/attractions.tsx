import { useQuery } from "@tanstack/react-query";
import HeroSection from "@/components/hero-section";
import AttractionCard from "@/components/attraction-card";
import { Skeleton } from "@/components/ui/skeleton";
import type { Attraction } from "@shared/schema";

const AttractionsPage = () => {
  const { data: attractions, isLoading } = useQuery<Attraction[]>({
    queryKey: ['/api/attractions'],
  });

  return (
    <div>
      <HeroSection
        title="Attractions in"
        subtitle="Discover the many natural wonders and enriching experiences that await you in and around our picturesque village."
        imageUrl="https://images.unsplash.com/photo-1510797226080-76912e49ab62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
        hasScrollDown={true}
        scrollToId="attractions-content"
      />

      <section id="attractions-content" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="font-['Caveat'] text-2xl text-[#6A8EAE]">Explore</span>
            <h2 className="font-['Playfair_Display'] text-4xl font-bold mt-2 mb-4">Attractions & Activities</h2>
            <div className="w-24 h-1 bg-[#CB997E] mx-auto"></div>
            <p className="max-w-2xl mx-auto mt-6">Discover the many natural wonders and enriching experiences that await you in and around Gogana village.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {isLoading ? (
              // Loading skeletons
              Array(6).fill(0).map((_, i) => (
                <div key={i} className="bg-white rounded-lg overflow-hidden shadow-lg">
                  <Skeleton className="w-full h-56" />
                  <div className="p-6">
                    <Skeleton className="h-6 w-3/4 mb-3" />
                    <Skeleton className="h-4 w-full mb-2" />
                    <Skeleton className="h-4 w-full mb-2" />
                    <Skeleton className="h-4 w-full mb-2" />
                    <Skeleton className="h-4 w-1/2" />
                  </div>
                </div>
              ))
            ) : (
              attractions?.map((attraction) => (
                <AttractionCard key={attraction.id} attraction={attraction} />
              ))
            )}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#F4F1DE]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="font-['Caveat'] text-2xl text-[#6A8EAE]">Celebrations</span>
            <h2 className="font-['Playfair_Display'] text-4xl font-bold mt-2 mb-4">Seasonal Festivals & Events</h2>
            <div className="w-24 h-1 bg-[#CB997E] mx-auto"></div>
          </div>

          <div className="mt-16 bg-[#6A8EAE] bg-opacity-10 rounded-lg p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="font-['Playfair_Display'] text-2xl font-semibold mb-4">Seasonal Festivals & Events</h3>
                <p className="mb-6">Experience the vibrant cultural life of Gogana through our seasonal celebrations and traditional festivals that highlight local customs and rituals.</p>
                
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <i className="fas fa-calendar-alt mt-1 mr-3 text-[#2C5F2D]"></i>
                    <div>
                      <span className="font-semibold">Phool Dei (March)</span> - Spring flower festival celebrating the arrival of new blossoms
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <i className="fas fa-calendar-alt mt-1 mr-3 text-[#2C5F2D]"></i>
                    <div>
                      <span className="font-semibold">Harela (July)</span> - Agricultural festival marking monsoon planting season
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <i className="fas fa-calendar-alt mt-1 mr-3 text-[#2C5F2D]"></i>
                    <div>
                      <span className="font-semibold">Khatarua (October)</span> - Harvest celebration with folk dances and traditional music
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <i className="fas fa-calendar-alt mt-1 mr-3 text-[#2C5F2D]"></i>
                    <div>
                      <span className="font-semibold">Uttarayani Fair (January)</span> - Winter gathering with cultural performances
                    </div>
                  </li>
                </ul>
              </div>
              
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1619451334461-6abac0789143?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80" 
                  alt="Festival celebration" 
                  className="rounded-lg shadow-lg w-full h-72 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AttractionsPage;
