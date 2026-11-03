"use client";
import { useEffect } from "react";

const GTM_ID = "GTM-N5CCZ6MN";
const ADS_ID = "AW-18025620294";

// Google-Skripte erst nach "Akzeptieren" laden, vorher geht keine Verbindung zu Google raus.
function load() {
  if (document.getElementById("gtm-js")) return;
  window.dataLayer = window.dataLayer || [];
  window.gtag?.("consent", "update", {
    ad_storage: "granted",
    ad_user_data: "granted",
    ad_personalization: "granted",
    analytics_storage: "granted",
  });
  window.dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" });
  for (const [id, src] of [
    ["gtm-js", `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`],
    ["gtag-js", `https://www.googletagmanager.com/gtag/js?id=${ADS_ID}`],
  ]) {
    const s = document.createElement("script");
    s.id = id;
    s.async = true;
    s.src = src;
    document.head.appendChild(s);
  }
  window.gtag?.("js", new Date());
  window.gtag?.("config", ADS_ID);
}

export default function GoogleTags() {
  useEffect(() => {
    try {
      if (localStorage.getItem("cookie-consent") === "accepted") load();
    } catch {}
    window.addEventListener("consent-accepted", load);
    return () => window.removeEventListener("consent-accepted", load);
  }, []);
  return null;
}
