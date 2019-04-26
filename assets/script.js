let interfaceThemeItemName = "dev.anli.site.interface-theme";

window.addEventListener("load", () => {
  let arcs = document.querySelectorAll(".logo-animated .logo-arcs");
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
        duration: 6000,
        loop: true,
        easing: "linear"
      });
    });
  }

  FontAwesome.library.add([
    {
      prefix: "a5",
      iconName: "quizlet",
      icon: [
        55,
        53,
        ["quizlet"],
        null,
        "M26.99,0c15.38,0,26.99,11.36,26.99,25.88c0,6.69-2.54,12.58-6.68,17.04l7.18,7.98H42.37l-2.49-2.85c-3.6,2.48-8.1,3.64-12.89,3.64C11.68,51.69,0,40.41,0,25.88C0,10.93,12.12,0,26.99,0z M26.99,41.7c2.03,0,3.84-0.43,5.59-1.15L22.2,28.9h12.12l5.59,6.4c2.03-2.52,2.97-5.54,2.97-9.42c0-8.7-6.6-15.82-15.89-15.82c-9.29,0-15.81,7.05-15.81,15.82C11.17,34.8,17.7,41.7,26.99,41.7L26.99,41.7z"
      ]
    },
    {
      prefix: "a5",
      iconName: "scratch",
      icon: [
        35,
        35,
        ["scratch"],
        null,
        "M26,25.89c-2-.3-3-1.61-2.48-5.65l.07-.49c.43-3.51.8-4.28,2.48-4.2a3.1,3.1,0,0,1,1.64.81,9.66,9.66,0,0,1,2.36,3,8.33,8.33,0,0,1,.7,2.7s.11,1,.11,1h0a1.7,1.7,0,0,0,3.35,0c0-.1.43-10.75.44-10.92a1.71,1.71,0,0,0-3.41,0s0,1.48,0,3c-1.34-1.46-3.06-2.77-5-2.87-5.16-.29-5.72,4.45-6.05,7.18l-.06.48c-.69,5.38,1.11,8.78,5.33,9.44,4.59.72,7.65,1.78,7.68,4.6a4.11,4.11,0,0,1-1.57,3.08,5.44,5.44,0,0,1-4.37,1.25,8,8,0,0,1-1.34-.35A9.66,9.66,0,0,1,23,35.53a6.8,6.8,0,0,1-.94-3.21c0-.39,0-.66,0-.7a1.71,1.71,0,0,0-3.41,0s-.05,3.36-.16,5.37a58.65,58.65,0,0,0,0,6.09,1.7,1.7,0,1,0,3.4-.22s-.08-1.34-.07-3.18a12.86,12.86,0,0,0,4.84,1.91,8.77,8.77,0,0,0,7.14-2,7.51,7.51,0,0,0,2.77-5.71C36.51,27.53,29.42,26.43,26,25.89Z"
      ]
    }
  ]);

  let navbar = document.getElementById("main-navbar");
  if (navbar && navbar.classList.contains("sticky-top")) {
    let isShowingLogoInNavbar = false;
    let applyNavbarClasses = event => {
      if (isShowingLogoInNavbar) {
        if (document.querySelector(".header-logo .logo-a").getBoundingClientRect().bottom > 40) {
          navbar.classList.remove("showing-brand");
          isShowingLogoInNavbar = false;
        }
      } else {
        if (document.querySelector(".header-logo .logo-a").getBoundingClientRect().bottom <= 40) {
          navbar.classList.add("showing-brand");
          isShowingLogoInNavbar = true;
        }
      }
    }
    applyNavbarClasses(null);
    window.addEventListener("scroll", e => {
      applyNavbarClasses(e);
    });
    window.addEventListener("resize", e => {
      applyNavbarClasses(e);
    });
  }

  refreshInterfaceTheme();

  let themeSelect = document.getElementById("interface-theme-select");
  themeSelect.value = localStorage.getItem(interfaceThemeItemName);
  themeSelect.addEventListener("change", () => {
    localStorage.setItem(interfaceThemeItemName, themeSelect.value);
    refreshInterfaceTheme();
  });
});

function refreshInterfaceTheme() {
  let theme = localStorage.getItem(interfaceThemeItemName);
  if (theme === "dark") {
    document.body.classList.remove("light-interface");
    document.body.classList.add("dark-interface");
  } else if (theme === "light") {
    document.body.classList.add("light-interface");
    document.body.classList.remove("dark-interface");
  } else {
    document.body.classList.remove("light-interface");
    document.body.classList.remove("dark-interface");
  }
}