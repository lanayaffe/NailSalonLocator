let options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

const output = document.getElementById("map");

function success(pos) {
	
	let latitude  = pos.coords.latitude;
                        let longitude = pos.coords.longitude;
	let accuracy = pos.coords.accuracy;

    const img = new Image();
    img.src = "https://maps.googleapis.com/maps/api/staticmap?center=" + latitude + "," + longitude + "&zoom=13&size=300x300&sensor=false";

    output.appendChild(img);

};

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
};

navigator.geolocation.getCurrentPosition(success, error, options);

 const img = new Image();
    const myLoc = `https://maps.googleapis.com/maps/api/staticmap?center=${latitude},${longitude}&zoom=13&size=300x300&maptype=roadmap&markers=color:blue%7Clabel:A%7C ${latitude},${longitude}`;
img.src = myLoc;

   