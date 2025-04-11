import HeroSection from "@/components/hero-section";
import VillageMap from "@/components/map/village-map";

const LocationPage = () => {
  return (
    <div>
      <HeroSection
        title="Location of"
        subtitle="Find your way to our hidden gem nestled in the Pithoragarh district of Uttarakhand, surrounded by majestic Himalayan peaks."
        imageUrl="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
        hasScrollDown={true}
        scrollToId="location-content"
      />

      <section id="location-content" className="py-20 bg-[#F4F1DE]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="font-['Caveat'] text-2xl text-[#6A8EAE]">Find Us</span>
            <h2 className="font-['Playfair_Display'] text-4xl font-bold mt-2 mb-4">Location & Directions</h2>
            <div className="w-24 h-1 bg-[#CB997E] mx-auto"></div>
            <p className="max-w-2xl mx-auto mt-6">Gogana village is located in Pithoragarh district of Uttarakhand, near Gurna. Here's how you can reach us.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
              <h3 className="font-['Playfair_Display'] text-2xl font-semibold mb-6">How to Reach</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mt-1 mr-4 w-12 h-12 flex-shrink-0 bg-[#2C5F2D] rounded-full flex items-center justify-center">
                    <i className="fas fa-plane text-white text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">By Air</h4>
                    <p>The nearest airport is Pantnagar Airport (PGH), approximately 240 km from Gogana. From there, hire a taxi or take a bus to Pithoragarh, then local transport to Gogana.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-4 w-12 h-12 flex-shrink-0 bg-[#2C5F2D] rounded-full flex items-center justify-center">
                    <i className="fas fa-train text-white text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">By Train</h4>
                    <p>Kathgodam Railway Station is the nearest railhead, about 180 km from Gogana. Regular bus and taxi services are available from Kathgodam to Pithoragarh.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-4 w-12 h-12 flex-shrink-0 bg-[#2C5F2D] rounded-full flex items-center justify-center">
                    <i className="fas fa-bus text-white text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">By Road</h4>
                    <p>Gogana is connected by road to major cities in Uttarakhand. Regular buses operate from Dehradun, Haldwani, and Almora to Pithoragarh. From Pithoragarh, local transport is available to Gogana.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-4 w-12 h-12 flex-shrink-0 bg-[#2C5F2D] rounded-full flex items-center justify-center">
                    <i className="fas fa-car text-white text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Local Transport</h4>
                    <p>From Pithoragarh town, shared jeeps and taxis can take you to Gurna, from where Gogana is a short 2 km journey. Local guides can assist with arrangements.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 border-t pt-6">
                <h4 className="font-semibold text-lg mb-3">Best Time to Visit</h4>
                <p>The ideal time to visit Gogana is from March to June and September to November when the weather is pleasant and views are clear. Monsoon (July-August) brings lush greenery but may pose travel challenges.</p>
              </div>
            </div>
            
            <VillageMap />
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="font-['Caveat'] text-2xl text-[#6A8EAE]">Stay With Us</span>
            <h2 className="font-['Playfair_Display'] text-4xl font-bold mt-2 mb-4">Accommodation Options</h2>
            <div className="w-24 h-1 bg-[#CB997E] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#F4F1DE] rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1513177582619-8c89022dbd6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Traditional homestay" 
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="font-['Playfair_Display'] text-xl font-semibold mb-3">Village Homestays</h3>
                <p className="mb-4">Experience authentic local hospitality by staying with village families. Enjoy home-cooked Kumaoni meals and learn about daily village life directly from your hosts.</p>
                <div className="flex items-center text-sm text-gray-600">
                  <i className="fas fa-rupee-sign mr-2"></i>
                  <span>Price range: ₹800-1500 per night</span>
                </div>
              </div>
            </div>
            
            <div className="bg-[#F4F1DE] rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Eco-cottages" 
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="font-['Playfair_Display'] text-xl font-semibold mb-3">Eco-Cottages</h3>
                <p className="mb-4">Stay in environmentally-friendly cottages built with local materials. These accommodations offer modern comforts while maintaining traditional architectural elements.</p>
                <div className="flex items-center text-sm text-gray-600">
                  <i className="fas fa-rupee-sign mr-2"></i>
                  <span>Price range: ₹1800-3000 per night</span>
                </div>
              </div>
            </div>
            
            <div className="bg-[#F4F1DE] rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1445019980597-93fa8acb246c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80" 
                alt="Camping sites" 
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="font-['Playfair_Display'] text-xl font-semibold mb-3">Nature Camping</h3>
                <p className="mb-4">For adventure enthusiasts, camping options are available in designated areas with basic facilities. Experience the night sky like never before under the clear mountain stars.</p>
                <div className="flex items-center text-sm text-gray-600">
                  <i className="fas fa-rupee-sign mr-2"></i>
                  <span>Price range: ₹500-1000 per night</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LocationPage;
