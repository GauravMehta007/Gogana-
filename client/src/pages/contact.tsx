import HeroSection from "@/components/hero-section";
import ContactForm from "@/components/contact-form";

const ContactPage = () => {
  return (
    <div>
      <HeroSection
        title="Contact"
        subtitle="Have questions about visiting Gogana? Interested in learning more about our village? We'd love to hear from you."
        imageUrl="https://images.unsplash.com/photo-1594394489098-ec5f9a8ebdce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
        hasScrollDown={true}
        scrollToId="contact-content"
      />

      <section id="contact-content" className="py-20 bg-[#F4F1DE]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="font-['Caveat'] text-2xl text-[#6A8EAE]">Get in Touch</span>
            <h2 className="font-['Playfair_Display'] text-4xl font-bold mt-2 mb-4">Contact Us</h2>
            <div className="w-24 h-1 bg-[#CB997E] mx-auto"></div>
            <p className="max-w-2xl mx-auto mt-6">Have questions about visiting Gogana? Interested in learning more about our village? We'd love to hear from you.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <ContactForm />
              
              <div className="mt-10">
                <h3 className="font-['Playfair_Display'] text-2xl font-semibold mb-6">Connect With Us</h3>
                <div className="flex justify-start space-x-4">
                  <a href="#" className="w-12 h-12 bg-[#2C5F2D] rounded-full flex items-center justify-center text-white hover:bg-opacity-90 transition-colors">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="w-12 h-12 bg-[#2C5F2D] rounded-full flex items-center justify-center text-white hover:bg-opacity-90 transition-colors">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#" className="w-12 h-12 bg-[#2C5F2D] rounded-full flex items-center justify-center text-white hover:bg-opacity-90 transition-colors">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="w-12 h-12 bg-[#2C5F2D] rounded-full flex items-center justify-center text-white hover:bg-opacity-90 transition-colors">
                    <i className="fab fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <h3 className="font-['Playfair_Display'] text-2xl font-semibold mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="mt-1 mr-4 w-12 h-12 flex-shrink-0 bg-[#6A8EAE] rounded-full flex items-center justify-center">
                      <i className="fas fa-map-marker-alt text-white text-xl"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Address</h4>
                      <p>Gogana Village, Near Gurna<br />Pithoragarh District<br />Uttarakhand, India</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mt-1 mr-4 w-12 h-12 flex-shrink-0 bg-[#6A8EAE] rounded-full flex items-center justify-center">
                      <i className="fas fa-phone-alt text-white text-xl"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Phone</h4>
                      <p>Village Office: +91 9876543210<br />Tourism Assistance: +91 9876543211</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mt-1 mr-4 w-12 h-12 flex-shrink-0 bg-[#6A8EAE] rounded-full flex items-center justify-center">
                      <i className="fas fa-envelope text-white text-xl"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Email</h4>
                      <p>info@goganavillage.com<br />tourism@goganavillage.com</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-[#6A8EAE] text-white rounded-lg shadow-lg p-8">
                <h3 className="font-['Playfair_Display'] text-2xl font-semibold mb-6">Visit Hours</h3>
                
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Village Open to Visitors:</span>
                    <span>Daily, 8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Information Center:</span>
                    <span>9:00 AM - 5:00 PM (Mon-Sat)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Local Marketplace:</span>
                    <span>10:00 AM - 7:00 PM (Wed-Sun)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Cultural Performances:</span>
                    <span>Weekends, 4:00 PM</span>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-white border-opacity-20">
                  <p className="font-medium">Note: Some activities may require prior booking. Please contact us in advance for group visits or special arrangements.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="font-['Caveat'] text-2xl text-[#6A8EAE]">Visitor Tips</span>
            <h2 className="font-['Playfair_Display'] text-4xl font-bold mt-2 mb-4">FAQs</h2>
            <div className="w-24 h-1 bg-[#CB997E] mx-auto"></div>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="bg-[#F4F1DE] p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-2">What is the best time to visit Gogana?</h3>
                <p>The ideal time to visit is from March to June and September to November when the weather is pleasant. Winters (December-February) can be very cold, while monsoon season (July-August) may have accessibility issues due to rain.</p>
              </div>
              
              <div className="bg-[#F4F1DE] p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-2">Are there medical facilities available in the village?</h3>
                <p>Gogana has a basic medical aid center for minor issues. For serious medical needs, the nearest hospital is in Pithoragarh town, about 30 kilometers away. We recommend carrying basic medications if you have specific requirements.</p>
              </div>
              
              <div className="bg-[#F4F1DE] p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-2">How is the mobile network and internet connectivity?</h3>
                <p>Mobile connectivity is available but can be spotty in some areas. BSNL and Jio networks work relatively better. Most homestays and accommodations offer basic WiFi, but the speed may be limited.</p>
              </div>
              
              <div className="bg-[#F4F1DE] p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-2">What should I pack for a visit to Gogana?</h3>
                <p>We recommend packing layers as the mountain weather can change quickly. Comfortable walking shoes, sunscreen, a hat, and a light rain jacket are essential. During winter months (November-February), bring heavy woolens.</p>
              </div>
              
              <div className="bg-[#F4F1DE] p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-2">Are there any specific cultural norms visitors should be aware of?</h3>
                <p>Visitors are requested to dress modestly, especially when visiting temples or participating in cultural events. Always ask permission before photographing locals. Removing shoes before entering homes and temples is customary.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
