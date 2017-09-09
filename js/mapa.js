$(function () {

    function initMap() {

        var location = new google.maps.LatLng(-3.7459807,-38.5741626);

        var mapCanvas = document.getElementById('map');
        var mapOptions = {
            center: location,
            zoom: 18,
            panControl: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(mapCanvas, mapOptions);

    }

    google.maps.event.addDomListener(window, 'load', initMap);
});