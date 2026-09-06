import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";
import { trackEvent } from "@/lib/analytics";
import { getBookingContext } from "@/lib/booking";

const NAVY = "#17255e";

/**
 * Load Cal.com embed once at app root. Elements with data-cal-link open the
 * modal. bookingSuccessfulV2 → dataLayer booking_completed (Cita Confirmada).
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
