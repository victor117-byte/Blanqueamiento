// Sistema de citas: Cal.com (conectado al Google Calendar real del negocio).
// CAL_LINK es el identificador que usa el embed de Cal.com para abrir el
// modal de reserva sin salir del sitio.
export const CAL_LINK = "blanqueamiento-dental-center-bepjhd/agendar-cita";

// BOOKING_URL es el link directo — se deja como href en los botones para que,
// si el embed de Cal.com no carga (bloqueador de anuncios, JS deshabilitado,
// etc.), el clic siga funcionando como navegación normal a la página de Cal.com.
export const BOOKING_URL = `https://cal.com/${CAL_LINK}`;

// Contexto del último CTA de "Agendar cita" que se dio clic, para poder
// incluir { location, service } en el evento booking_completed que dispara
// el listener global de Cal.com (bookingSuccessful), ya que ese callback no
// sabe por sí solo qué botón abrió el modal.
let lastBookingContext: { location?: string; service?: string } = {};

export function setBookingContext(ctx: { location?: string; service?: string }) {
  lastBookingContext = ctx;
}

export function getBookingContext() {
  return lastBookingContext;
}

declare global {
  interface Window {
    Cal?: unknown;
  }
}

// Los botones de "Agendar cita" tienen href+target="_blank" como respaldo
// (por si el embed de Cal.com no carga) además de data-cal-link para el
// modal. El propio script de Cal.com no cancela la navegación del <a>, así
// que sin esto se abren las dos cosas a la vez: el modal Y una pestaña
// nueva. Solo cancelamos la navegación cuando el embed ya cargó (window.Cal
// existe) — si no cargó, se conserva el respaldo de abrir cal.com aparte.
export function preventDefaultIfCalReady(e: { preventDefault: () => void }) {
  if (typeof window !== "undefined" && window.Cal) {
    e.preventDefault();
  }
}
