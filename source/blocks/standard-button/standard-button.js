class StandardButton {
    
  constructor(element) {
    this.$element = element;
    this.initButton();
  }

  initButton() {
    this.$element.on('click', function callback(event) {
      event.preventDefault();
      let targetCoordinates = event.target.getBoundingClientRect();
      let xCoordinate = event.clientX - targetCoordinates.left;
      let yCoordinate = event.clientY - targetCoordinates.top;

      let ripple = $('<div>').addClass('standard-button_ripple');
      ripple.css('top', `${yCoordinate}px`);
      ripple.css('left', `${xCoordinate}px`);
      ripple.appendTo(event.target);

      setTimeout(function callback() {ripple.remove();}, 600);
    });
  }
}
    
$('.js-standard-button').each(function callback(index, domElement){
  new StandardButton($(domElement));
});