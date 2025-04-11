import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import Home from "@/pages/home";
import About from "@/pages/about";
import Gallery from "@/pages/gallery";
import Attractions from "@/pages/attractions";
import Location from "@/pages/location";
import Contact from "@/pages/contact";
import News from "@/pages/news";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/attractions" component={Attractions} />
      <Route path="/location" component={Location} />
      <Route path="/contact" component={Contact} />
      <Route path="/news" component={News} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="font-body text-gray-800 bg-[#F4F1DE]">
        <Navbar />
        <Router />
        <Footer />
        <Toaster />
      </div>
    </QueryClientProvider>
  );
}

export default App;
