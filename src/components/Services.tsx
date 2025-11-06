import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Wallet, TrendingUp, Shield, Users, Home, Briefcase } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Wallet,
      title: "Simpanan",
      description: "Berbagai pilihan produk simpanan dengan bunga kompetitif dan fleksibilitas penarikan sesuai kebutuhan Anda."
    },
    {
      icon: TrendingUp,
      title: "Pinjaman",
      description: "Pinjaman dengan suku bunga rendah dan proses persetujuan cepat untuk modal usaha atau kebutuhan pribadi."
    },
    {
      icon: Shield,
      title: "Asuransi",
      description: "Perlindungan finansial untuk anggota dan keluarga dengan premi terjangkau dan klaim yang mudah."
    },
    {
      icon: Users,
      title: "Simpan Pinjam",
      description: "Program simpan pinjam khusus dengan sistem yang adil dan transparan untuk kesejahteraan bersama."
    },
    {
      icon: Home,
      title: "KPR",
      description: "Kredit kepemilikan rumah dengan bunga rendah dan tenor fleksibel untuk mewujudkan hunian impian."
    },
    {
      icon: Briefcase,
      title: "Modal Usaha",
      description: "Dukungan permodalan untuk UMKM dengan pendampingan dan pelatihan pengembangan bisnis."
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Layanan Kami</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Berbagai produk dan layanan keuangan yang dirancang khusus untuk memenuhi kebutuhan anggota koperasi
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="hover-lift border-2 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-4 shadow-[var(--shadow-soft)]">
                  <service.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <CardTitle className="text-2xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
