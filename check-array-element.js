function findingTheElement() {
  var firstarraymessage = 0;
  var secondarraymessage = 0;
  var arraymessage = "";
  var firstArrayElement = document
    .getElementById("FirstArrayElement")
    .value.split(" ");
  var secondArrayElement = document
    .getElementById("SecondArrayElement")
    .value.split(" ");
  var [...firstArray] = firstArrayElement;
  var [...secondArray] = secondArrayElement;

  firstArray
    .filter((num) => {
      return parseInt(num) === 4;
    })
    .forEach((num) => {
      firstarraymessage = 1;
    });

  secondArray
    .filter((num) => {
      return parseInt(num) === 4;
    })
    .forEach((num) => {
      secondarraymessage = 1;
    });

  if (firstarraymessage === 1 && secondarraymessage === 0) {
    arraymessage = "4 in first array";
  } else if (secondarraymessage === 1 && firstarraymessage === 0) {
    arraymessage = "4 in second array";
  } else if (secondarraymessage === 1 && firstarraymessage === 1) {
    arraymessage = "4 in both arrays";
  } else {
    arraymessage = "4 is not in both arrays";
  }
  alert(arraymessage);
}
