const array_0 = [
  "う",
  "い",
  "あ",
  "ウ",
  "イ",
  "ア",
  "宇",
  "井",
  "亜",
  "a",
  "i",
  "u",
];

array_0.sort();
console.log(array_0);
// 出力結果 => [a,i,u,あ,い,う,ア,イ,ウ,井,亜,宇]

const array = [
  "う",
  "い",
  "あ",
  "ウ",
  "イ",
  "ア",
  "宇",
  "井",
  "亜",
  "a",
  "i",
  "u",
];

array.sort((a, b) => {
  return a.localeCompare(b, "ja");
});
console.log(array);
// 出力結果 => [a,i,u,あ,ア,い,イ,う,ウ,亜,井,宇]
