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

      {/* Section Sejarah */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          {/* Judul */}
          <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-6 border-b-2 border-green-500 pb-2">
            Sejarah Koperasi Sugih Jembar Rahayu
          </h2>

          {/* Isi Sejarah */}
          <div className="max-w-4xl mx-auto text-black/80 leading-relaxed space-y-6 text-justify">
            <p>
              Koperasi Sugih Jembar Rahayu berdiri pada 12 Desember 2024 sebagai
              wujud kesepakatan bersama para pendiri untuk membangun usaha
              kolektif yang berangkat dari potensi lokal. Koperasi ini dibentuk
              dengan semangat kebersamaan dan gotong royong, sebagai sarana
              untuk memperkuat ekonomi anggota yang sebagian besar bergerak di
              sektor pertanian, peternakan, dan perikanan.
            </p>
            <p>
              Untuk memberikan kepastian hukum dalam menjalankan kegiatan usaha,
              Koperasi Sugih Jembar Rahayu telah memperoleh pengesahan resmi
              pada 11 Februari 2025 melalui Akta Notaris Kusnadi, S.H., M.H.,
              M.Kn. Nomor 49 Tahun 2025. Sejak disahkan sebagai koperasi
              produsen, koperasi ini mulai menata kelembagaan dan arah usaha
              secara bertahap dengan mengedepankan prinsip profesionalisme dan
              kepercayaan antar anggota.
            </p>
            <p>
              Berkedudukan di Kabupaten Cianjur, Koperasi Sugih Jembar Rahayu
              memfokuskan kegiatan usahanya pada pengelolaan, produksi, dan
              pemasaran hasil pertanian, peternakan, dan perikanan. Koperasi
              hadir untuk membantu anggota meningkatkan kapasitas produksi,
              kualitas hasil usaha, serta memperluas akses pasar melalui kerja
              sama dan pengelolaan yang terorganisir.
            </p>

            {/* Nama Pendiri */}
            <div>
              <h3 className="text-xl font-semibold text-black mb-2">
                Pendiri Koperasi:
              </h3>
              <ul className="grid grid-cols-2 gap-x-6 gap-y-2 list-disc pl-4">
                <li>Iyat Sudrajat</li>
                <li>Muhamad Ahya</li>
                <li>Ahmad Dede Daelami</li>
                <li>Ramadhan Subakti</li>
                <li>Rudi Widiana</li>
                <li>Dudum Dumyati</li>
                <li>Amir Sarifudin</li>
                <li>Hasan Sopandi</li>
                <li>Diyanto Hardiyanto</li>
                <li>Buhori Muslim</li>
                <li>Wahyu Suhadi</li>
                <li>Maman</li>
                <li>Moh Supyani</li>
                <li>Wahyudin</li>
                <li>Ai Aisyah</li>
                <li>Kokom Widaningsih</li>
              </ul>
            </div>

            <p>
              Dengan daerah kerja di wilayah Jawa Barat, koperasi ini terus
              berkembang sebagai wadah usaha bersama yang diharapkan mampu
              memberikan manfaat nyata bagi anggota dan masyarakat luas.
            </p>
          </div>
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
                    Menjadi koperasi produksi yang mampu memproduksi dan/atau
                    menampung hasil produksi anggota yang selanjutnya
                    mendistribusikan produk baik dalam negeri maupun luar negeri
                    untuk kesejahteraan anggota.
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
                      Memproduksi barang berdaya saing tinggi dan berkualitas
                      ekspor.
                    </li>
                    <li>
                      Menyediakan peralatan dan bahan-bahan yang dibutuhkan
                      untuk memproduksi barang.
                    </li>
                    <li>
                      Menampung hasil produksi anggota yang selanjutnya
                      dilakukan penyempurnaan dan mendistribusikannya.
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
              <ul className="list-decimal list-inside space-y-4 text-white leading-relaxed">
                <li>
                  Makna logo ini selaras dengan nama “Sugih Jembar Rahayu,” yang
                  berarti kaya, luas, dan sejahtera. Logo mencerminkan harapan
                  koperasi untuk tumbuh sebagai lembaga modern, profesional, dan
                  memberikan kesejahteraan yang luas bagi seluruh anggota dan
                  masyarakat.
                </li>
                <li>
                  Sosok manusia berwarna hijau di tengah melambangkan kekuatan,
                  kerja sama, dan semangat untuk tumbuh bersama. Warna hijau
                  mencerminkan kesuburan, pertumbuhan, dan keberlanjutan yang
                  menjadi dasar penting dalam pengembangan usaha pertanian,
                  peternakan, dan aktivitas ekonomi anggota.
                </li>
                <li>
                  Lengkungan kuning di sisi kiri menggambarkan energi,
                  kehangatan, dan optimisme. Kuning melambangkan cahaya matahari
                  yang menyuburkan tanaman dan memberi dorongan positif bagi
                  produktivitas anggota, khususnya dalam bidang pertanian dan
                  peternakan.
                </li>
                <li>
                  Lengkungan biru tosca di sisi kanan melambangkan air,
                  ketenangan, dan stabilitas. Unsur ini sangat berkaitan erat
                  dengan kegiatan perikanan, serta menjadi elemen penting bagi
                  kebutuhan air pada sektor pertanian dan peternakan. Warna
                  tosca menegaskan keseimbangan dalam menjalankan seluruh bidang
                  usaha koperasi.
                </li>
                <li>
                  Secara keseluruhan, bentuk logo menyerupai perpaduan akar
                  tanaman, gelombang air, dan gerak dinamis yang menggambarkan
                  sinergi tiga sektor usaha: pertanian, perikanan, dan
                  peternakan. Kesatuan ini menunjukkan komitmen koperasi dalam
                  membangun ekonomi anggota secara mandiri dan berkelanjutan.
                </li>
              </ul>
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
