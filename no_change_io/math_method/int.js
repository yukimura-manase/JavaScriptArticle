/**
 * NOTE: 12, 15, 18 などの数値の1桁目を切り捨てる関数
 * @name floor10 - 10の位で切り捨てる
 * @params {number} num - 数値
 * @return {number} 切り捨てられた数値
 */
function floor10(num) {
  return Math.floor(num / 10) * 10;
}

console.log(floor10(1)); // 0
console.log(floor10(2)); // 0
console.log(floor10(8)); // 0
console.log(floor10(10)); // 0
console.log(floor10(12)); // 10
console.log(floor10(15)); // 10
console.log(floor10(18)); // 10
console.log(floor10(22)); // 20
console.log(floor10(25)); // 20
console.log(floor10(28)); // 20
console.log(floor10(32)); // 30
console.log(floor10(35)); // 30
console.log(floor10(38)); // 30
console.log(floor10(42)); // 40
console.log(floor10(45)); // 40
console.log(floor10(48)); // 40
console.log(floor10(52)); // 50
console.log(floor10(55)); // 50
console.log(floor10(58)); // 50
console.log(floor10(122)); // 120
console.log(floor10(125)); // 120
console.log(floor10(128)); // 120
