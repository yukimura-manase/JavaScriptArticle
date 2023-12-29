const groupList = [
  { id: 1, participant: "ロボたま", affiliation: "エンジニア" },
  { id: 2, participant: "まりたま", affiliation: "エンジニア" },
  { id: 3, participant: "白桃", affiliation: "営業部" },
  { id: 4, participant: "ももちゃん", affiliation: "営業部" },
  { id: 5, participant: "まさぴょん", affiliation: "営業部" },
  { id: 6, participant: "まりぴょん", affiliation: "デザイナー" },
  { id: 7, participant: "ハム太郎", affiliation: "エンジニア" },
  { id: 8, participant: "ロボ太郎", affiliation: "デザイナー" },
  { id: 9, participant: "まり太郎", affiliation: "デザイナー" },
  { id: 10, participant: "ぷる玉", affiliation: "人事部" },
  { id: 11, participant: "ぷるぷる玉", affiliation: "人事部" },
  { id: 12, participant: "ロボ玉試作1号機", affiliation: "エンジニア" },
  { id: 13, participant: "ロボ玉試作2号機", affiliation: "デザイナー" },
  { id: 14, participant: "ロボ玉試作1号機", affiliation: "ロボ玉開発部" },
];

/** Object の配列を受け取り CSV形式の文字列に変換する Func */
const convertToCSV = (objArray) => {
  const array = typeof objArray !== "object" ? JSON.parse(objArray) : objArray;

  /** 1. Objectの Key を headerとして取り出して、結合する */
  let str =
    `${Object.keys(array[0])
      .map((value) => `"${value}"`)
      .join(",")}` + "\r\n";

  // 2. 各オブジェクトの値をCSVの行として追加する
  return array.reduce((str, next) => {
    str +=
      `${Object.values(next)
        .map((value) => `"${value}"`)
        .join(",")}` + "\r\n";
    return str;
  }, str);
};

/** Download・処理 */
const downloadCSV = (data, name) => {
  /** 1. Blob Object を作成する Type. CSV */
  const blob = new Blob([data], { type: "text/csv" });
  console.log("blob", blob);
  /** 2. Blob Object(Type.CSVファイル)のURLを作成する */
  const url = window.URL.createObjectURL(blob);
  console.log("url", url);
  const a = document.createElement("a");
  a.setAttribute("href", url);
  a.setAttribute("download", `${name}.csv`);
  a.click();
  a.remove();
};

/** CSVデータを作成 */
const csvData = convertToCSV(groupList);
console.log(csvData);

// CSV・Download
downloadCSV(csvData, "robotama");
