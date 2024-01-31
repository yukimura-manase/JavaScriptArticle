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

// Type2. クラスに対するコメント

/**
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
