/**
 * console.group(), groupEnd(), console.groupCollapsed() の使い方
 */
const dataSetList = [
  { order: 1, val: "Robotama" },
  { order: 2, val: "Saitama" },
  { order: 3, val: "Tama" },
  { order: 4, val: "Hakutou" },
  { order: 5, val: "Momo" },
];

const targetVal = "Saitama";

const updateData = { order: 2, val: "Gunmar" };

// 1. console.group() で、Console出力のグループを定義・開始する
// => 最初から、Openされている
console.group("console.group Test");

console.log("group 内の Log");

const updateTargetIndex = dataSetList.findIndex(
  (dataSet) => dataSet.val === targetVal
);
console.log("updateTargetIndex", updateTargetIndex);

if (updateTargetIndex !== -1) {
  dataSetList.splice(updateTargetIndex, 1, updateData);

  console.log("dataSetList", dataSetList);
}

// 2. console.groupEnd() で、Console出力のグループ出力を終了させる。
console.groupEnd();

// 3. console グループ外の Log
console.log("group 外の Log");

// 4. console.groupCollapsed() で、Console出力のグループを定義・開始する
// => 最初は、Closeされている
console.groupCollapsed("console.groupCollapsed Test");

console.log("Open しないと 見れない Log_1");
console.log("Open しないと 見れない Log_2");
console.groupEnd();

/**
 * console.time(), timeEnd(), timeLog() の使い方
 */

const cardList = [
  { id: 1, participant: "ロボたま", affiliation: "ロボ玉開発部" },
  { id: 2, participant: "まりたま", affiliation: "エンジニア" },
  { id: 3, participant: "白桃", affiliation: "エンジニア" },
  { id: 4, participant: "ももちゃん", affiliation: "人事部" },
  { id: 5, participant: "まさぴょん", affiliation: "営業部" },
  { id: 6, participant: "まりぴょん", affiliation: "デザイナー" },
  { id: 7, participant: "ハム太郎", affiliation: "エンジニア" },
  { id: 8, participant: "ロボ太郎", affiliation: "ロボ玉開発部" },
  { id: 9, participant: "まり太郎", affiliation: "デザイナー" },
  { id: 10, participant: "ぷる玉", affiliation: "エンジニア" },
  { id: 11, participant: "ロボ玉試作1号機", affiliation: "営業部" },
];

/** 指定した数値ごとに配列を区分け・分割する Function */
function ArrayGrouping(list, groupingNum) {
  console.group("ArrayGrouping_処理時間測定");

  // 1. timeEnd('test_timer') するまでの処理時間の測定を開始する
  console.time("test_timer");
  let len = list.length;
  let curentNum = 0;
  const separateList = [];
  let tmpList = [];

  console.log("途中の時間は、console.timeLog() で確認できる");

  // 2. test_timer の処理途中での経過時間を出力する
  console.timeLog("test_timer");

  list.forEach((item, index) => {
    curentNum = index + 1;
    tmpList.push(item);
    if (curentNum % groupingNum === 0) {
      separateList.push(tmpList);
      tmpList = [];
    }
    if (len === curentNum) {
      if (!tmpList.length) return;
      else separateList.push(tmpList);
    }
  });
  console.log("ArrayGrouping_処理完了");
  // 3. test_timer の処理時間の測定を終了する
  console.timeEnd("test_timer");
  console.groupEnd();
  return separateList;
}

console.log(ArrayGrouping(cardList, 2));

/**
 * 配列内の特定の値を、設定した値で、置き換える Function
 */
function ArrayTargetReplace(array, targetVal, replaceVal) {
  console.groupCollapsed("ArrayTargetReplace_Call");

  console.log("array", array);
  console.log("targetVal", targetVal);
  console.log("replaceVal", replaceVal);
  let objectFlag = false;
  // 配列ではなく、Objectの場合
  if (!Array.isArray(targetVal) && typeof targetVal === "object") {
    objectFlag = true;
  }
  console.log("objectFlag", objectFlag);

  let updateTargetIndex = -1;
  if (objectFlag) {
    updateTargetIndex = array.findIndex((dataSet) =>
      Object.is(dataSet, targetVal)
    );
  } else {
    // 3. findIndex()で条件に、Matchするvalueのindex番号を取得する。
    updateTargetIndex = array.findIndex((dataSet) => dataSet === targetVal);
  }
  console.log("updateTargetIndex", updateTargetIndex);

  let copyArray = JSON.parse(JSON.stringify(array));

  if (updateTargetIndex !== -1) {
    // 5. Array.splice() で、oldValue を削除して、newValueで、置き換える
    copyArray.splice(updateTargetIndex, 1, replaceVal);
  }
  console.log("copyArray", copyArray);
  console.groupEnd();
  return copyArray;
}

const targetVal2 = { order: 3, val: "Tama" };

const updateData2 = { order: 3, val: "Maritama" };

const result = ArrayTargetReplace(dataSetList, targetVal2, updateData2);

console.log("ArrayTargetReplace_result", result);
