/* ============================================================
   Navigation du dossier : onglets, thème, chargement différé
   des deux pièces jointes interactives.
   ============================================================ */

(function () {
  const PLATES = ["parcours", "sites", "n8n", "agents"];

  function show(id, push) {
    if (!PLATES.includes(id)) id = PLATES[0];

    document.querySelectorAll(".plate").forEach((p) => {
      p.dataset.active = String(p.id === "plate-" + id);
    });
    document.querySelectorAll(".nav-item").forEach((b) => {
      b.setAttribute("aria-current", String(b.dataset.go === id));
    });

    /* les deux documents joints ne se chargent qu'à l'ouverture de leur onglet */
    const frame = document.querySelector(`#plate-${id} iframe[data-src]`);
    if (frame && !frame.src) frame.src = frame.dataset.src;

    if (push && location.hash !== "#" + id) {
      history.pushState(null, "", "#" + id);
    }
    window.scrollTo({ top: 0, behavior: "auto" });
  }

  document.addEventListener("click", (ev) => {
    const go = ev.target.closest("[data-go]");
    if (!go) return;
    ev.preventDefault();
    show(go.dataset.go, true);
  });

  window.addEventListener("popstate", () => show(location.hash.slice(1), false));

  /* ---------- thème ---------- */

  const root = document.documentElement;
  const KEY = "dossier-theme";

  function applyTheme(v) {
    if (v === "light" || v === "dark") root.setAttribute("data-theme", v);
    else root.removeAttribute("data-theme");
    const btn = document.querySelector(".theme-toggle");
    if (btn) btn.textContent = v === "dark" ? "Thème clair" : "Thème sombre";
  }

  let stored = null;
  try { stored = localStorage.getItem(KEY); } catch (e) { /* stockage indisponible */ }

  const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  applyTheme(stored || (systemDark ? "dark" : "light"));

  document.addEventListener("DOMContentLoaded", () => {
    const btn = document.querySelector(".theme-toggle");
    if (btn) {
      btn.addEventListener("click", () => {
        const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
        applyTheme(next);
        try { localStorage.setItem(KEY, next); } catch (e) { /* stockage indisponible */ }
      });
    }
    show(location.hash.slice(1), false);
  });
})();
