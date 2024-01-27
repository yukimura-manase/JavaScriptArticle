/**
 * NOTE: 日付の新しい順(降順) で Sortする
 * @param {string} a - 日付
 * @param {string} b - 日付
 * @return {number}
 */
function descTimeSort(a, b) {
  return a < b ? 1 : -1;
}

/** 文字列の日付リスト */
let dateList = [
  "2018/08/15",
  "2018/01/05",
  "2018/12/10",
  "2018/05/01",
  "2018/12/01",
  "2018/11/01",
  "2019/01/01",
  "2019/02/01",
];

// 日付の新しい順(降順・desc)
dateList.sort((a, b) => descTimeSort(a, b));
console.log("dateList Ver. 日付の新しい順(降順)", dateList);
// dateList Ver. 日付の新しい順(降順)  (8) ['2019/02/01', '2019/01/01', '2018/12/10', '2018/12/01', '2018/11/01', '2018/08/15', '2018/05/01', '2018/01/05']

/** Date Object の日付リスト */
const dateTimeList = [
  { id: 1, date: new Date(2020, 2, 22) },
  { id: 2, date: new Date(2020, 1, 1) },
  { id: 3, date: new Date(2019, 7, 28) },
  { id: 4, date: new Date(2080, 1, 1) },
  { id: 5, date: new Date(2100, 12, 12) },
];

// 日付の新しい順(降順・desc)
dateTimeList.sort((a, b) => descTimeSort(a.date, b.date));
console.log("dateTimeList Ver. 日付の新しい順(降順)", dateTimeList);
// [ 出力結果 ]
// dateTimeList Ver. 日付の新しい順(降順)
// 0: {id: 5, date: Wed Jan 12 2101 00:00:00 GMT+0900 (日本標準時)}
// 1: {id: 4, date: Thu Feb 01 2080 00:00:00 GMT+0900 (日本標準時)}
// 2: {id: 1, date: Sun Mar 22 2020 00:00:00 GMT+0900 (日本標準時)}
// 3: {id: 2, date: Sat Feb 01 2020 00:00:00 GMT+0900 (日本標準時)}
// 4: {id: 3, date: Wed Aug 28 2019 00:00:00 GMT+0900 (日本標準時)}

// ------------------------------- 降順 -------------------------------

/**
 * NOTE: 日付の古い順(昇順) で Sortする
 * @param {string} a - 日付
 * @param {string} b - 日付
 * @return {number}
 */
function ascTimeSort(a, b) {
  return a > b ? 1 : -1;
}

// 日付の古い順(昇順)
dateList.sort((a, b) => ascTimeSort(a, b));
console.log("dateList Ver. 日付の古い順(昇順)", dateList);
// dateList Ver. 日付の古い順(昇順) (8) ['2018/01/05', '2018/05/01', '2018/08/15', '2018/11/01', '2018/12/01', '2018/12/10', '2019/01/01', '2019/02/01']

/** Date Object の日付リスト */
const dateTimeList2 = [
  { id: 1, date: new Date(2020, 2, 22) },
  { id: 2, date: new Date(2020, 1, 1) },
  { id: 3, date: new Date(2019, 7, 28) },
  { id: 4, date: new Date(2080, 1, 1) },
  { id: 5, date: new Date(2100, 12, 12) },
];
// 日付の古い順(昇順)
dateTimeList2.sort((a, b) => ascTimeSort(a.date, b.date));
console.log("dateTimeList2 Ver. 日付の古い順(昇順)", dateTimeList2);
// [ 出力結果 ]
// dateTimeList2 Ver. 日付の古い順(昇順)
// 0: {id: 3, date: Wed Aug 28 2019 00:00:00 GMT+0900 (日本標準時)}
// 1: {id: 2, date: Sat Feb 01 2020 00:00:00 GMT+0900 (日本標準時)}
// 2: {id: 1, date: Sun Mar 22 2020 00:00:00 GMT+0900 (日本標準時)}
// 3: {id: 4, date: Thu Feb 01 2080 00:00:00 GMT+0900 (日本標準時)}
// 4: {id: 5, date: Wed Jan 12 2101 00:00:00 GMT+0900 (日本標準時)}
