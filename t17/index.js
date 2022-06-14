//let map;

function initMap() {
    const posicion = {
        lat: -25.363, 
        lng: 131.044 
    }
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: posicion
    })
}

//window.initMap = initMap;