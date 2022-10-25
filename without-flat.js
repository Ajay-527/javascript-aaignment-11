var arr = [1, 2, [3, 4, [5]]];

function withOutFlat(array) {
  let newarray = [];
  for (let i = 0; i < array.length; i++) {
    const current = array[i];
    if (!Array.isArray(current)) {
      newarray.push(current);
      continue;
    }

    for (let j = 0; j < current.length; j++) {
      const currentinner = current[j];
      if (!Array.isArray(currentinner)) {
        newarray.push(currentinner);
        continue;
      }
      for (let k = 0; k < currentinner.length; k++) {
        newarray.push(currentinner[k]);
      }
    }
  }
  return newarray;
}
console.log(withOutFlat(arr));
