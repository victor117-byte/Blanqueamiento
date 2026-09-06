// Sistema de citas: Cal.com (conectado al Google Calendar real del negocio).
// CAL_LINK is the embed identifier. BOOKING_URL is the fallback href if the
// embed does not load (ad blocker, JS off).
export const CAL_LINK = "blanqueamiento-dental-center-bepjhd/agendar-cita";
export const BOOKING_URL = `https://cal.com/${CAL_LINK}`;

export const CAL_CONFIG = JSON.stringify({ theme: "light" });

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

// data-cal-link opens the modal, but Cal.com does not cancel <a> navigation.
// If the embed is ready, prevent the new tab. If it is not, keep the href fallback.
export function preventDefaultIfCalReady(e: { preventDefault: () => void }) {
  if (typeof window !== "undefined" && window.Cal) {
    e.preventDefault();
  }
}
