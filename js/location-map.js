ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
        center: [59.939304, 30.329127],
        zoom: 16,
        controls: ['zoomControl']
      }, {
        searchControlProvider: 'yandex#search'
      }),
  
      myPlacemark = new ymaps.Placemark([59.938631, 30.323055], {
      }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/map-pin.svg',
        iconImageSize: [80, 140],
        iconImageOffset: [-40, -140]
      }),
      // Тень как еще одна метка - переделать
      myPlacemarkShadow = new ymaps.Placemark([59.938631, 30.323055], {
      }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/map-pin-shadow.png',
        iconImageSize: [182, 110],
        iconImageOffset: [0, -110],
        cursor: 'default'
      });
    myMap.behaviors
      // Отключаем изменение масштаба колесом мыши
      .disable(['scrollZoom']);
    myMap.geoObjects
      .add(myPlacemarkShadow);
    myMap.geoObjects
      .add(myPlacemark);
  });