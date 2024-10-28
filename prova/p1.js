function fn(v) {
  if (v == 1 || v == 0) return 1;
  if (v % 2 == 0) return fn(v / 2) + 2;
  else return fn(v - 1) + 3;
}
console.log(fn(7))