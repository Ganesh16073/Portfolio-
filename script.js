$(document).ready(function() {
    $(window).scroll(function() {
        // sticky navbar on scroll script
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        // scroll-up button show/hide script
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function() {
        $('html').animate({ scrollTop: 0 });
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function() {
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function() {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Developer", "Vlogger", "Designer", "Freelancer", "Engineer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Developer", "Vlogger", "Designer", "Freelancer", "Engineer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Create a FormData object from the form
    const formData = new FormData(this);
    const data = {};

    // Convert FormData to JSON
    formData.forEach((value, key) => {
        data[key] = value;
    });

    // Send the form data using fetch with application/json
    fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json', // Use application/json
        },
        body: JSON.stringify(data) // Convert data to JSON
    })
    .then(async (response) => {
        let json = await response.json();
        if (response.ok) { // Check for a successful response
            // Show success message using SweetAlert
            Swal.fire({
                title: "Form Submitted!",
                text: "Your message has been sent successfully.",
                icon: "success"
            });
        } else {
            Swal.fire({
                title: "Error!",
                text: "There was an error: " + json.message,
                icon: "error"
            });
        }
    })
    .catch(error => {
        Swal.fire({
            title: "Submission failed!",
            text: "An error occurred: " + error.message,
            icon: "error"
        });
    });
});