import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import AboutPage from "./pages/About";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServicesPage from "@/pages/Services";
import HomePage from "@/pages/Home";
import KegiatanPage from "./pages/Kegiatan";
import ContactPage from "@/pages/Contact";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tentang" element={<AboutPage />} />
          <Route path="/layanan" element={<ServicesPage />} />
          <Route path="/kegiatan" element={<KegiatanPage />} />
          <Route path="/kontak" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        </Routes>
        <Footer />
        <FloatingWhatsApp />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
