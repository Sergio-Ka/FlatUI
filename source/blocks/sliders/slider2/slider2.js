var $slider2 = $(".js-slider-2");

$slider2.slider({
    min: 0,
    max: 100,
    value: 75,
    range: 'min'
});

$('.js-slider-2 .ui-slider-handle').each(function (index, handle) {
    if (index % 2 == 0)
    $(handle).addClass('even-handle');
    else $(handle).addClass('odd-handle');
});

$('.js-slider-2 .ui-slider-range-min').each(function (index, handle) {
    if (index % 2 == 0)
    $(handle).addClass('even-range-min');
    else $(handle).addClass('odd-range-min');
});