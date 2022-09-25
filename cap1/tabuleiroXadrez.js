let saida = "";
let count = 8;

for (let size = 0; size < count; size++) {
  for (let si = 0; si < count; si++) {
    saida += " ";
    saida += "#";
  }
  if (size % 2 == 0) {
    saida += "\n ";
  } else {
    saida += "\n";
  }
}

console.log(saida);
