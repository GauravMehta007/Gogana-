import AttractionCard from "@/components/attraction-card";
import FeatureCard from "@/components/feature-card";
import HeroSection from "@/components/hero-section";
import NewsCard from "@/components/news-card";
import { Attraction, News } from "@shared/schema";

const attractions: Attraction[] = [
  {
    id: 1,
    title: "Mountain Views",
    description: "Breathtaking panoramic views of the Himalayan range",
    imageUrl:
      "https://images.unsplash.com/photo-1527579584910-275bae7f0d06?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
  },
  {
    id: 2,
    title: "Cultural Sites",
    description: "Visit traditional Kumaoni temples and heritage sites",
    imageUrl:
      "https://images.unsplash.com/photo-1599031567103-1e7c71f4db3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1968&q=80",
  },
  {
    id: 3,
    title: "Adventure Trails",
    description: "Explore hiking trails with stunning mountain scenery",
    imageUrl:
      "https://images.unsplash.com/photo-1601902349453-b6c3bc6096c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1957&q=80",
  },
];

const newsItems: News[] = [
  {
    id: 1,
    title: "Spring Festival Celebrations",
    content: "Join us for the annual Phool Dei festival this March",
    date: "March 15, 2025",
    imageUrl:
      "https://images.unsplash.com/photo-1599031567103-1e7c71f4db3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1968&q=80",
  },
  {
    id: 2,
    title: "New Community Projects",
    content: "Learn about our sustainable development initiatives",
    date: "April 1, 2025",
    imageUrl:
      "https://images.unsplash.com/photo-1527579584910-275bae7f0d06?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
  },
  {
    id: 3,
    title: "Cultural Workshops",
    content: "Upcoming traditional craft and music workshops",
    date: "April 15, 2025",
    imageUrl:
      "https://images.unsplash.com/photo-1601902349453-b6c3bc6096c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1957&q=80",
  },
];

const Home = () => {
  const featuredAttractions = attractions.slice(0, 3);
  const latestNews = newsItems.slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        title="Welcome to"
        subtitle="A hidden gem nestled in the heart of Uttarakhand's majestic Pithoragarh district, where nature's beauty meets rich cultural heritage."
        buttonText="Discover Gogana"
        buttonHref="/about"
        hasScrollDown={true}
        scrollToId="features"
      />

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="font-['Caveat'] text-2xl text-[#6A8EAE]">
              Our Village
            </span>
            <h2 className="font-['Playfair_Display'] text-4xl font-bold mt-2 mb-4">
              About Gogana
            </h2>
            <div className="w-24 h-1 bg-[#CB997E] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              title="Natural Beauty"
              description="Surrounded by majestic Himalayan peaks and lush green valleys"
              icon="fas fa-mountain"
              iconBgColor="#2C5F2D"
            />
            <FeatureCard
              title="Rich Culture"
              description="Experience traditional Kumaoni culture through our festivals, folk music, dances, cuisine, and age-old customs preserved through generations."
              icon="fas fa-music"
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

      {/* Attractions Section */}
      <section className="py-20 bg-[#F4F1DE]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="font-['Caveat'] text-2xl text-[#6A8EAE]">
              Explore
            </span>
            <h2 className="font-['Playfair_Display'] text-4xl font-bold mt-2 mb-4">
              Featured Attractions
            </h2>
            <div className="w-24 h-1 bg-[#CB997E] mx-auto"></div>
            <p className="max-w-2xl mx-auto mt-6">
              Discover the many natural wonders and enriching experiences that
              await you in and around Gogana village.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredAttractions.map((attraction) => (
              <AttractionCard key={attraction.id} attraction={attraction} />
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="font-['Caveat'] text-2xl text-[#6A8EAE]">
              Visual Journey
            </span>
            <h2 className="font-['Playfair_Display'] text-4xl font-bold mt-2 mb-4">
              Gallery Highlights
            </h2>
            <div className="w-24 h-1 bg-[#CB997E] mx-auto"></div>
            <p className="max-w-2xl mx-auto mt-6">
              Explore the stunning landscapes, vibrant culture, and daily life
              of Gogana village through our collection of photographs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <img
                src="https://images.unsplash.com/photo-1527579584910-275bae7f0d06?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                alt="Mountain landscapes"
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h3 className="text-white text-2xl font-['Playfair_Display'] font-semibold">
                  Landscapes
                </h3>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <img
                src="https://images.unsplash.com/photo-1599031567103-1e7c71f4db3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1968&q=80"
                alt="Cultural traditions"
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h3 className="text-white text-2xl font-['Playfair_Display'] font-semibold">
                  Culture
                </h3>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <img
                src="https://images.unsplash.com/photo-1601902349453-b6c3bc6096c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1957&q=80"
                alt="Village lifestyle"
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h3 className="text-white text-2xl font-['Playfair_Display'] font-semibold">
                  Lifestyle
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-20 bg-[#F4F1DE]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="font-['Caveat'] text-2xl text-[#6A8EAE]">
              Stay Informed
            </span>
            <h2 className="font-['Playfair_Display'] text-4xl font-bold mt-2 mb-4">
              Latest News
            </h2>
            <div className="w-24 h-1 bg-[#CB997E] mx-auto"></div>
            <p className="max-w-2xl mx-auto mt-6">
              Keep up with the latest happenings, events, and developments in
              Gogana village.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {latestNews.map((newsItem) => (
              <NewsCard key={newsItem.id} news={newsItem} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
