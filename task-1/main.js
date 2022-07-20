function sum(x) {
  if (x >= 100) {
    a = parseInt(x / 100);
    b = parseInt(x / 10) % 10;
    c = x % 10;
    num = a * 100 + parseInt(b / 2) * 30 + c * 2 + (b % 2) * 20;
  } else if (x < 100) {
    a = 0;
    b = parseInt(x / 10) % 10;
    c = x % 10;
    num = parseInt(b / 2) * 30 + c * 2 + (b % 2) * 20;
  } else if (x < 10) {
    a = 0;
    b = 0;
    c = x;
    num = c * 2;
  }
  console.log(num);
}

sum(123);
