<div id="world-map" class="the-map" style="width: 100%;"></div>

<?php
$realLocs = array();
$locNames = array();
if( get_field('map_points') ){while( has_sub_field('map_points') ){
    $latlng = get_sub_field('lat_lng');
    $locname = get_sub_field('loc_name');
    $exploders = explode(",", $latlng);
    $realLocs[] = array(
        $latlng
    );
    $locNames[] = array(
        '"' . $locname . '"'
    );
}

    $theLoc = array('locs' => array('coords' => $realLocs), 'names' => array('name' => $locNames));
    $json = json_encode($theLoc);
    $json = str_replace('["', '[', $json);
    $json = str_replace('"]', ']', $json);
    $json = str_replace('\\', '', $json);

    $cur_dir = str_replace($DOCUMENT_ROOT, "", dirname($PHP_SELF)); 

    $fp = fopen(get_theme_root() . "/millerortho/js/markers.json", "w");
    fwrite($fp, $json);
    fclose($fp);
}
?>