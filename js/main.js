/**
 * Zero to One Company — site interactions
 * Sticky header state, mobile nav, scroll-reveal, back-to-top, FAQ accordion.
 */
(function () {
  "use strict";

  var nav = document.querySelector(".nav");
  var navToggle = document.querySelector(".nav-toggle");
  var mobileMenu = document.querySelector(".mobile-menu");
  var toTop = document.querySelector(".to-top");

  /* Sticky header shadow + back-to-top visibility (rAF-throttled to avoid scroll jank) */
  function onScroll() {
    var scrolled = window.scrollY > 12;
    if (nav) nav.classList.toggle("is-scrolled", scrolled);
    if (toTop) toTop.classList.toggle("is-visible", window.scrollY > 480);
  }
  var scrollTicking = false;
  function onScrollThrottled() {
    if (!scrollTicking) {
      window.requestAnimationFrame(function () {
        onScroll();
        scrollTicking = false;
      });
      scrollTicking = true;
    }
  }
  document.addEventListener("scroll", onScrollThrottled, { passive: true });
  onScroll();

  /* Mobile menu toggle */
  if (navToggle && mobileMenu) {
    navToggle.addEventListener("click", function () {
      var isOpen = mobileMenu.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
      document.body.style.overflow = isOpen ? "hidden" : "";
    });
    mobileMenu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        mobileMenu.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
      });
    });
  }

  /* Back to top */
  if (toTop) {
    toTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* Scroll-reveal via IntersectionObserver */
  var revealTargets = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window && revealTargets.length) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var el = entry.target;
            el.classList.add("is-visible");
            io.unobserve(el);
            el.addEventListener(
              "transitionend",
              function () {
                el.style.willChange = "auto";
              },
              { once: true }
            );
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    revealTargets.forEach(function (el) {
      io.observe(el);
    });
  } else {
    revealTargets.forEach(function (el) {
      el.classList.add("is-visible");
    });
  }

  /* FAQ accordion */
  document.querySelectorAll(".faq-item").forEach(function (item) {
    var q = item.querySelector(".faq-q");
    var a = item.querySelector(".faq-a");
    if (!q || !a) return;
    q.addEventListener("click", function () {
      var isOpen = item.getAttribute("data-open") === "true";
      document.querySelectorAll(".faq-item").forEach(function (other) {
        other.setAttribute("data-open", "false");
        other.querySelector(".faq-a").style.maxHeight = null;
        other.querySelector(".faq-q").setAttribute("aria-expanded", "false");
      });
      if (!isOpen) {
        item.setAttribute("data-open", "true");
        a.style.maxHeight = a.scrollHeight + "px";
        q.setAttribute("aria-expanded", "true");
      }
    });
  });

  /* Active nav link fallback for direct file access */
  var current = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a, .mobile-menu a").forEach(function (link) {
    var href = link.getAttribute("href");
    if (href === current) link.classList.add("active");
  });
})();
