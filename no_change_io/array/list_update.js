const cardList = [
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

const updateUser = {
  id: 7,
  participant: "ハム太郎 Ver.2",
  affiliation: "ハムハム・ランド",
};

const index = cardList.findIndex((card) => card.id === updateUser.id);
console.log("index:", index);

if (index !== -1) {
  cardList[index] = updateUser;
}
console.log("cardList:", cardList);
