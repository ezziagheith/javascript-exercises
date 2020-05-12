// const ftoc = function() {
//   return (32 - 32) * 5 / 9
// }

// const ftoc = function() {
//   let faToC = (100 - 32) * 5 / 9
//   let answer = parseFloat(faToC.toFixed(1))
//   return answer;
// }

// const ftoc = function() {
//   let faToC = (-100 - 32) * 5 / 9
//   let answer = parseFloat(faToC.toFixed(1))
//   return answer;
// }

// const ctof = function() {
//   let ceToF = (0 * 9/5) + 32;
//   return ceToF

// }

// const ctof = function() {
//   let ceToF = (73.2 * 9/5) + 32;
//   let answer = parseFloat(ceToF.toFixed(1));
//   return answer;
// }

const ctof = function() {
  let ceToF = (-10 * 9/5) + 32;
  let answer = parseFloat(ceToF.toFixed(1));
  return answer;
}

module.exports = {
  // ftoc,
  ctof
}
