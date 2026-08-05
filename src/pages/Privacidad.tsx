import Navbar from "@/components/dental/Navbar";
import Footer from "@/components/dental/Footer";

const Privacidad = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto max-w-3xl px-4 py-32">
        <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
          Aviso de Privacidad
        </h1>
        <p className="text-sm text-muted-foreground mb-10">
          Última actualización: agosto de 2026
        </p>

        <div className="space-y-8 text-sm leading-relaxed text-foreground/90">
          <section>
            <h2 className="font-display text-lg font-semibold text-foreground mb-2">
              1. Responsable
            </h2>
            <p>
              Blanqueamiento Dental Center ("nosotros"), con domicilio en Montecito 38, World Trade
              Center, colonia Nápoles, Benito Juárez, 03810, Ciudad de México, es responsable del
              tratamiento de los datos personales que nos
              proporciones, conforme a la Ley Federal de Protección de Datos Personales en
              Posesión de los Particulares (LFPDPPP).
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-foreground mb-2">
              2. Datos que recabamos
            </h2>
            <p>
              Este sitio no cuenta con formularios que recopilen datos personales directamente.
              Cuando nos contactas por teléfono o WhatsApp, tratamos los datos que tú decides
              compartirnos en esa conversación (por ejemplo, nombre y número de teléfono) con el
              único fin de agendar tu cita y darte seguimiento.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-foreground mb-2">
              3. Cookies y tecnologías de rastreo
            </h2>
            <p>
              Utilizamos cookies y tecnologías similares (como Google Analytics y Google Ads)
              para entender cómo se usa este sitio y medir la efectividad de nuestra publicidad.
              Estas herramientas pueden recopilar información como tu dirección IP, tipo de
              dispositivo y páginas visitadas. Puedes desactivar las cookies desde la
              configuración de tu navegador; algunas funciones del sitio podrían verse afectadas.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-foreground mb-2">
              4. Uso de tus datos
            </h2>
            <p>Los datos que nos compartes se usan para:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Agendar y confirmar tu cita.</li>
              <li>Responder tus dudas sobre nuestros servicios.</li>
              <li>Enviarte recordatorios relacionados con tu tratamiento.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-foreground mb-2">
              5. Derechos ARCO
            </h2>
            <p>
              Tienes derecho a acceder, rectificar, cancelar u oponerte (ARCO) al tratamiento de
              tus datos personales. Para ejercer estos derechos, contáctanos al teléfono o
              WhatsApp indicados en este sitio.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-foreground mb-2">
              6. Cambios a este aviso
            </h2>
            <p>
              Podemos actualizar este aviso de privacidad periódicamente. Cualquier cambio será
              publicado en esta misma página.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacidad;
