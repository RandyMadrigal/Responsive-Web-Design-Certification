/*
Si la hora contiene PM cambiar a modo noche,
en caso contrario modo dia.
*/

//propiedades :root
let properties = {
  "--building-color1": "#000",
  "--building-color2": "#000",
  "--building-color3": "#000",
  "--building-color4": "#000",
  "--window-color1": "#777",
  "--window-color2": "#777",
  "--window-color3": "#777",
  "--window-color4": "#777",
};

//propiedades .sky
let sky = document.querySelector(".sky");

function setSkyStyle(prop) {
  prop.style.setProperty(
    "background",
    "radial-gradient(closest-corner circle at 15% 15%,#ccc, #ccc 20%, #445 21%, #223 100%"
  );
}

function setRootStyle(property) {
  //aplicar propiedades :root
  for (const prop in property) {
    if (property.hasOwnProperty(prop)) {
      document.documentElement.style.setProperty(prop, property[prop]);
    }
  }
}

function getTime() {
  let date = new Date();
  let time = date.toLocaleTimeString("en-US");

  if (time.includes("PM") && date.getHours() >= 18) {
    setSkyStyle(sky);
    setRootStyle(properties);
  }

  if (time.includes("AM") && date.getHours() <= 7) {
    setSkyStyle(sky);
    setRootStyle(properties);
  }

  console.log(time);
}

getTime();

setInterval(() => {
  getTime();
}, 300000);
