// 小数点(レート) を パーセントに変換する

/** 小数点(レート) */
const postRate = 0.3158;

/** パーセント表記(%) */
const percent = postRate.toLocaleString("ja-JP", {
  style: "percent",
});
console.log(percent); // 32%
