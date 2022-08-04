// Code your solutions in this file
function writeCards(arr, mess) {
  let welcome = [];
  for (let i = 0; i < arr.length; i++) {
    welcome.push(`Thank you, ${arr[i]}, for the wonderful ${mess} gift!`);
  }
  return welcome;
}

function countDown(n) {
  for (let i = n; i >= 0; i--) {
    console.log(i);
  }
}

module.exports = { writeCards, countDown };
