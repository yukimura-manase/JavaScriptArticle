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
