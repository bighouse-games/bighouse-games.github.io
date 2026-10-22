// Picks the page language: saved choice, then browser language, then English.
(function () {
  var root = document.documentElement;
  var saved = null;
  try { saved = localStorage.getItem("bh-lang"); } catch (e) {}
  var browserPt = (navigator.language || "").toLowerCase().indexOf("pt") === 0;
  var lang = saved || (browserPt ? "pt" : "en");

  function apply(l) {
    root.setAttribute("data-lang", l);
    root.setAttribute("lang", l === "pt" ? "pt-BR" : "en");
  }

  apply(lang);

  document.addEventListener("DOMContentLoaded", function () {
    var btn = document.querySelector(".lang-toggle");
    if (!btn) return;
    btn.addEventListener("click", function () {
      lang = lang === "pt" ? "en" : "pt";
      apply(lang);
      try { localStorage.setItem("bh-lang", lang); } catch (e) {}
    });
  });
})();
