let M = L.map('mapid',{wrap: false}).setView([0, 0], 3);//[-27.109686, -109.346565], 3);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoidmlvbGV0Y3JhemUiLCJhIjoiY2t1MjZ5cmV1M3lucTJwcGkzZWc5ems1cSJ9.x05if93SSUY-jt52nxasKg', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'your.mapbox.access.token',
    noWrap: true,
    bounds: L.latLngBounds([-90, -180],[90, 180]),
}).addTo(M);

function formatPopup(info) {
    return `
        <b>${info.name}</b>
        <br>
        <img src="./assets/${info.img_name}" width="300">
        <small>${info.img_source}</small>
        <br>
        <p>${info.description}</p>
        <ul>
            <li>Current location: ${info.current_location}
            <li>Original location: ${info.original_location}</li>
            <li>Size: ${info.size}</li>

        </ul>
            `
}

function rapaNuiLocation() {
    return [-27.112417, -109.349747];
}

let moai = [
    {
        loc: [48.861023, 2.297358],
        original_loc: [-27.123905, -109.286137],
        name: 'Unnamed Moai',
        description: 'Taken by Louis Charles Watelin in 1934 on a Franco-Belgian mission to Rapa Nui. <sup>[1]</sup> Was donated to Musée de l’Homme and the contents of that museum were moved to Musée du Quai Branly when it was opened in 2006. <sup>[1]</sup>',
        current_location: 'Musée du Quai Branly',
        img_name: 'Moai_Musée_du_Quai_Branly.jpg',
        img_source: 'Image from Musée du Quai Branly (https://www.quaibranly.fr/en/explore-collections/base/Work/action/show/notice/21042-sculpture-anthropomorphe/)',
        size: '1.5 meters tall',
        original_location: 'Rano Raraku quarry',
    },
    {
        loc: [50.839338, 4.391506],
        original_loc: rapaNuiLocation(),
        name: 'Moai Pou hakanononga',
        description: 'Taken on 1934 on a Franco-Belgian mission to Rapa Nui. <sup>[1]</sup> "[T]he statue\'s name, Pou hakanononga, is obscure. Most commentators take it to refer to tuna fishing and connect the statue with a tuna fishing site." <sup>[1]</sup>',
        current_location: 'Musées Royaux d’Art et d’Histoire',
        img_name: 'moai_Musées_Royaux_d’Art_et_d’Histoire.gif',
        img_source: 'Image from Moai on the Move <sup>[1]</sup> (https://academic-oup-com.ezproxy2.library.colostate.edu/view-large/figure/9006568/hiscolfhq036f06_3c.gif)',
        size: '2.73 meters tall',
        original_location: 'Unknown location on Rapa Nui',
    },
    {
        loc: [51.518772, -0.126240],
        original_loc: [-27.189429, -109.442621],
        name: 'Hoa Hakananai\'a',
        description: '"Hoa Hakananai\'a was stolen from Rapa Nui—taken from the ceremonial grounds of Oroŋo sacred to the Taŋata Manu spiritual practices—in 1868 by Englishmen aboard the hms Topaze under the order of Commodore Richard Powell. On return to England, Commodore Powell gave him to Queen Victoria, who in turn donated him to the museum." <sup>[2]</sup>',
        current_location: 'British Museum',
        img_name: 'Hoa_Hakananai\'a.png',
        img_source: 'Image from Trustees of the British Museum (https://artsandculture.google.com/asset/hoa-hakananai-a/kwHuDcNF0g4yRg)',
        size: '2.42 meters tall',
        original_location: 'Oroŋo (Orongo) ceremonial village on Rapa Nui',
    },
    {
        loc: [-45.865915, 170.510682],
        original_loc: rapaNuiLocation(),
        name: 'Unnamed Moai',
        description: 'Likely taken from Rapa Nui in the late 1800s. Purchased from the Brander family in 1928 by the Otago Museum. <sup>[3]</sup>',
        current_location: 'Otago Museum',
        img_name: 'moai-otago.jpg',
        img_source: 'Image from Otago Musume (https://otagomuseum.nz/blog/otago-museum-moai/)',
        size: 'nearly 2 meters tall',
        original_location: 'Unknown location on Rapa Nui',
    },
    {
        loc: [-45.865915, 170.510682],
        original_loc: rapaNuiLocation(),
        name: 'Unnamed Moai',
        description: 'Likely taken from Rapa Nui in the late 1800s. Purchased from the Brander family in 1928 by the Otago Museum. <sup>[3]</sup>',
        current_location: 'Otago Museum',
        img_name: 'moai-otago.jpg',
        img_source: 'Image from Otago Musume (https://otagomuseum.nz/blog/otago-museum-moai/)',
        size: 'nearly 2 meters tall',
        original_location: 'Unknown location on Rapa Nui',
    },
    {
        loc: [18.470349, -69.908916],
        original_loc: rapaNuiLocation(),
        name: 'Unnamed Moai',
        description: 'Taken from Rapa Nui by the crew of O\'Higgins ship as a gift from Jean-Baptiste Dutrou-Bournier, a former french milliary officer who had sought refuge on Rapa Nui, in January of 1870. <sup>[4]</sup>',
        current_location: 'Museo Nacional de Historia Natural',
        img_name: 'moai-scan.png',
        img_source: 'Screenshot of 3d Scan from Museo Nacional de Historia Natural (https://www.mnhn.gob.cl/noticias/el-primer-moai-del-mnhn)',
        size: 'nearly 2 meters tall',
        original_location: 'Unknown location on Rapa Nui',
    },
]

let markers = []

for (let i = 0; i < moai.length; ++i) {
    let marker = L.marker(moai[i].loc).addTo(M);
    marker.bindPopup(formatPopup(moai[i]));

    if (moai[i].original_loc) {
        let path = [];
        path.push(moai[i].loc);
        path.push(moai[i].original_loc);
        
        let polyline = L.polyline(path, {color: 'red'}).addTo(M);
    }
}

// let marker = L.marker().addTo(M);

// marker.bindPopup("").openPopup();
