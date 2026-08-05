import Navbar from "@/components/dental/Navbar";
import Footer from "@/components/dental/Footer";

const AvisoLegal = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto max-w-3xl px-4 py-32">
        <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
          Aviso Legal
        </h1>
        <p className="text-sm text-muted-foreground mb-10">
          Última actualización: agosto de 2026
        </p>

        <div className="space-y-8 text-sm leading-relaxed text-foreground/90">
          <section>
            <h2 className="font-display text-lg font-semibold text-foreground mb-2">
              1. Identificación
            </h2>
            <p>
              Este sitio web es operado por Blanqueamiento Dental Center, con domicilio en
              Montecito 38, World Trade Center, colonia Nápoles, Benito Juárez, 03810, Ciudad de
              México. Puedes contactarnos a través del teléfono o WhatsApp indicados en la sección
              de contacto.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-foreground mb-2">
              2. Objeto del sitio
            </h2>
            <p>
              El contenido de este sitio tiene fines informativos sobre los servicios de
              odontología estética que ofrecemos. No sustituye una valoración clínica
              presencial; los resultados y tiempos de tratamiento pueden variar según cada
              paciente.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-foreground mb-2">
              3. Propiedad intelectual
            </h2>
            <p>
              Los textos, imágenes, logotipos y demás contenidos de este sitio son propiedad de
              Blanqueamiento Dental Center o se usan bajo licencia. Queda prohibida su
              reproducción total o parcial sin autorización previa.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-foreground mb-2">
              4. Enlaces a terceros
            </h2>
            <p>
              Este sitio incluye enlaces a servicios de terceros (WhatsApp, Google Maps) sobre
              los cuales no tenemos control y a los que no se extiende este aviso.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-foreground mb-2">
              5. Privacidad
            </h2>
            <p>
              Para conocer cómo tratamos tus datos personales, consulta nuestro{" "}
              <a href="/privacidad" className="text-navy underline hover:text-gold">
                Aviso de Privacidad
              </a>
              .
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AvisoLegal;
