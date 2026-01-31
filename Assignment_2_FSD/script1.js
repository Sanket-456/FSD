document.addEventListener("DOMContentLoaded", function () {

    emailjs.init("A8BTcFE8OplbilX1c");

    const form = document.getElementById("contactForm");

    if (!form) return;

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        emailjs.sendForm(
            "service_en4c10p",
            "template_rg9wc3s",
            form
        ).then(
            function () {
                alert("✅ Message sent! Check your email.");
                form.reset();
            },
            function (error) {
                alert("❌ Failed to send email.");
                console.error(error);
            }
        );
    });

});
