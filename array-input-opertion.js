function arrayOpertions() {
  var evensum = 0;
  var oddsum = 0;
  var evencount = 0;
  var oddcount = 0;
  var avgtotal = 0;
  var evenelements = [];
  var oddelements = [];

  var val = document.getElementById("ArrayElements").value.split(" ");
  var [...arrelement] = val;
  arrelement.forEach((num, index) => {
    if (index % 2 === 0) {
      evensum = evensum + parseInt(num);
      evencount = evencount + 1;
      evenelements.push(num);
    } else {
      oddsum = oddsum + parseInt(num);
      oddcount = oddcount + 1;
      oddelements.push(num);
    }
  });

  var difference = evensum - oddsum;
  var avg = (evensum + oddsum) / arrelement.length;

  var gcd = (a, b) => (b == 0 ? a : gcd(b, a % b));
  var gcdAll = (n, ...ns) => (ns.length == 0 ? n : gcd(n, gcdAll(...ns)));
  var sumofgcd = gcdAll(...oddelements) + gcdAll(...evenelements);
  alert(
    "Difference between the two sums: " +
      difference +
      "\n" +
      "Number of elements in odd places: " +
      oddcount +
      "\n" +
      "Number of elements in even places: " +
      evencount +
      "\n" +
      "average of all elements in the array: " +
      avg +
      "\n" +
      "GCD: " +
      sumofgcd
  );
}
