const numList = [0, 1, 2, 3, 6, 12];

// [key, value] ペアの配列イテレーターを作成 & 分割代入
for (const [index, num] of numList.entries()) {
  console.log(`index: ${index}, num: ${num}`);
}
