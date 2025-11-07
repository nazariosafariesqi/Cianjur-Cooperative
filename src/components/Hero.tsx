import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-koperasi.jpg";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Koperasi Sugih Jembar Rahayu - Bersama Membangun Kesejahteraan"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-accent/90 via-accent/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-5xl md:text-5xl font-bold text-primary-foreground mb-4 leading-tight">
            Bersama Membangun Kesejahteraan
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-4 font-semibold">
            
          </p>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl">
            Bergabunglah dengan koperasi terpercaya di Cianjur. Kami berkomitmen
            untuk meningkatkan kesejahteraan anggota melalui layanan keuangan
            yang transparan dan berbasis gotong royong.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <Button variant="hero" size="lg" onClick={() => navigate("/kontak")}>
              Daftar Sekarang
              <ArrowRight className="ml-2" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-background/10 backdrop-blur-sm border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-accent"
              onClick={() => navigate("/tentang")}
            >
              Pelajari Lebih Lanjut
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 grid grid-cols-3 gap-6 max-w-2xl">
            <div className="text-center animate-scale-in">
              <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2">
                15+
              </div>
              <div className="text-sm text-primary-foreground/80">
                Tahun Berpengalaman
              </div>
            </div>
            <div className="text-center animate-scale-in" style={{ animationDelay: "0.1s" }}>
              <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2">
                5000+
              </div>
              <div className="text-sm text-primary-foreground/80">
                Anggota Aktif
              </div>
            </div>
            <div className="text-center animate-scale-in" style={{ animationDelay: "0.2s" }}>
              <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2">
                50M+
              </div>
              <div className="text-sm text-primary-foreground/80">
                Aset Dikelola
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
