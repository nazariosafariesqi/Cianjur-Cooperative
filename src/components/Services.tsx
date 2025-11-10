import aboutImage from "@/assets/about-koperasi.jpg";
import domba from "@/assets/domba.jpg";
import bibit from "@/assets/bibit.jpg";
import ikan from "@/assets/ikan.jpg";

const unitUsaha = [
  {
    title: "Unit Usaha Domba",
    image: domba,
    description:
      "Pengelolaan peternakan domba untuk mendukung ketahanan pangan dan ekonomi anggota.",
  },
  {
    title: "Unit Bibit Pohon",
    image: bibit,
    description:
      "Penyediaan bibit pohon unggul untuk penghijauan dan pertanian berkelanjutan.",
  },
  {
    title: "Unit Usaha Ikan Nila",
    image: ikan,
    description:
      "Budidaya ikan nila sebagai sumber protein dan pendapatan anggota koperasi.",
  },
];

const Services = () => {
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
            Unit Usaha
          </h2>
          <p className="text-lg text-white/90">
            Kenalan lebih dekat dengan Koperasi Sugih Jembar Rahayu
          </p>
        </div>
      </section>

      {/* Section 2: Unit Usaha */}
      <section className="bg-green-500 py-16">
        <div className="container mx-auto px-4">
          {/* Judul */}
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
            Ada apa saja di Koperasi Sugih Jembar Rahayu?
          </h2>
          <p className="text-center text-white mb-12 text-lg">
            Koperasi Sugih Jembar Rahayu memiliki beberapa unit usaha
          </p>

          {/* Grid Baris Pertama */}
          <div className="grid md:grid-cols-3 gap-8">
            {unitUsaha.map((unit, index) => (
              <div
                key={`unit-1-${index}`}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <img
                  src={unit.image}
                  alt={unit.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-black mb-2">
                    {unit.title}
                  </h3>
                  <p className="text-black text-sm">{unit.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Grid Baris Kedua */}
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {unitUsaha.map((unit, index) => (
              <div
                key={`unit-2-${index}`}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <img
                  src={unit.image}
                  alt={unit.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-black mb-2">
                    {unit.title}
                  </h3>
                  <p className="text-black text-sm">{unit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
