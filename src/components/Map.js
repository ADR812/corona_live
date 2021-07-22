function update_map() {
  fetch("/data.json").then(function (response) {
    return response.json();
  }).then(function (rsp) {
    console.log(rsp.data);
    rsp.data.forEach(function (element) {
      longitude = element.longitude;
      latitude = element.latitude;
      cases = element.infected;

      if (cases > 255) {
        color = "rgb(255,0,0)";
      } else {
        color = "rgb(".concat(cases, ",0,0)");
      }

      marker = new mapboxgl.Marker({
        draggable: false,
        color: color
      }).setLngLat([longitude, latitude]).addTo(map);
    });
  });
}

var interval = 2000;
setInterval(update_map(), interval);

export default update_map;