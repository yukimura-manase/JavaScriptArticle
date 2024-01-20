// 1. 13835 の Task を 1分 で 1件 Clear すると 何時間かかるかを計算する
const minutes = 13835;

// minutes から 時間を計算する
const hours = Math.floor(minutes / 60);
console.log(hours); // => 230
// minutes から 残りの分数を計算する
const remainingMinutes = minutes % 60;
console.log(remainingMinutes); // => 35

// 時間と分数を表示する
console.log(`${hours}時間${remainingMinutes}分`);
// => 230時間35分

// 230時間35分 を 日数に直す
const days = Math.floor(hours / 24);
console.log(days); // => 9 => 9日

// 2. 人力の場合は、1週間で派遣3名を使って1000件の業種を埋める作業をしている

const task = 13835;

// task を 1週間で 1000件 Clear すると 何時間かかるかを計算する
const weeks = task / 1000;
console.log(weeks); // => 13.835 すなわち 13週間(約14週間) => 3ヶ月半

// 14週間 を 時間にする
const hours_2 = weeks * 7 * 24;
console.log(hours_2); // 2324.2799999999997 => 2324時間
