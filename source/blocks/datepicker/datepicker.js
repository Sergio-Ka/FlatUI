class Datepicker {
    
  constructor(element) {
    this.$element = element;
    this.initDatepicker();
  }

  getDatepickerSettings() {
    return {
      prevText: this.$element.data('prevtext'),
      nextText: this.$element.data('nexttext'),
      currentText: this.$element.data('currenttext'),
      dayNamesMin: this.$element.data('daynamesmin'),
      dateFormat: this.$element.data('dateformat'),
      firstDay: this.$element.data('firstday'),
      altField: this.$element.data('altfield'),
      altFormat: this.$element.data('altformat'),
      showButtonPanel: true
    }
  }

  initDatepicker() {
    this.$element.datepicker(this.getDatepickerSettings());
  }
}
    
$('.js-datepicker__body').each(function callback(index, domElement){
  new Datepicker($(domElement));
});