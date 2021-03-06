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

// Back to top button

var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}