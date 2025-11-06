import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Star } from "lucide-react";

const Membership = () => {
  const benefits = [
    "Suku bunga simpanan lebih tinggi",
    "Bunga pinjaman kompetitif",
    "Bagi hasil (SHU) tahunan",
    "Akses ke semua layanan koperasi",
    "Pelatihan dan workshop gratis",
    "Konsultasi keuangan",
    "Asuransi jiwa anggota",
    "Program kesejahteraan keluarga"
  ];

  const requirements = [
    "Warga Negara Indonesia",
    "Berusia minimal 17 tahun",
    "KTP Cianjur atau domisili Cianjur",
    "Mengisi formulir pendaftaran",
    "Simpanan pokok Rp 100.000",
    "Simpanan wajib Rp 50.000/bulan"
  ];

  return (
    <section id="membership" className="py-20 bg-gradient-to-b from-muted to-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Keanggotaan</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Bergabunglah dengan keluarga besar Koperasi Cianjur dan nikmati berbagai keuntungan eksklusif
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Benefits Card */}
          <Card className="border-2 hover-lift animate-slide-up">
            <CardHeader className="bg-gradient-to-br from-primary/10 to-secondary/10">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                  <Star className="w-5 h-5 text-primary-foreground" />
                </div>
                <CardTitle className="text-3xl">Keuntungan Anggota</CardTitle>
              </div>
              <CardDescription className="text-base">
                Manfaat eksklusif yang Anda dapatkan sebagai anggota koperasi
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li 
                    key={index} 
                    className="flex items-start gap-3 animate-fade-in"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Requirements Card */}
          <Card className="border-2 hover-lift animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <CardHeader className="bg-gradient-to-br from-secondary/10 to-primary/10">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                  <Check className="w-5 h-5 text-secondary-foreground" />
                </div>
                <CardTitle className="text-3xl">Persyaratan</CardTitle>
              </div>
              <CardDescription className="text-base">
                Syarat mudah untuk menjadi anggota koperasi
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-4 mb-8">
                {requirements.map((requirement, index) => (
                  <li 
                    key={index} 
                    className="flex items-start gap-3 animate-fade-in"
                    style={{ animationDelay: `${0.4 + index * 0.05}s` }}
                  >
                    <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{requirement}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                variant="cta" 
                size="lg" 
                className="w-full"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Daftar Menjadi Anggota
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Membership;
