function fn() {
  var entrada = ["PaTiNeTe", "SKATE", "Patinete", "BicicletA"];

  var matriz = [];
  var i = 0;

  entrada.forEach((e) => {
    if (matriz.length > 0) {
      var idx = matriz[0].indexOf(e.toLowerCase());
      if (idx !== -1) {
        matriz[idx][1]++;
      } else matriz.push([e.toLowerCase(), 1]);
    } else matriz.push([e.toLowerCase(), 1]);
  });

  matriz.forEach((e) => {
    console.log(e[0] + "-" + e[1]);
  });
}
fn();
``;
