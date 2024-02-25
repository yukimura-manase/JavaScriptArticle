// [ プロフェッショナル 〜コメントの流儀〜 ]

// Type1. 関数に対するコメント

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

const result = makeRundom(1, 12);
console.log(result); // 1 〜 12 の乱数

/**
 * NOTE: 日付をロケール文字列に変換する関数
 * @function toLocaleDate - 日付のロケール文字列変換
 * @params {Date} date - 日付
 * @return {string} ロケール文字列
 */
const toLocaleDate = (date) =>
  `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;

// Type2. クラスに対するコメント

/**
 * TODO: クラスにメソッドを追加する
 * NOTE: クラスの説明
 * @class
 */
class ClassName {
  /**
   * NOTE: コンストラクタの説明
   * @constructor
   * @param {string} name - 名前
   */
  constructor(name) {
    this.name = name;
  }

  /**
   * NOTE: メソッドの説明
   * @method
   * @param {string} name - 名前
   */
  method(name) {
    this.name = name;
  }
}

// Type3. 変数に対するコメント

/**
 * NOTE: 変数の説明
 * @type {string}
 */
const variable = "value";

// Type4. プロパティに対するコメント

/**
 * NOTE: クラスの説明
 * @class
 */
class ClassName {
  /**
   * NOTE: プロパティの説明
   * @type {string}
   */
  prop = "value";
}
