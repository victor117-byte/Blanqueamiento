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
