import { Link } from "wouter";
import { useState } from "react";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      await apiRequest("POST", "/api/subscribe", {
        email,
        subscriptionDate: new Date().toISOString()
      });
      
      toast({
        title: "Subscribed!",
        description: "You've successfully subscribed to our newsletter",
      });
      
      setEmail("");
    } catch (error) {
      toast({
        title: "Subscription failed",
        description: error instanceof Error ? error.message : "Please try again later",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="mb-4 flex items-center">
              <span className="font-['Playfair_Display'] font-bold text-2xl">Gogana</span>
              <span className="font-['Caveat'] text-xl ml-1">Village</span>
            </div>
            <p className="text-gray-400 mb-6">
              Experience the authentic Himalayan village life in Uttarakhand's Pithoragarh district.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-[#CB997E] transition-colors">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-white hover:text-[#CB997E] transition-colors">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-white hover:text-[#CB997E] transition-colors">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-white hover:text-[#CB997E] transition-colors">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-400 hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/attractions" className="text-gray-400 hover:text-white transition-colors">
                  Attractions
                </Link>
              </li>
              <li>
                <Link href="/location" className="text-gray-400 hover:text-white transition-colors">
                  Location
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Useful Information</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/attractions" className="text-gray-400 hover:text-white transition-colors">
                  Travel Guide
                </Link>
              </li>
              <li>
                <Link href="/location" className="text-gray-400 hover:text-white transition-colors">
                  Accommodation
                </Link>
              </li>
              <li>
                <Link href="/location" className="text-gray-400 hover:text-white transition-colors">
                  Local Transport
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Weather Updates
                </Link>
              </li>
              <li>
                <Link href="/attractions" className="text-gray-400 hover:text-white transition-colors">
                  Nearby Attractions
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt mt-1 mr-3 text-[#CB997E]"></i>
                <span className="text-gray-400">
                  Gogana Village, Near Gurna<br />Pithoragarh, Uttarakhand
                </span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-phone-alt mt-1 mr-3 text-[#CB997E]"></i>
                <span className="text-gray-400">+91 9876543210</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-envelope mt-1 mr-3 text-[#CB997E]"></i>
                <span className="text-gray-400">info@goganavillage.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="py-8 border-t border-gray-800">
          <form onSubmit={handleSubscribe} className="max-w-md mx-auto flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-4 text-center">Subscribe to our Newsletter</h3>
            <div className="flex w-full">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="px-4 py-2 rounded-l-md w-full focus:outline-none text-gray-800"
                required
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#2C5F2D] hover:bg-opacity-90 px-4 py-2 rounded-r-md transition-colors disabled:opacity-70"
              >
                {isSubmitting ? "Subscribing..." : "Subscribe"}
              </button>
            </div>
          </form>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Gogana Village. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <Link href="/about" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/about" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/" className="hover:text-white transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
