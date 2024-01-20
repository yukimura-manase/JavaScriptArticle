/**
 * NOTE: 2つの数値の間の乱数を返す関数
 * @name makeRundom - 乱数生成
 * @params {number} min - 最小値
 * @params {number} max - 最大値
 * @return {number} 乱数
 */
function makeRundom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
