$("#slider1").slider({ // вид первого слайдера и настройки
    value: '',
    min: 0,
    max: 100,
	value: 40,
    create: function (event, ui) {
        $('.ui-slider-handle').append('<input class="slider-value" value="40"/>');
        $('.ui-slider-handle').append('<div class="slider-value__tail"></div>');
    },
    slide: function (event, ui) {
        $(".slider-value").val(ui.value);
    }
});