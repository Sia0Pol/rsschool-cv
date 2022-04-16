/*Слайдер*/

document.addEventListener('DOMContentLoaded', function (){
    let slider = new SimpleAdaptiveSlider('.slider', {
        autoplay: false,
        interval: 5000,
        swipe: true,
    });
});