import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    layanan: [
      { name: "Simpanan", href: "#services" },
      { name: "Pinjaman", href: "#services" },
      { name: "Asuransi", href: "#services" },
      { name: "Modal Usaha", href: "#services" }
    ],
    informasi: [
      { name: "Tentang Kami", href: "#about" },
      { name: "Keanggotaan", href: "#membership" },
      { name: "Berita", href: "#" },
      { name: "FAQ", href: "#" }
    ],
    legal: [
      { name: "Kebijakan Privasi", href: "#" },
      { name: "Syarat & Ketentuan", href: "#" },
      { name: "Laporan Keuangan", href: "#" }
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Youtube, href: "#", label: "YouTube" }
  ];

  return (
    <footer className="bg-accent text-accent-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4 text-primary text-white">Koperasi Sugih Jembar Rahayu</h3>
            <p className="text-accent-foreground/80 mb-6 leading-relaxed">
              Bersama membangun kesejahteraan melalui kekuatan gotong royong dan kepercayaan. Melayani dengan sepenuh hati sejak 2008.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-primary/10 hover:bg-primary rounded-lg flex items-center justify-center transition-[var(--transition-smooth)] hover:scale-110"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Layanan</h4>
            <ul className="space-y-2">
              {footerLinks.layanan.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-accent-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Informasi</h4>
            <ul className="space-y-2">
              {footerLinks.informasi.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-accent-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-accent-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-accent-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-accent-foreground/60">
            <p>© {new Date().getFullYear()} Koperasi Cianjur. Hak Cipta Dilindungi.</p>
            <p>Diawasi oleh Kementerian Koperasi dan UKM Republik Indonesia</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
