/* =========================================================
   BIZKO — Landing interactions
   Lightweight, no dependencies.
   ========================================================= */
(function () {
  "use strict";

  /* ---- Sticky header shadow ---- */
  var header = document.querySelector(".header");
  var onScroll = function () {
    if (window.scrollY > 8) header.classList.add("is-scrolled");
    else header.classList.remove("is-scrolled");
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---- Mobile nav ---- */
  var nav = document.getElementById("nav");
  var toggle = document.getElementById("navToggle");
  if (toggle) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("mobile-open");
      toggle.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.querySelectorAll(".nav__links a").forEach(function (a) {
      a.addEventListener("click", function () {
        nav.classList.remove("mobile-open");
        toggle.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---- FAQ accordion ---- */
  document.querySelectorAll(".faq-item").forEach(function (item) {
    var q = item.querySelector(".faq-q");
    var a = item.querySelector(".faq-a");
    q.addEventListener("click", function () {
      var isOpen = item.classList.contains("open");
      // close others
      document.querySelectorAll(".faq-item.open").forEach(function (o) {
        if (o !== item) {
          o.classList.remove("open");
          o.querySelector(".faq-a").style.maxHeight = null;
        }
      });
      if (isOpen) {
        item.classList.remove("open");
        a.style.maxHeight = null;
      } else {
        item.classList.add("open");
        a.style.maxHeight = a.scrollHeight + "px";
      }
    });
  });

  /* ---- Demo module switcher ---- */
  var tabs = document.querySelectorAll(".demo__tab");
  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      var target = tab.getAttribute("data-demo");
      tabs.forEach(function (t) { t.classList.remove("active"); });
      tab.classList.add("active");
      document.querySelectorAll(".demo__panel").forEach(function (p) {
        p.classList.toggle("active", p.id === target);
      });
    });
  });

  /* ---- Pricing month/year toggle ---- */
  var cycleBtns = document.querySelectorAll(".pricing-toggle button");
  cycleBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var cycle = btn.getAttribute("data-cycle");
      cycleBtns.forEach(function (b) { b.classList.remove("active"); });
      btn.classList.add("active");
      document.querySelectorAll(".plan__price .amt").forEach(function (amt) {
        var v = cycle === "year" ? amt.getAttribute("data-y") : amt.getAttribute("data-m");
        if (v) amt.textContent = v;
      });
      document.querySelectorAll("[data-note-month]").forEach(function (n) {
        n.style.display = cycle === "year" ? "none" : "";
      });
      document.querySelectorAll("[data-note-year]").forEach(function (n) {
        n.style.display = cycle === "year" ? "" : "none";
      });
    });
  });

  /* ---- Reveal on scroll ---- */
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && reveals.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    reveals.forEach(function (r) { io.observe(r); });
  } else {
    reveals.forEach(function (r) { r.classList.add("in"); });
  }

  /* ---- Product gallery lightbox ---- */
  (function () {
    var lb = document.getElementById("lightbox");
    if (!lb) return;
    var items = Array.prototype.slice.call(document.querySelectorAll(".gal-item"));
    var stage = document.getElementById("lbStage");
    var lbNum = document.getElementById("lbNum");
    var lbTitle = document.getElementById("lbTitle");
    var lbTag = document.getElementById("lbTag");
    var current = 0;

    function render(i) {
      current = (i + items.length) % items.length;
      var item = items[current];
      var frame = item.querySelector(".frame");
      stage.innerHTML = "";
      if (frame) stage.appendChild(frame.cloneNode(true));
      lbNum.textContent = item.getAttribute("data-n") || "";
      lbTitle.textContent = item.getAttribute("data-title") || "";
      var demo = item.querySelector(".gal-badge.is-demo");
      lbTag.style.display = demo ? "" : "none";
      stage.scrollTop = 0;
    }
    function open(i) {
      render(i);
      lb.classList.add("open");
      document.body.classList.add("lb-open");
    }
    function close() {
      lb.classList.remove("open");
      document.body.classList.remove("lb-open");
      stage.innerHTML = "";
    }

    items.forEach(function (item, i) {
      item.addEventListener("click", function () { open(i); });
    });
    document.getElementById("lbClose").addEventListener("click", close);
    document.getElementById("lbNext").addEventListener("click", function () { render(current + 1); });
    document.getElementById("lbPrev").addEventListener("click", function () { render(current - 1); });
    lb.addEventListener("click", function (e) { if (e.target === lb) close(); });
    document.addEventListener("keydown", function (e) {
      if (!lb.classList.contains("open")) return;
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") render(current + 1);
      else if (e.key === "ArrowLeft") render(current - 1);
    });
  })();

  /* ---- Smooth-scroll offset for sticky header on anchor clicks ---- */
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (e) {
      var id = link.getAttribute("href");
      if (id === "#" || id.length < 2) return;
      var el = document.querySelector(id);
      if (!el) return;
      e.preventDefault();
      var y = el.getBoundingClientRect().top + window.scrollY - 74;
      window.scrollTo({ top: y, behavior: "smooth" });
    });
  });
})();
