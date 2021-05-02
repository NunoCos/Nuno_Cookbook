/*
    jQuery for MaterializeCSS initialization
*/

$(document).ready(function () {
    $(".sidenav").sidenav();
    $('.collapsible').collapsible();
    $('.modal').modal();
    $('input#recipe_name, textarea#recipe_description, textarea#recipe_ingredients, textarea#recipe_steps, textarea#message').characterCounter();
    });


// Slider

const slider = document.querySelector('.slider');
M.Slider.init(slider, {
    indicators: true,
    height: 500,
    transition:500,
    interval: 6000
});

/*The sendMail function was taken from Matt Rudge's 
Code Institute lessons and adpated to my project*/

function sendMail(contactForm) {
    emailjs.send("gmail", "template_21fob4i", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.email.value,
        "message": contactForm.message.value
    }).then(
        function(response) {
            console.log("SUCCESS", response);
            document.getElementById("contactUs").reset();
        },
        function(error) {
            console.log("FAILED", error);
        });

    return false;
}