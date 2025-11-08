import heroImage from "@/assets/hero-koperasi.jpg";
import domba from "@/assets/domba.jpg";
import bibit from "@/assets/bibit.jpg";
import ikan from "@/assets/ikan.jpg";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden"
    >
      {/* Background Image Positioned Bottom Right */}
      <div className="absolute bottom-0 -right-8 z-0">
        <img
          src={heroImage}
          alt="Koperasi Sugih Jembar Rahayu"
          className="w-[820px] h-auto object-contain opacity-85"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl animate-fade-in ml-8">
          <h1 className="text-5xl md:text-5xl font-bold text-black mb-4 leading-tight">
            Bersama Membangun Kesejahteraan
          </h1>
          <p className="text-xl md:text-2xl text-black/90 mb-4 font-semibold"></p>
          <p className="text-lg md:text-xl text-black/80 mb-8 max-w-2xl">
            Bergabunglah dengan koperasi terpercaya di Cianjur. Kami berkomitmen
            untuk meningkatkan kesejahteraan anggota melalui layanan keuangan
            yang transparan dan berbasis gotong royong.
          </p>

          {/* CTA Button */}
          <div className="flex flex-wrap gap-4">
            <Button
              variant="outline"
              size="lg"
              className="bg-white border-green-600 text-green-700 hover:bg-green-600 hover:text-white transition-colors duration-300 flex items-center"
              onClick={() => navigate("/tentang")}
            >
              Pelajari Lebih Lanjut
              <ArrowRight className="ml-2" />
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 grid grid-cols-3 gap-6 max-w-2xl">
            <div className="text-center animate-scale-in">
              <div className="text-3xl md:text-4xl font-bold text-black mb-2">
                15+
              </div>
              <div className="text-sm text-black/80">Tahun Berpengalaman</div>
            </div>
            <div
              className="text-center animate-scale-in"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="text-3xl md:text-4xl font-bold text-black mb-2">
                5000+
              </div>
              <div className="text-sm text-black/80">Anggota Aktif</div>
            </div>
            <div
              className="text-center animate-scale-in"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="text-3xl md:text-4xl font-bold text-black mb-2">
                50M+
              </div>
              <div className="text-sm text-black/80">Aset Dikelola</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-black/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-black/50 rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
};

const UnitUsahaSection = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-green-500 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
          Ada apa saja di Koperasi Sugih Jembar Rahayu?
        </h2>
        <p className="text-center text-white mb-12 text-lg">
          Koperasi Sugih Jembar Rahayu memiliki beberapa unit usaha
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Domba */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={domba}
              alt="Unit Usaha Domba"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-black mb-2">
                Unit Usaha Domba
              </h3>
              <p className="text-black text-sm">
                Pengelolaan peternakan domba untuk mendukung ketahanan pangan
                dan ekonomi anggota.
              </p>
            </div>
          </div>

          {/* Bibit Pohon */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={bibit}
              alt="Unit Bibit Pohon"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-black mb-2">
                Unit Bibit Pohon
              </h3>
              <p className="text-black text-sm">
                Penyediaan bibit pohon unggul untuk penghijauan dan pertanian
                berkelanjutan.
              </p>
            </div>
          </div>

          {/* Ikan Nila */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={ikan}
              alt="Unit Usaha Ikan Nila"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-black mb-2">
                Unit Usaha Ikan Nila
              </h3>
              <p className="text-black text-sm">
                Budidaya ikan nila sebagai sumber protein dan pendapatan anggota
                koperasi.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-12 text-center justify-center">
          <button
            onClick={() => navigate("/layanan")}
            className="px-6 py-3 bg-white text-green-700 rounded-lg hover:bg-green-700
            hover:text-white transition-colors duration-300 flex items-center justify-center gap-2 mx-auto"
          >
            Selengkapnya
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

// ✅ Export satu komponen utama
const Hero = () => {
  return (
    <>
      <HeroSection />
      <UnitUsahaSection />
    </>
  );
};

export default Hero;
