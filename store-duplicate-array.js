function sortingDuplicate() {
  var newarray = [];
  var duplicatearray = [];
  var val = document.getElementById("ArrayElements").value.split(" ");
  var [...arry] = val;
  console.log(arry.length);
  for (let i = 0; i < arry.length; i++) {
    for (let j = i + 1; j < arry.length; j++) {
      if (arry[i] === arry[j]) {
        duplicatearray.push(arry[i]);
      } else {
        newarray.push(arry[j]);
      }
    }
  }
  let dupvalues = [...new Set(duplicatearray)];
  let univalues = [...new Set(newarray)];
  alert(
    "duplicate Array elemnets: " +
      dupvalues +
      "\n" +
      "Unique Array elements: " +
      univalues
  );
}
