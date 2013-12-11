$(document).ready(function () {
    /*------------------------------------*\
        //Jvector Map
    \*------------------------------------*/
    var $loc = window.location.pathname;
    var $orig = window.location.origin;
    var $locorig = $orig + $loc;
    $.getJSON($locorig + 'wp-content/themes/millerortho/js/markers.json', function(data){
        $('#world-map').vectorMap({
            map: 'world_mill_en',
            backgroundColor: '#fff',
            zoomOnScroll: false,
            zoomButtons: false,
            onRegionLabelShow: function(e, label, code){
                return false;
            },
            onMarkerLabelShow: function(event, label, index){
                label.html(
                  '<b>'+data.names.name[index]+'</b><br/>'
                );
            },
            series: {
                regions: [{
                    attribute: 'fill'
                }]
            },
            markers: data.locs.coords,
            regionStyle: {
                initial: {
                    fill: '#929292',
                    "fill-opacity": 1,
                    stroke: 'none',
                    "stroke-width": 0,
                    "stroke-opacity": 1
                },
                hover: {
                    "fill-opacity": 0.8
                }
            },
            markerStyle: {
                initial: {
                    fill: '#34bcb7',
                    stroke: '#696969',
                    r: 5
                },
                hover: {
                    stroke: '#696969',
                    "stroke-width": 1
                }
            }
        });
    });
});