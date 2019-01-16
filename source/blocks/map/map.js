class Map {
    
  constructor(element) {
    this.$element = element;
    this.initMap();
  }

  initMap() {
    const mapCoordinate = {lat: this.$element.data('lat'), lng: this.$element.data('lng')};
    const mapFrame = this.$element.find('.js-map__frame');
    const mapOptions = {zoom: 13, center: mapCoordinate, mapTypeControl: false, zoomControl: false, streetViewControl: false};

    const map = new google.maps.Map(mapFrame[0], mapOptions);
    const mapPopup = new google.maps.Marker({
      position: mapCoordinate,
      icon: this.$element.data('icon'),
      title: this.$element.data('title'),
      map: map
    });
  }
}
    
$('.js-map').each(function callback(index, domElement){
  new Map($(domElement));
});