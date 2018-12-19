let $sliderDiscrete = $(".js-slider-discrete");

$sliderDiscrete.slider({
    min: 0,
    max: 100,
    value: 75,
    range: 'min'
});

$('.js-slider-discrete .ui-slider-handle').each(function (index, handle) {
    if (index % 2 == 0)
    $(handle).addClass('even-handle');
    else $(handle).addClass('odd-handle');
});

$('.js-slider-discrete .ui-slider-range-min').each(function (index, handle) {
    if (index % 2 == 0)
    $(handle).addClass('even-range-min');
    else $(handle).addClass('odd-range-min');
});