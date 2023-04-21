// var map = new maplibregl.Map({
//     container: 'map',
//     //style:'https://api.maptiler.com/maps/basic-v2/style.json?key=gEwTz8EZKm1Uu0GCcZVM',
//     style:'https://api.maptiler.com/maps/hybrid/style.json?key=HWAymHnQwVJuf7VLWFBt',
//     //center: [-101.6313894764541, 21.166128124361702],
//     center: [-0.11,51.49],
//     zoom: 15
// });
// var london = new maplibregl.Marker()
// .setLngLat([-0.11,51.49])
// //.setLngLat([-101.71130247375336, 21.15260434696904])
// //.setLngLat([-101.6313894764541, 21.166128124361702])
// .addTo(map);

var map = new maplibregl.Map({
    container: 'map',
    style:'https://api.maptiler.com/maps/basic-v2/style.json?key=gEwTz8EZKm1Uu0GCcZVM',
    // style:'https://api.maptiler.com/maps/bright-v2/style.json?key=gEwTz8EZKm1Uu0GCcZVM',
    center: [-0.11,51.49],
    // center: [-101.6313894764541, 21.166128124361702],
    zoom: 2
});

map.on('load', ()=>{
    map.addSource('Airport_points',{
    type:'geojson',
    //data:'https://api.maptiler.com/data/2e7588a7-9154-4b1e-9deb-62219a1e950d/features.json?key=gEwTz8EZKm1Uu0GCcZVM'
    data: 'https://api.maptiler.com/data/4566af20-37b8-47f1-b15c-6c16cfc3bb35/features.json?key=HWAymHnQwVJuf7VLWFBt'
    });
    map.addLayer({
        'id':'Airports',
        'type':'symbol',
        'source':'Airport_points',
        'layout':{
            'icon-image':'Airport_icon',
            'icon-size':0.05,
        }
    });
    map.loadImage('https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-plane-512.png',
        (error,image)=>{
            if(error) throw error;
            map.addImage('Airport_icon',image);
        });
});