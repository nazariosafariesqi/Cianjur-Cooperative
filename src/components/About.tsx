import aboutImage from "@/assets/about-koperasi.jpg";
import { CheckCircle2 } from "lucide-react";

const About = () => {
  const values = [
    "Transparansi dalam setiap transaksi",
    "Kesejahteraan bersama anggota",
    "Profesional dan terpercaya",
    "Berbasis kearifan lokal",
  ];

  const missions = [
    "Memproduksi barang berdaya saing tinggi dan berkualitas ekspor",
    "Menyediakan peralatan dan bahan-bahan yang dibutuhkan untuk memproduksi barang",
    "Menampung hasil produksi anggota, menyempurnakannya, dan mendistribusikannya",
  ];

  const goals = [
    "Meningkatkan kesejahteraan anggota melalui distribusi produk",
    "Mendukung produksi lokal yang berkelanjutan",
    "Membuka akses pasar dalam dan luar negeri bagi anggota",
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
          <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
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
            <div className="space-y-4 mb-10">
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

            {/* Visi */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-2">Visi</h3>
              <p className="text-muted-foreground leading-relaxed">
                Menjadi koperasi produksi yang mampu memproduksi dan/atau menampung hasil produksi anggota, serta mendistribusikan produk baik dalam negeri maupun luar negeri untuk kesejahteraan anggota.
              </p>
            </div>

            {/* Misi */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Misi</h3>
              <ul className="space-y-3 text-muted-foreground list-none">
                {missions.map((mission, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1" />
                    <span>{mission}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tujuan */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Tujuan</h3>
              <ul className="space-y-3 text-muted-foreground list-none">
                {goals.map((goal, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1" />
                    <span>{goal}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
