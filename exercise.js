//reverse array values upto the specified index

var reverseKGroup = function (head, k) {
  let headCopy = head;

  let finalArr = [];

  if (
    k >= 1 &&
    k <= headCopy.length &&
    headCopy.length <= 5000 &&
    headCopy.every((el) => el >= 0 && el <= 1000)
  ) {
    let subArr = [];

    let finalArrIndex = k - 1;

    for (let ind = 0; ind < headCopy.length; ind++) {
      subArr.push(headCopy[ind]);

      if (ind > 0 && ind == finalArrIndex) {
        finalArr = [...finalArr, ...subArr.reverse()];
        subArr = [];
        finalArrIndex += k;
      } else if (ind == headCopy.length - 1) {
        finalArr = [...finalArr, ...subArr];
      }
    }
  }

  return finalArr;
};

console.log(reverseKGroup([1, 2, 3, 4, 5, 6, 7, 8, 9], 4));
