declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
    fbq?: (...args: unknown[]) => void;
  }
}

// Mapea nuestros eventos internos a los eventos estándar de Meta Pixel,
// para que las campañas de Facebook/Instagram Ads también puedan optimizar
// por estas conversiones (no solo Google Ads vía GTM).
const META_EVENT_MAP: Record<string, string> = {
  whatsapp_click: "Contact",
  phone_click: "Contact",
  booking_completed: "Schedule",
};

function trackMetaEvent(event: string, params: Record<string, unknown>) {
  const metaEvent = META_EVENT_MAP[event];
  if (!metaEvent || typeof window === "undefined" || typeof window.fbq !== "function") return;
  window.fbq("track", metaEvent, params);
}

export function trackEvent(event: string, params: Record<string, unknown> = {}) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params });
  trackMetaEvent(event, params);
}
