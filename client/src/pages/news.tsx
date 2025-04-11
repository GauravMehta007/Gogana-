import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import HeroSection from "@/components/hero-section";
import NewsCard from "@/components/news-card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "@/components/ui/card";
import type { News } from "@shared/schema";

const NewsPage = () => {
  const { data: newsItems, isLoading } = useQuery<News[]>({
    queryKey: ["/api/news"],
  });

  return (
    <div>
      <HeroSection
        title="News from"
        subtitle="Stay updated with the latest happenings, events, and developments in our vibrant mountain village."
        hasScrollDown={true}
        scrollToId="news-content"
      />

      <section id="news-content" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="font-['Caveat'] text-2xl text-[#6A8EAE]">
              Stay Informed
            </span>
            <h2 className="font-['Playfair_Display'] text-4xl font-bold mt-2 mb-4">
              Village News & Updates
            </h2>
            <div className="w-24 h-1 bg-[#CB997E] mx-auto"></div>
            <p className="max-w-2xl mx-auto mt-6">
              Keep up with the latest happenings, events, and developments in
              Gogana village.
            </p>
          </div>

          {isLoading ? (
            <div className="grid md:grid-cols-3 gap-8">
              {Array(3)
                .fill(0)
                .map((_, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-lg overflow-hidden shadow-lg"
                  >
                    <Skeleton className="w-full h-48" />
                    <div className="p-6">
                      <Skeleton className="h-4 w-1/3 mb-3" />
                      <Skeleton className="h-6 w-3/4 mb-3" />
                      <Skeleton className="h-4 w-full mb-2" />
                      <Skeleton className="h-4 w-full mb-2" />
                      <Skeleton className="h-4 w-2/3 mb-4" />
                      <Skeleton className="h-4 w-1/4" />
                    </div>
                  </div>
                ))}
            </div>
          ) : newsItems && newsItems.length > 0 ? (
            <div className="grid md:grid-cols-3 gap-8">
              {newsItems.map((newsItem) => (
                <NewsCard key={newsItem.id} news={newsItem} />
              ))}
            </div>
          ) : (
            <Card className="max-w-md mx-auto">
              <CardContent className="p-6 text-center">
                <h3 className="font-['Playfair_Display'] text-xl font-semibold mb-3">
                  No News Available
                </h3>
                <p className="text-gray-600">
                  Check back soon for updates from Gogana village.
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      <section className="py-20 bg-[#F4F1DE]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="font-['Caveat'] text-2xl text-[#6A8EAE]">
              Local Events
            </span>
            <h2 className="font-['Playfair_Display'] text-4xl font-bold mt-2 mb-4">
              Upcoming Village Events
            </h2>
            <div className="w-24 h-1 bg-[#CB997E] mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-8">
              <div className="space-y-8">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-full md:w-32 flex-shrink-0">
                    <div className="bg-[#2C5F2D] text-white rounded-lg p-3 text-center">
                      <span className="block text-sm font-medium">NOV</span>
                      <span className="block text-3xl font-bold">12-14</span>
                      <span className="block text-sm font-medium">2023</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-['Playfair_Display'] text-xl font-semibold mb-2">
                      Annual Cultural Festival
                    </h3>
                    <p className="mb-4">
                      Join us for the upcoming Gogana Cultural Festival
                      featuring traditional performances, crafts exhibitions,
                      and authentic Kumaoni cuisine. Special performances from
                      neighboring village artists.
                    </p>
                    <div className="flex items-center text-sm text-gray-600">
                      <i className="fas fa-map-marker-alt mr-2"></i>
                      <span>Village Center, Gogana</span>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-8 flex flex-col md:flex-row gap-6">
                  <div className="w-full md:w-32 flex-shrink-0">
                    <div className="bg-[#6A8EAE] text-white rounded-lg p-3 text-center">
                      <span className="block text-sm font-medium">DEC</span>
                      <span className="block text-3xl font-bold">21</span>
                      <span className="block text-sm font-medium">2023</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-['Playfair_Display'] text-xl font-semibold mb-2">
                      Winter Solstice Celebration
                    </h3>
                    <p className="mb-4">
                      A traditional celebration of the winter solstice with
                      bonfire, folk music, and special rituals to welcome longer
                      days. Warm beverages and local delicacies will be served.
                    </p>
                    <div className="flex items-center text-sm text-gray-600">
                      <i className="fas fa-map-marker-alt mr-2"></i>
                      <span>Community Grounds, Gogana Village</span>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-8 flex flex-col md:flex-row gap-6">
                  <div className="w-full md:w-32 flex-shrink-0">
                    <div className="bg-[#CB997E] text-white rounded-lg p-3 text-center">
                      <span className="block text-sm font-medium">JAN</span>
                      <span className="block text-3xl font-bold">15</span>
                      <span className="block text-sm font-medium">2024</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-['Playfair_Display'] text-xl font-semibold mb-2">
                      Uttarayani Fair
                    </h3>
                    <p className="mb-4">
                      Annual winter gathering with cultural performances,
                      traditional handicrafts market, and community feasting. A
                      celebration of local heritage and customs.
                    </p>
                    <div className="flex items-center text-sm text-gray-600">
                      <i className="fas fa-map-marker-alt mr-2"></i>
                      <span>Riverbank Area, Near Gogana Temple</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              className="bg-[#2C5F2D] hover:bg-opacity-90 text-white font-medium py-3 px-6 rounded-md transition-all shadow-lg hover:shadow-xl"
            >
              <Link href="/contact">
                Contact for Event Information{" "}
                <i className="fas fa-calendar-alt ml-2"></i>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <span className="font-['Caveat'] text-2xl text-[#6A8EAE]">
                  Community Updates
                </span>
                <h2 className="font-['Playfair_Display'] text-3xl font-bold mt-2 mb-4">
                  Village Improvement Projects
                </h2>
                <div className="w-16 h-1 bg-[#CB997E] mb-6"></div>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="mt-1 mr-4 w-8 h-8 flex-shrink-0 bg-[#2C5F2D] rounded-full flex items-center justify-center">
                      <i className="fas fa-check text-white text-sm"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">
                        Road Renovation
                      </h4>
                      <p className="text-gray-700">
                        Recently completed road improvements connecting Gogana
                        to the main highway, making travel more convenient.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="mt-1 mr-4 w-8 h-8 flex-shrink-0 bg-[#2C5F2D] rounded-full flex items-center justify-center">
                      <i className="fas fa-check text-white text-sm"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">
                        Solar Power Installation
                      </h4>
                      <p className="text-gray-700">
                        New solar panels installed in the village center to
                        provide sustainable electricity for community
                        facilities.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="mt-1 mr-4 w-8 h-8 flex-shrink-0 bg-[#6A8EAE] rounded-full flex items-center justify-center">
                      <i className="fas fa-clock text-white text-sm"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">
                        Water Conservation System
                      </h4>
                      <p className="text-gray-700">
                        Ongoing project to improve water harvesting and storage
                        capabilities for the village. Expected completion in
                        March 2024.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="mt-1 mr-4 w-8 h-8 flex-shrink-0 bg-[#6A8EAE] rounded-full flex items-center justify-center">
                      <i className="fas fa-clock text-white text-sm"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">
                        Community Center Expansion
                      </h4>
                      <p className="text-gray-700">
                        Plans to expand the village community center to
                        accommodate more cultural activities and visitor
                        information services.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <img
                  src="https://images.unsplash.com/photo-1606768666853-403c90a981ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
                  alt="Village improvement project"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#2C5F2D] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-['Playfair_Display'] text-3xl font-bold mb-4">
              Subscribe for News Updates
            </h2>
            <p className="mb-8">
              Get the latest news, events information, and village updates
              delivered directly to your inbox.
            </p>

            <div className="flex flex-col sm:flex-row gap-2 justify-center">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-3 rounded-md w-full sm:w-96 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#CB997E]"
              />
              <Button className="bg-[#CB997E] hover:bg-opacity-90 px-6 py-3 rounded-md transition-colors">
                Subscribe
              </Button>
            </div>

            <p className="text-sm mt-4 text-white text-opacity-80">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsPage;
