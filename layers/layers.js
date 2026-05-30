var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_turistinetoke_1 = new ol.format.GeoJSON();
var features_turistinetoke_1 = format_turistinetoke_1.readFeatures(json_turistinetoke_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_turistinetoke_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_turistinetoke_1.addFeatures(features_turistinetoke_1);
var lyr_turistinetoke_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_turistinetoke_1, 
                style: style_turistinetoke_1,
                popuplayertitle: 'turistične točke',
                interactive: true,
                title: '<img src="styles/legend/turistinetoke_1.png" /> turistične točke'
            });
var format_pot_2 = new ol.format.GeoJSON();
var features_pot_2 = format_pot_2.readFeatures(json_pot_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pot_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pot_2.addFeatures(features_pot_2);
var lyr_pot_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_pot_2, 
                style: style_pot_2,
                popuplayertitle: 'pot',
                interactive: true,
                title: '<img src="styles/legend/pot_2.png" /> pot'
            });
var format_obmoje_3 = new ol.format.GeoJSON();
var features_obmoje_3 = format_obmoje_3.readFeatures(json_obmoje_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_obmoje_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_obmoje_3.addFeatures(features_obmoje_3);
var lyr_obmoje_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_obmoje_3, 
                style: style_obmoje_3,
                popuplayertitle: 'območje',
                interactive: true,
                title: '<img src="styles/legend/obmoje_3.png" /> območje'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_turistinetoke_1.setVisible(true);lyr_pot_2.setVisible(true);lyr_obmoje_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_turistinetoke_1,lyr_pot_2,lyr_obmoje_3];
lyr_turistinetoke_1.set('fieldAliases', {'fid': 'fid', 'naziv': 'naziv', 'opis': 'opis', });
lyr_pot_2.set('fieldAliases', {'fid': 'fid', 'naziv': 'naziv', 'opis': 'opis', });
lyr_obmoje_3.set('fieldAliases', {'fid': 'fid', 'naziv': 'naziv', 'opis': 'opis', });
lyr_turistinetoke_1.set('fieldImages', {'fid': 'TextEdit', 'naziv': 'TextEdit', 'opis': 'TextEdit', });
lyr_pot_2.set('fieldImages', {'fid': 'TextEdit', 'naziv': 'TextEdit', 'opis': 'TextEdit', });
lyr_obmoje_3.set('fieldImages', {'fid': 'TextEdit', 'naziv': 'TextEdit', 'opis': 'TextEdit', });
lyr_turistinetoke_1.set('fieldLabels', {'fid': 'no label', 'naziv': 'inline label - always visible', 'opis': 'inline label - visible with data', });
lyr_pot_2.set('fieldLabels', {'fid': 'inline label - always visible', 'naziv': 'inline label - always visible', 'opis': 'inline label - always visible', });
lyr_obmoje_3.set('fieldLabels', {'fid': 'no label', 'naziv': 'inline label - always visible', 'opis': 'inline label - always visible', });
lyr_obmoje_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});