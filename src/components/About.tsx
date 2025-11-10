import aboutImage from "@/assets/about-koperasi.jpg";
import logoImage from "@/assets/logo-koperasi.jpg";
import { Star, Target } from "lucide-react";

const About = () => {
  return (
    <>
      {/* Section 1: Gambar Header */}
      <section className="relative h-[500px] w-full overflow-hidden">
        <img
          src={aboutImage}
          alt="Tentang Koperasi"
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/10 to-black/100" />
        <div className="absolute bottom-12 left-8 z-10 max-w-xl">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Tentang Kami
          </h2>
          <p className="text-lg text-white/90">
            Kenalan lebih dekat dengan Koperasi Sugih Jembar Rahayu
          </p>
        </div>
      </section>

      {/* Section 2: Visi & Misi */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Visi */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
              <div className="flex items-start gap-4">
                <Star className="w-10 h-10 text-yellow-400 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold text-black mb-2">Visi</h3>
                  <p className="text-black/80 leading-relaxed">
                    Menjadi koperasi produksi yang mampu memberikan manfaat bagi
                    anggota dan masyarakat sekitar, serta menjadi koperasi yang
                    mandiri dan profesional dalam pengelolaannya.
                  </p>
                </div>
              </div>
            </div>

            {/* Misi */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
              <div className="flex items-start gap-4">
                <Target className="w-10 h-10 text-red-500 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold text-black mb-2">Misi</h3>
                  <ul className="space-y-2 text-black/80 list-disc pl-4">
                    <li>
                      Memproduksi barang-barang seefisien mungkin kualitasnya.
                    </li>
                    <li>
                      Menyediakan peralatan dan bahan-bahan yang diperlukan
                      dalam usaha.
                    </li>
                    <li>
                      Menampung hasil produksi anggota, memasarkan, dan
                      mendistribusikannya.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Arti Logo */}
      <section className="py-20 bg-green-500">
        <div className="container mx-auto px-4">
          {/* Judul Tengah */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Arti Logo
            </h2>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Arti kiasan Logo Koperasi Sugih Jembar Rahayu
            </h2>
          </div>

          {/* Konten Dua Kolom */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Logo di kiri */}
            <div className="flex justify-center">
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
                <img
                  src={logoImage}
                  alt="Logo Koperasi Sugih Jembar Rahayu"
                  className="w-[300px] h-auto"
                />
              </div>
            </div>

            {/* Arti Kiasan di kanan */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Arti Kiasan
              </h3>
              <p className="text-white leading-relaxed">
                Logo Koperasi Sugih Jembar Rahayu menggambarkan semangat
                kebersamaan, pertumbuhan, dan keberlanjutan. Bentuk manusia yang
                terbuka melambangkan keterlibatan aktif anggota, sedangkan
                elemen daun dan warna hijau menunjukkan komitmen terhadap
                kearifan lokal dan kesejahteraan lingkungan.
              </p>
              <p className="text-white leading-relaxed mt-4">
                Setiap elemen dalam logo memiliki makna simbolik: gerakan
                melingkar mencerminkan gotong royong, warna biru melambangkan
                kepercayaan, dan bentuk dinamis menunjukkan adaptabilitas
                koperasi dalam menghadapi tantangan zaman.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Judul Tengah */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-2">
              Struktur Organisasi
            </h2>
            <p className="text-lg text-black/70">
              Susunan Pengurus Koperasi Sugih Jembar Rahayu
            </p>
          </div>

          {/* Grid Struktur */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {Array.from({ length: 5 }).map((_, index) => (
              <div
                key={index}
                className="bg-green-50 p-6 rounded-xl shadow-md text-center border border-gray-200"
              >
                {/* Placeholder Icon */}
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-green-200 flex items-center justify-center">
                  <span className="text-4xl">👤</span>
                </div>
                {/* Nama & Jabatan */}
                <h3 className="text-xl font-semibold text-black mb-1">Nama</h3>
                <p className="text-black/70">Jabatan</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
