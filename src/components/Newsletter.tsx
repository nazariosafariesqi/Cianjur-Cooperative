import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Mail } from "lucide-react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Terima kasih!",
        description: "Anda telah berhasil berlangganan newsletter kami.",
      });
      setEmail("");
    }
  };

  return (
    <section id="newsletter" className="py-20 bg-gradient-to-br from-primary to-secondary relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-foreground rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-foreground rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <div className="w-16 h-16 bg-primary-foreground/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Mail className="w-8 h-8 text-primary-foreground" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Dapatkan Update Terbaru
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Berlangganan newsletter kami untuk mendapatkan informasi terbaru tentang produk, layanan, dan tips keuangan
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <Input
              type="email"
              placeholder="Masukkan email Anda"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 h-14 text-base bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/60 focus:bg-primary-foreground/20"
            />
            <Button 
              type="submit"
              size="lg"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 h-14 px-8 font-semibold"
            >
              Berlangganan
            </Button>
          </form>

          <p className="text-sm text-primary-foreground/70 mt-4">
            Kami menghormati privasi Anda. Email Anda tidak akan dibagikan kepada pihak ketiga.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
