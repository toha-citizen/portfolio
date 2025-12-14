
const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const subject = this.querySelector('input[placeholder="Subject"]').value;
    const message = this.querySelector('textarea').value;

    const data = { name, email, subject, message };
    fetch("https://script.google.com/macros/s/AKfycbyhf_qGESMGyuD2rbCw41rR5GuD5WZywTtzQinPkIRw9x2HuwHjpSJ-qeQLpIk_5y-m7Q/exec", {
        method: "POST",
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(data => {
            alert("Message successfully sent!");
            contactForm.reset();
        })
        .catch(error => {
            console.error("Error:", error);
            alert("Message sending failed.");
        });
});

(function () {

  const navbar = document.querySelector(".navbar");
  const sections = document.querySelectorAll("section");

  function fixLayout() {
    const width = window.innerWidth;

    // Fixed navbar gap fix
    if (navbar) {
      document.body.style.paddingTop = navbar.offsetHeight + "px";
    }

    // Mobile + mobile desktop mode
    if (width <= 1024) {
      sections.forEach(section => {
        section.style.minHeight = "auto";
        section.style.paddingTop = "4rem";
        section.style.paddingBottom = "4rem";
      });

      const home = document.getElementById("home");
      if (home) {
        home.style.paddingTop = "7rem";
      }

    } else {
      sections.forEach(section => {
        section.style.minHeight = "";
        section.style.paddingTop = "";
        section.style.paddingBottom = "";
      });
      document.body.style.paddingTop = "";
    }
  }

  window.addEventListener("load", fixLayout);
  window.addEventListener("resize", fixLayout);

})();
