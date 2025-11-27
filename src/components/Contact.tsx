import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Alamat",
      content:
        "Kp. Bangbayang, RT 001, RW 003, Desa Cikancana, Kecamatan Sukaresmi,Kabupaten Cianjur, Provinsi Jawa Barat",
    },
    {
      icon: Phone,
      title: "Telepon",
      content: "+62 263 123 4567",
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@koperasicianjur.co.id",
    },
    {
      icon: Clock,
      title: "Jam Operasional",
      content: "Senin - Jumat: 08:00 - 16:00 WIB",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Hubungi Kami</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Kami siap membantu menjawab pertanyaan dan melayani kebutuhan Anda
          </p>
        </div>

        {/* Contact Information Centered */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-3xl mx-auto animate-slide-up">
          {contactInfo.map((info, index) => (
            <Card
              key={index}
              className="border-2 hover-lift animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-3">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center shadow-[var(--shadow-soft)]">
                    <info.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-lg">{info.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-foreground">{info.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
