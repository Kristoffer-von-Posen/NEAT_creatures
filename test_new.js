import { x, Tor, z } from './side.js';

document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("keydown", (event) => {
    if (event.key === "g" || event.key === "G") {
      let y = new Tor(2, 7, 4);
      let nowe = y.eee - z[x];
      alert(nowe);
    }
  });
});
