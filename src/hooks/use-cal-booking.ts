import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";
import { trackEvent } from "@/lib/analytics";
import { getBookingContext } from "@/lib/booking";

// Colores de marca (navy) para que el modal de Cal.com combine con el sitio.
const NAVY = "#17255e";

/**
 * Inicializa el embed de Cal.com una sola vez (montar en la raíz de la app).
 * Cualquier elemento con data-cal-link en el DOM abre el modal automáticamente
 * gracias al embed.js que este hook carga — no requiere manejar estado propio.
 */
export function useCalBooking() {
  useEffect(() => {
    let cancelled = false;

    (async () => {
      const cal = await getCalApi();
      if (cancelled) return;

      cal("ui", {
        theme: "light",
        styles: {
          branding: { brandColor: NAVY },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });

      cal("on", {
        action: "bookingSuccessfulV2",
        callback: (event) => {
          const { paymentRequired, eventTypeId, uid } = event.detail.data;
          const ctx = getBookingContext();
          trackEvent("booking_completed", {
            location: ctx.location,
            service: ctx.service,
            paymentRequired,
            eventTypeId,
            bookingUid: uid,
          });
        },
      });
    })();

    return () => {
      cancelled = true;
    };
  }, []);
}
