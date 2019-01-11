window.addEventListener("load", () => {
  let arcs = document.querySelector(".logo-animated .logo-arcs");
  if (arcs) {
    anime({
      targets: arcs,
      opacity: [0, 1],
      rotate: "+=4turn",
      duration: 1000,
      delay: 500,
      easing: "cubicBezier(0.165, 0.840, 0.440, 1.000)"
    }).finished.then(() => {
      anime({
        targets: arcs,
        rotate: "+=1turn",
        duration: 3000,
        loop: true,
        easing: "linear"
      });
    });
  }
});
