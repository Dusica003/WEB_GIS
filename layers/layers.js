ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:6316").setExtent([7452536.521333, 4958097.875126, 7462343.863656, 4964136.763717]);
var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format__1 = new ol.format.GeoJSON();
var features__1 = format__1.readFeatures(json__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:6316'});
var jsonSource__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1.addFeatures(features__1);
var lyr__1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__1, 
                style: style__1,
                interactive: true,
    title: 'Категорије непокретних културних добара<br />\
    <img src="styles/legend/_1_0.png" /> Непокретно културно добро од изузетног значаја<br />\
    <img src="styles/legend/_1_1.png" /> Непокретно културно добро од великог значаја<br />\
    <img src="styles/legend/_1_2.png" /> Непокретно културно добро<br />'
        });
var format__2 = new ol.format.GeoJSON();
var features__2 = format__2.readFeatures(json__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:6316'});
var jsonSource__2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__2.addFeatures(features__2);
var lyr__2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__2, 
                style: style__2,
                interactive: false,
                title: '<img src="styles/legend/_2.png" /> Граница општине Савски венац'
            });

lyr_GoogleMaps_0.setVisible(true);lyr__1.setVisible(true);lyr__2.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr__1,lyr__2];
lyr__1.set('fieldAliases', {'id': 'id', 'Naziv': 'Naziv', 'Kategorija': 'Kategorija', 'Vrsta': 'Vrsta', 'Slika': 'Slika', 'Назив': 'Назив', 'Катег': 'Категорија', 'Врста': 'Врста', 'Слика': 'Слика', 'Линк': 'Линк', });
lyr__2.set('fieldAliases', {'id': 'id', });
lyr__1.set('fieldImages', {'id': 'Hidden', 'Naziv': 'Hidden', 'Kategorija': 'Hidden', 'Vrsta': 'Hidden', 'Slika': 'Hidden', 'Назив': 'TextEdit', 'Катег': 'TextEdit', 'Врста': 'TextEdit', 'Слика': 'ExternalResource', 'Линк': 'TextEdit', });
lyr__2.set('fieldImages', {'id': 'TextEdit', });
lyr__1.set('fieldLabels', {'Назив': 'inline label', 'Катег': 'inline label', 'Врста': 'inline label', 'Слика': 'inline label', 'Линк': 'inline label', });
lyr__2.set('fieldLabels', {'id': 'no label', });
lyr__2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});