import { Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground py-12">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="font-display text-xl font-bold text-primary-foreground">Dental</span>
              <span className="font-display text-xl font-light text-accent">Center</span>
            </div>
            <p className="text-sm text-primary-foreground/60 leading-relaxed">
              Más de 20 años transformando sonrisas con tecnología de vanguardia en la Ciudad de México.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display text-sm font-semibold text-primary-foreground mb-4">Servicios</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/60">
              <li>Blanqueamiento Dental</li>
              <li>Limpieza con Ultrasonido</li>
              <li>Ortodoncia</li>
              <li>Implantología</li>
              <li>Odontopediatría</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-sm font-semibold text-primary-foreground mb-4">Contacto</h4>
            <div className="space-y-3 text-sm text-primary-foreground/60">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>55 7444 1235</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>World Trade Center, CDMX</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-6">
          <p className="text-center text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} Blanqueamiento Dental Center. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
