
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
            alert("Message পাঠানো যায়নি। আবার চেষ্টা করুন।");
        });
});
