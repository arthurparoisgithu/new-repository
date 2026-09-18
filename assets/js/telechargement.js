/* ============================================================
   Téléchargements et messages courts.

   Un lien `download` classique est inerte dans le lecteur
   d'artefacts de claude.ai : seul l'hôte peut écrire un fichier.
   On passe donc par la capacité `downloads` quand elle existe, et
   on retombe sur un lien blob partout ailleurs (GitHub Pages,
   ouverture locale).

   Marquage : <button data-telecharger="chemin" data-nom="nom.ext">
   ============================================================ */

(function () {
  function toast(message) {
    let t = document.querySelector(".toast");
    if (!t) {
      t = document.createElement("div");
      t.className = "toast";
      document.body.appendChild(t);
    }
    t.textContent = message;
    t.classList.add("show");
    clearTimeout(t._h);
    t._h = setTimeout(() => t.classList.remove("show"), 3200);
  }

  async function telecharger(url, nom) {
    let donnees;
    try {
      donnees = await (await fetch(url)).text();
    } catch (err) {
      toast("Fichier introuvable — utilisez le lien « Ouvrir »");
      return;
    }

    const downloads = await window.claude?.use?.("downloads").catch(() => null);
    if (downloads) {
      try {
        await downloads.save({ filename: nom, data: donnees });
        toast("Enregistré : " + nom);
      } catch (err) {
        if (err?.code !== "declined") {
          toast("Enregistrement impossible — ouvrez le fichier dans un onglet");
        }
      }
      return;
    }

    const blob = URL.createObjectURL(new Blob([donnees]));
    const a = document.createElement("a");
    a.href = blob;
    a.download = nom;
    a.click();
    URL.revokeObjectURL(blob);
    toast("Téléchargé : " + nom);
  }

  /* Un PDF n'est pas du texte : il lui faut le binaire intact. */
  async function telechargerBinaire(url, nom, type) {
    let blob;
    try {
      blob = await (await fetch(url)).blob();
    } catch (err) {
      toast("Fichier introuvable — utilisez le lien « Ouvrir »");
      return;
    }

    const downloads = await window.claude?.use?.("downloads").catch(() => null);
    if (downloads) {
      try {
        await downloads.save({ filename: nom, data: blob });
        toast("Enregistré : " + nom);
      } catch (err) {
        if (err?.code !== "declined") {
          toast("Enregistrement impossible — ouvrez le fichier dans un onglet");
        }
      }
      return;
    }

    const href = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = href;
    a.download = nom;
    a.click();
    URL.revokeObjectURL(href);
    toast("Téléchargé : " + nom);
  }

  document.addEventListener("click", (ev) => {
    const el = ev.target.closest("[data-telecharger]");
    if (!el) return;
    ev.preventDefault();
    const url = el.dataset.telecharger;
    const nom = el.dataset.nom || url.split("/").pop();
    if (/\.(pdf|png|jpe?g|zip)$/i.test(url)) telechargerBinaire(url, nom);
    else telecharger(url, nom);
  });

  window.toast = toast;
})();
