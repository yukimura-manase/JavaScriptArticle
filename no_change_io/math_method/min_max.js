// 2つの数値を比較したときに、小さい方の数値を返す
const min = Math.min(12, 25);
console.log(min); // 12

/**
 * NOTE: 2つの数値を比較したときに、小さい方の数値を返す関数
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
function minCalc(a, b) {
  return a < b ? a : b;
}
console.log(minCalc(12, 25)); // 12

// 2つの数値を比較したときに、大きい方の数値を返す
const max = Math.max(120, 222);
console.log(max); // 222

/**
 * NOTE: 2つの数値を比較したときに、大きい方の数値を返す関数
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
function maxCalc(a, b) {
  return a > b ? a : b;
}
console.log(maxCalc(120, 222)); // 222
