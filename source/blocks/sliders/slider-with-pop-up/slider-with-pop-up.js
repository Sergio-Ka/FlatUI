let $sliderWithPopUp = $('.js-slider-with-pop-up');
$sliderWithPopUp.slider({
    min: 0,
    max: 100,
    value: 40,
    create: function (event, ui) {
        let $sliderhandle = $sliderWithPopUp.children('.ui-slider-handle');
        $sliderhandle.append('<input class="slider-value js-slider-value" value="40"/><div class="slider-value__tail"></div>');
    },
    slide: function (event, ui) {
        let $slidervalue = $(".js-slider-value");
        $slidervalue.val(ui.value);
    }
});