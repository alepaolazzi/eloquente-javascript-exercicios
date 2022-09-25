function countBs(s) {
  return countChar(s, "B");
}

function countChar(s, c) {
  let cont = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === c) {
      cont++;
    }
  }
  return cont;
}
