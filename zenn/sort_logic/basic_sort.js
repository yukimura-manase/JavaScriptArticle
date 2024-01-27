// Array.prototype.sort()で、指定配列を昇順または降順でSortすることができます。
// いわゆる「破壊的変更」を指定配列(元の配列)に加えるので、取り扱いには注意です
const numberList = [1, 30, 4, 21, 100000];

/** 昇順・Sort */
const ascNumberList = numberList.sort((a, b) => a - b);
console.log("ascNumberList", ascNumberList); // ascNumberList (5) [1, 4, 21, 30, 100000]
console.log("numberList(元配列)", numberList); // numberList(元配列) (5) [1, 4, 21, 30, 100000]

/** 降順・Sort */
const descNumberList = numberList.sort((a, b) => b - a);
console.log("descNumberList", descNumberList); // descNumberList (5) [100000, 30, 21, 4, 1]
console.log("numberList(元配列)", numberList); // numberList(元配列) (5) [100000, 30, 21, 4, 1]

// Array.prototype.toSorted()で、指定配列のコピーをSortすることができます。
// 指定配列(元の配列)の順序を変えたくない場合は、こちらを使用することになります。
const numberList2 = [1, 30, 4, 21, 100000];

/** 昇順・Sort */
const ascNumberList2 = numberList2.toSorted((a, b) => a - b);

/** 降順・Sort */
const descNumberList2 = numberList2.toSorted((a, b) => b - a);

console.log("numberList2(元配列)", numberList2); // numberList2(元配列) (5) [1, 30, 4, 21, 100000]
console.log("ascNumberList2", ascNumberList2); // ascNumberList2 (5) [1, 4, 21, 30, 100000]
console.log("descNumberList2", descNumberList2); // descNumberList2 (5) [100000, 30, 21, 4, 1]
