function fn(v) {
  if (v > 16 || v < 0) console.log('erro');
  else {
    var mod3 = v % 3;
    var mod5 = v % 5;

    if (mod3 == 0 || mod5 == 0) console.log("baz");
    else if (mod3 == 0) console.log("foo");
    else if (mod5 == 0) console.log("bar");
    else console.log(v);
  }
}
fn(-1);
fn(0);
fn(3);
fn(5);
fn(8);
fn(10);
fn(11);
fn(15);
fn(22);
