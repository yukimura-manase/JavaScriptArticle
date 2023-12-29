const listCSV = [
  ["id", "participant", "affiliation"],
  [1, "ロボたま", "エンジニア"],
  [2, "まりたま", "エンジニア"],
  [3, "白桃", "営業部"],
  [4, "ももちゃん", "営業部"],
  [5, "まさぴょん", "営業部"],
  [6, "まりぴょん", "デザイナー"],
  [7, "ハム太郎", "エンジニア"],
  [8, "ロボ太郎", "デザイナー"],
  [9, "まり太郎", "デザイナー"],
  [10, "ぷる玉", "人事部"],
  [11, "ぷるぷる玉", "人事部"],
  [12, "ロボ玉試作1号機", "エンジニア"],
  [13, "ロボ玉試作2号機", "デザイナー"],
  [14, "ロボ玉試作1号機", "ロボ玉開発部"],
];

const headers = listCSV[0];
const newList = listCSV.slice(1).map((row) => {
  let obj = {};
  row.forEach((value, index) => {
    obj[headers[index]] = value;
  });
  return obj;
});

console.log(newList);
/** 実行結果 */
// [
//   { id: 1, participant: "ロボたま", affiliation: "エンジニア" },
//   { id: 2, participant: "まりたま", affiliation: "エンジニア" },
//   { id: 3, participant: "白桃", affiliation: "営業部" },
//   { id: 4, participant: "ももちゃん", affiliation: "営業部" },
//   { id: 5, participant: "まさぴょん", affiliation: "営業部" },
//   { id: 6, participant: "まりぴょん", affiliation: "デザイナー" },
//   { id: 7, participant: "ハム太郎", affiliation: "エンジニア" },
//   { id: 8, participant: "ロボ太郎", affiliation: "デザイナー" },
//   { id: 9, participant: "まり太郎", affiliation: "デザイナー" },
//   { id: 10, participant: "ぷる玉", affiliation: "人事部" },
//   { id: 11, participant: "ぷるぷる玉", affiliation: "人事部" },
//   { id: 12, participant: "ロボ玉試作1号機", affiliation: "エンジニア" },
//   { id: 13, participant: "ロボ玉試作2号機", affiliation: "デザイナー" },
//   { id: 14, participant: "ロボ玉試作1号機", affiliation: "ロボ玉開発部" },
// ];
