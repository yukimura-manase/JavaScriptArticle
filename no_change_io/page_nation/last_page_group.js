/**
 * NOTE:「次の10件・Btn」の制御 Flag
 * - ページの最後の Group の場合は、表示しない。
 * - 例: 総ページ数が 25 の場合 21〜25ページ目では、「次の10件・Btn」表示しない。
 * - 25ページまである場合は、1〜10, 11〜20, 21〜25 の 3つのページネーション・Group がある。
 */

/** 1ページに表示する ページネーション Btn の上限 */
const displayPagenationBtnLimit = 10;

// ページの総数
const allPage = 25;

// 割り算の Result
const division = Math.floor(allPage / displayPagenationBtnLimit);
console.log(division); // 2

// 割り算の余り
const remainder = allPage % displayPagenationBtnLimit;
console.log(remainder); // 5

// 今のページ
const currentPage = 20;

// 最後のページネーション・Group の開始ページ Number
const lastPageGroupStart = division * displayPagenationBtnLimit + 1;
console.log(lastPageGroupStart); // 21

// 最後のページネーション・Group の終了ページ Number
const lastPageGroupEnd = lastPageGroupStart + remainder - 1;
console.log(lastPageGroupEnd); // 25

/**
 * NOTE: ページネーションの ラスト Group 判定 Flag
 * - ページネーションの ラスト Group かどうかの判定
 */
const isLastPageGroup = currentPage >= lastPageGroupStart;
console.log(isLastPageGroup); // false

/**
 * NOTE:「次の10件・Btn」の制御 Flag
 * - 「次の10件・Btn」を表示するかどうかの判定
 * - ページの最後の Group の場合は、「次の10件・Btn」を表示しない。
 * - 例: 25ページまである場合は、1〜10, 11〜20, 21〜25 の 3つのページネーション・Group がある。
 * - 総ページ数が 25 の場合 21〜25ページ目では、「次の10件・Btn」表示しない。
 */
const isNextBtnShow = this.currentPage < lastPageGroupStart;
console.log(isNextBtnShow); // true
