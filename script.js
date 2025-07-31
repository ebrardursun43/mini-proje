function renkDegistir() {
  const renkler = ["red", "green", "blue", "yellow", "pink", "lightgray"];
  const rastgeleRenk = renkler[Math.floor(Math.random() * renkler.length)];
  document.body.style.backgroundColor = rastgeleRenk;
}