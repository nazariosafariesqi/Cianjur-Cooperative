import { useState } from "react";
import aboutImage from "@/assets/about-koperasi.jpg";

const Kegiatan = () => {
  const [activeTab, setActiveTab] = useState("internal");

  const kegiatanData = {
    internal: [
      {
        title: "Rapat Kerja Tahunan",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae rutrum quam. Duis quam lacus, tincidunt vitae metus ut, iaculis quis turpis. Mauris et tempor elit.",
        image: aboutImage,
      },
      {
        title: "Rapat Kerja Tahunan",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae rutrum quam. Duis quam lacus, tincidunt vitae metus ut, iaculis quis turpis. Mauris et tempor elit.",
        image: aboutImage,
      },
    ],
    eksternal: [
      {
        title: "Kegiatan Sosial Eksternal",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
        image: aboutImage,
      },
    ],
  };

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
            Kegiatan
          </h2>
          <p className="text-lg text-white/90">
            Kenalan lebih dekat dengan Koperasi Sugih Jembar Rahayu
          </p>
        </div>
      </section>

      {/* Section 2: Galeri Kegiatan */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Judul dan Filter */}
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Galeri Kegiatan Kami
            </h2>
            <div className="flex justify-center gap-4">
              {["internal", "eksternal"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2 rounded-full transition ${
                    activeTab === tab
                      ? "bg-green-600 text-white"
                      : "bg-white text-green-600 border border-green-600"
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Subjudul */}
          <h3 className="text-2xl font-semibold text-black mb-6">Latest</h3>

          {/* Grid Kegiatan */}
          <div className="grid md:grid-cols-2 gap-8">
            {kegiatanData[activeTab].map((item, index) => (
              <div
                key={index}
                className="bg-green-50 rounded-xl shadow-md overflow-hidden border border-gray-200"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h4 className="text-xl font-bold text-black mb-2">
                    {item.title}
                  </h4>
                  <p className="text-black/70 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Kegiatan;
