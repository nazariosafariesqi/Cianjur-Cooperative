import aboutImage from "@/assets/about-koperasi.jpg";
import { CheckCircle2 } from "lucide-react";

const About = () => {
  const values = [
    "Transparansi dalam setiap transaksi",
    "Kesejahteraan bersama anggota",
    "Profesional dan terpercaya",
    "Berbasis kearifan lokal"
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="animate-slide-up">
            <div className="relative rounded-2xl overflow-hidden shadow-[var(--shadow-card)] hover-lift">
              <img 
                src={aboutImage} 
                alt="Tim Koperasi Cianjur" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Tentang Kami</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Koperasi Cianjur didirikan dengan visi untuk memberdayakan masyarakat melalui sistem keuangan yang adil dan berkelanjutan. Sejak tahun 2008, kami telah melayani ribuan anggota dengan komitmen penuh terhadap transparansi dan kesejahteraan bersama.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Kami percaya bahwa kekuatan sejati terletak pada gotong royong dan kepercayaan. Setiap keputusan kami diambil dengan mempertimbangkan kepentingan seluruh anggota, bukan hanya keuntungan semata.
            </p>

            {/* Values List */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-4">Nilai-Nilai Kami:</h3>
              {values.map((value, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-3 animate-fade-in"
                  style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                >
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
