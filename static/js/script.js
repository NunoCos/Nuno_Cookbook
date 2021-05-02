/*
    jQuery for MaterializeCSS initialization
*/

$(document).ready(function () {
    $(".sidenav").sidenav();
    $('.collapsible').collapsible();
    $('.modal').modal();
    $('input#recipe_name, textarea#recipe_description, textarea#recipe_ingredients, textarea#recipe_steps').characterCounter();
    });


// Slider

const slider = document.querySelector('.slider');
M.Slider.init(slider, {
    indicators: true,
    height: 500,
    transition:500,
    interval: 6000
});

