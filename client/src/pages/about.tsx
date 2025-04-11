import HeroSection from "@/components/hero-section";
import FeatureCard from "@/components/feature-card";

const About = () => {
  return (
    <div>
      <HeroSection
        title="About"
        subtitle="Discover the rich heritage, cultural tapestry, and natural beauty of our Himalayan village."
        imageUrl="https://images.unsplash.com/photo-1531769232786-1a2321bfdb86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
        hasScrollDown={true}
        scrollToId="about-content"
      />

      <section id="about-content" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="font-['Caveat'] text-2xl text-[#6A8EAE]">Our Village</span>
            <h2 className="font-['Playfair_Display'] text-4xl font-bold mt-2 mb-4">About Gogana</h2>
            <div className="w-24 h-1 bg-[#CB997E] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="font-['Playfair_Display'] text-2xl font-semibold mb-4">A Village with Rich Heritage</h3>
              <p className="mb-4">
                Nestled in the picturesque landscapes of Uttarakhand's Pithoragarh district near Gurna, Gogana is a tranquil village that embodies the authentic Himalayan way of life. Our community preserves centuries-old traditions while embracing the natural beauty that surrounds us.
              </p>
              <p className="mb-4">
                Gogana's history dates back generations, with inhabitants who have lived in harmony with nature, developing unique cultural practices, architecture, and agricultural techniques adapted to mountain living.
              </p>
              
              <h3 className="font-['Playfair_Display'] text-2xl font-semibold mb-4 mt-8">Cultural Tapestry</h3>
              <p>
                Our village celebrates seasonal festivals that mark agricultural cycles and religious observances. The community maintains traditional crafts including wool weaving, wood carving, and unique cuisine that uses local ingredients from our mountainous terrain.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1531769232786-1a2321bfdb86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
                alt="Traditional village houses" 
                className="rounded-lg shadow-lg h-48 w-full object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1601128603239-01dd73cb05e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
                alt="Local villagers" 
                className="rounded-lg shadow-lg h-48 w-full object-cover mt-8"
              />
              <img 
                src="https://images.unsplash.com/photo-1518538861321-324287f27fb5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
                alt="Agricultural practices" 
                className="rounded-lg shadow-lg h-48 w-full object-cover mt-4"
              />
              <img 
                src="https://images.unsplash.com/photo-1571993004081-4569858e32db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
                alt="Traditional crafts" 
                className="rounded-lg shadow-lg h-48 w-full object-cover"
              />
            </div>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <FeatureCard
              title="Natural Beauty"
              description="Surrounded by majestic Himalayan peaks, lush forests, and pristine streams, Gogana offers breathtaking views in every direction."
              icon="fas fa-mountain"
              iconBgColor="#2C5F2D"
            />
            
            <FeatureCard
              title="Rich Culture"
              description="Experience traditional Kumaoni culture through our festivals, folk music, dances, cuisine, and age-old customs preserved through generations."
              icon="fas fa-landmark"
              iconBgColor="#6A8EAE"
            />
            
            <FeatureCard
              title="Authentic Living"
              description="Witness authentic mountain village life with traditional architecture, sustainable farming practices, and community-centered lifestyle."
              icon="fas fa-home"
              iconBgColor="#CB997E"
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#F4F1DE]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="font-['Caveat'] text-2xl text-[#6A8EAE]">Our Traditions</span>
            <h2 className="font-['Playfair_Display'] text-4xl font-bold mt-2 mb-4">Cultural Heritage</h2>
            <div className="w-24 h-1 bg-[#CB997E] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1599031567103-1e7c71f4db3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1968&q=80" 
                alt="Cultural celebration" 
                className="rounded-lg shadow-lg w-full object-cover h-[400px]"
              />
            </div>
            
            <div>
              <h3 className="font-['Playfair_Display'] text-2xl font-semibold mb-6">Festivals & Celebrations</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mt-1 mr-4 w-12 h-12 flex-shrink-0 bg-[#2C5F2D] rounded-full flex items-center justify-center">
                    <i className="fas fa-calendar-alt text-white text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Phool Dei (March)</h4>
                    <p>Spring flower festival celebrating the arrival of new blossoms. Children collect flowers and offer them at doorsteps as a symbol of prosperity.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-4 w-12 h-12 flex-shrink-0 bg-[#2C5F2D] rounded-full flex items-center justify-center">
                    <i className="fas fa-calendar-alt text-white text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Harela (July)</h4>
                    <p>Agricultural festival marking monsoon planting season. Seeds are sown in small pots and worshipped as they sprout, symbolizing the bond with nature.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-4 w-12 h-12 flex-shrink-0 bg-[#2C5F2D] rounded-full flex items-center justify-center">
                    <i className="fas fa-calendar-alt text-white text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Khatarua (October)</h4>
                    <p>Harvest celebration with folk dances and traditional music. The entire village gathers for communal meals featuring the new harvest.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-4 w-12 h-12 flex-shrink-0 bg-[#2C5F2D] rounded-full flex items-center justify-center">
                    <i className="fas fa-calendar-alt text-white text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Uttarayani Fair (January)</h4>
                    <p>Winter gathering with cultural performances, celebrating the northward journey of the sun with traditional rituals and community bonding.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="font-['Caveat'] text-2xl text-[#6A8EAE]">Our People</span>
            <h2 className="font-['Playfair_Display'] text-4xl font-bold mt-2 mb-4">Community Life</h2>
            <div className="w-24 h-1 bg-[#CB997E] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#F4F1DE] rounded-lg shadow-lg p-8">
              <div className="w-16 h-16 bg-[#6A8EAE] rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-users text-white text-2xl"></i>
              </div>
              <h3 className="font-['Playfair_Display'] text-xl font-semibold mb-4">Social Structure</h3>
              <p>The village maintains strong community bonds through traditional social structures, where village elders provide guidance and families support each other through cooperative work and shared celebrations.</p>
            </div>
            
            <div className="bg-[#F4F1DE] rounded-lg shadow-lg p-8">
              <div className="w-16 h-16 bg-[#6A8EAE] rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-leaf text-white text-2xl"></i>
              </div>
              <h3 className="font-['Playfair_Display'] text-xl font-semibold mb-4">Sustainable Practices</h3>
              <p>For generations, the people of Gogana have practiced sustainable agriculture, water conservation, and resource management, adapting traditional knowledge to preserve the delicate mountain ecosystem.</p>
            </div>
            
            <div className="bg-[#F4F1DE] rounded-lg shadow-lg p-8">
              <div className="w-16 h-16 bg-[#6A8EAE] rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-hands-helping text-white text-2xl"></i>
              </div>
              <h3 className="font-['Playfair_Display'] text-xl font-semibold mb-4">Hospitality</h3>
              <p>Known for their warmth and generosity, Gogana's residents welcome visitors with traditional hospitality, sharing their homes, meals, and stories with those who come to experience our village life and culture.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
