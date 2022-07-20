function sade(num) {
  let ans = " ";
  for (i = 2; i < num; i++) {
    if (num % i == 0) {
      ans = "No";
      break;
    } else {
      ans = "Yes";
    }
  }
  console.log(ans);
}

sade(12);
