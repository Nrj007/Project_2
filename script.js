gsap.from(".logo ", 1.2, {
  opacity: 0,
  x: 40,
  ease: "power3.inOut",
  stagger: 0.2,
});

gsap.from(".nav-links li", 1.4, {
  opacity: 0,
  x: 40,
  ease: "power3.inOut",
  stagger: 0.2,
});
gsap.from(".hero-container h1 ", 1.4, {
  delay: 0.5,
  opacity: 0,
  x: -100,
  ease: "power3.inOut",
  stagger: 0.2,
});
gsap.from(".hero-container p ", 1.4, {
  opacity: 0,
  x: -200,
  delay: 0.7,
  ease: "power2.inOut",
});
gsap.from(".box1", 1.3, {
  opacity: 0.15,
  x: -200,
  ease: "circ",
  scrollTrigger: {
    trigger: ".box1",
    scrub: 1,
    start: "top bottom",
    end: "center center",
  },
});
gsap.from(".box2", 1.3, {
  opacity: 0.15,
  x: 200,
  ease: "circ",
  scrollTrigger: {
    scrub: 1,
    trigger: ".box2",
    start: "top bottom",
    end: "center center",
  },
});
gsap.from(".image_1 img", 1.3, {
  opacity: 0,
  y: 200,
  delay: 0.5,
  ease: "power2.inOut",
  scrollTrigger: {
    scrub: 1,
    trigger: ".image_1",
    end: "center center",
  },
});
gsap.from(".Text_1 h3", 1.3, {
  opacity: 0,
  delay: 0.5,
  y: 200,
  ease: "power2.inOut",
  scrollTrigger: {
    scrub: 1,
    trigger: ".Text_1",
    end: "center center",
  },
});
gsap.from(".image-wrapper", 1.3, {
  opacity: -1,
  y: 300,
  ease: "circ",
  scrollTrigger: {
    scrub: 1.5,
    trigger: ".image-wrapper",
  },
});
gsap.from(".text-wrapper1 p", 1.5, {
  opacity: -1,
  y: 400,
  stagger: 0.4,
  ease: "power4.inOut",
  scrollTrigger: {
    scrub: 1,
    trigger: ".black",
    end: "center center",
    duration: 2,
  },
});
gsap.from(".text-wrapper1 h3", 1.5, {
  opacity: -1,
  y: 400,
  stagger: 0.4,
  ease: "power4.inOut",
  scrollTrigger: {
    scrub: 1,
    trigger: ".black",
    end: "center center",
    duration: 2,
  },
});
gsap.from(".text-wrapper1 button", 1.5, {
  opacity: 0,
  y: 400,
  stagger: 0.4,
  ease: "power4.inOut",
  scrollTrigger: {
    scrub: 1,
    trigger: ".black",
    end: "center center",

    duration: 2,
  },
});
gsap.from(".image-wrapper1", 1.5, {
  opacity: 0.7,
  x: 600,
  ease: "circ",
  scrollTrigger: {
    scrub: 1,
    trigger: ".black",
    end: "center center",
    duration: 2,
  },
});
