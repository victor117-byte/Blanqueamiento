import { Phone, MapPin, MessageCircle, Instagram, Facebook, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { trackEvent } from "@/lib/analytics";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-dark via-navy to-[hsl(228_55%_19%)]" />
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: "28px 28px",
        }}
      />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

      <div className="container mx-auto relative z-10 py-16">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-5">
              <span className="font-display text-2xl font-bold text-white">Dental</span>
              <span
                className="font-display text-2xl font-light"
                style={{
                  background: "linear-gradient(135deg, hsl(199 88% 68%), hsl(210 85% 78%))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Center
              </span>
            </div>
            <p className="text-sm text-white/55 leading-relaxed max-w-xs">
              Más de 20 años transformando sonrisas con tecnología de vanguardia
              en la Ciudad de México. Tu confianza es nuestra mayor satisfacción.
            </p>
            {/* Rating */}
            <div className="flex items-center gap-2 mt-5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-gold text-gold" />
              ))}
              <span className="text-sm font-bold text-white ml-1">5.0</span>
              <span className="text-xs text-white/40">en Google</span>
            </div>
            {/* Social */}
            <div className="flex items-center gap-3 mt-6">
              <a
                href="https://www.instagram.com/blanqueamientodentalcenter/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-xl border border-white/15 flex items-center justify-center text-white/50 hover:text-white hover:border-gold/40 hover:bg-gold/10 transition-all duration-300"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://www.facebook.com/BlanqueamientoDentalconLaser"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-xl border border-white/15 flex items-center justify-center text-white/50 hover:text-white hover:border-gold/40 hover:bg-gold/10 transition-all duration-300"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://wa.me/525574441235"
                aria-label="WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent("whatsapp_click", { location: "footer_social" })}
                className="w-9 h-9 rounded-xl border border-white/15 flex items-center justify-center text-white/50 hover:text-white hover:border-[#25D366]/40 hover:bg-[#25D366]/10 transition-all duration-300"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-sm font-semibold text-white mb-5 uppercase tracking-wider">
              Servicios
            </h4>
            <ul className="space-y-2.5 text-sm text-white/50">
              {["Blanqueamiento Dental", "Limpieza con Ultrasonido", "Ortodoncia", "Implantología", "Estética Dental", "Odontología General"].map((s) => (
                <li key={s}>
                  <a href="#servicios" className="hover:text-gold transition-colors duration-200">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-sm font-semibold text-white mb-5 uppercase tracking-wider">
              Contacto
            </h4>
            <div className="space-y-3.5 text-sm text-white/50">
              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-gold/60" />
                <a
                  href="tel:525574441235"
                  onClick={() => trackEvent("phone_click", { location: "footer_contact" })}
                  className="hover:text-white transition-colors duration-200"
                >
                  55 7444 1235
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageCircle className="h-4 w-4 shrink-0 text-gold/60" />
                <a
                  href="https://wa.me/525574441235?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20cita"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent("whatsapp_click", { location: "footer_contact" })}
                  className="hover:text-white transition-colors duration-200"
                >
                  WhatsApp
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 shrink-0 text-gold/60 mt-0.5" />
                <a
                  href="https://maps.google.com/?q=BLANQUEAMIENTO+DENTAL+CENTER+CDMX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-200 leading-relaxed"
                >
                  World Trade Center<br />Montecito 38, Nápoles, CDMX
                </a>
              </div>
              <div className="pt-1">
                <p className="text-xs text-white/35 leading-relaxed">
                  Lun–Vie: 10:00 – 20:00<br />
                  Sáb: 10:00 – 15:00<br />
                  Dom: Cita previa
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} Blanqueamiento Dental Center. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4">
            <Link to="/privacidad" className="text-xs text-white/30 hover:text-white/60 transition-colors">
              Política de privacidad
            </Link>
            <span className="text-white/15">·</span>
            <Link to="/aviso-legal" className="text-xs text-white/30 hover:text-white/60 transition-colors">
              Aviso legal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
