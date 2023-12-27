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

/** Objectのリストから、CSVを作成する */
const convertToCSV = (data, headerOrder) => {
  /** headerOrderを入れているのは、JavaScriptの場合Object.keys()だと順番が必ずしも守られないからです。 */
  const headerString = headerOrder.join(",");
  const replacer = (_, value) => value ?? "";
  const rowItems = data.map((row) =>
    headerOrder
      .map((fieldName) => JSON.stringify(row[fieldName], replacer))
      .join(",")
  );

  /** headerとコンテンツ部分を結合して、CSVフォーマットの文字列を作成する */
  const csv = [headerString, ...rowItems].join("\r\n");
  return csv;
};

/** Download・処理 */
const downloadCSV = (data, name) => {
  /** Blob Object を作成する Type. CSV */
  const blob = new Blob([data], { type: "text/csv" });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.setAttribute("href", url);
  a.setAttribute("download", `${name}.csv`);
  a.click();
  a.remove();
};

/** 1つの行・データ */
const csvRow = groupList[0];

/** Object から、Map の生成 => Map は、key の順序が保証されている */
const csvRowMap = new Map(Object.entries(csvRow));

const csvHeader = [];

// Mapから配列を作成して、CSV の HeaderList(KeyList)を作成する
Array.from(csvRowMap).forEach((keyValList) => {
  csvHeader.push(keyValList[0]);
});
console.log("csvHeader", csvHeader);

/** CSVデータを作成 */
const csvData = convertToCSV(groupList, csvHeader);
console.log(csvData);

// CSV・Download
downloadCSV(csvData, "robotama2");

// 参考・引用: [JavaScriptで配列形式のJSONをCSVとしてダウンロードする方法](https://zenn.dev/yui/articles/32b02c23e70dbc)
