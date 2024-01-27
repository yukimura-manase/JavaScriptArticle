/** 1. 都道府県 DataSet を用意する (name: 漢字, ruby: ひらがな)  */
const proviceItems = [
  { name: "北海道", ruby: "ほっかいどう" },
  { name: "青森県", ruby: "あおもりけん" },
  { name: "岩手県", ruby: "いわてけん" },
  { name: "宮城県", ruby: "みやぎけん" },
  { name: "秋田県", ruby: "あきたけん" },
  { name: "山形県", ruby: "やまがたけん" },
  { name: "福島県", ruby: "ふくしまけん" },
  { name: "茨城県", ruby: "いばらきけん" },
  { name: "栃木県", ruby: "とちぎけん" },
  { name: "群馬県", ruby: "ぐんまけん" },
  { name: "埼玉県", ruby: "さいたまけん" },
  { name: "千葉県", ruby: "ちばけん" },
  { name: "東京都", ruby: "とうきょうと" },
  { name: "神奈川県", ruby: "かながわけん" },
  { name: "新潟県", ruby: "にいがたけん" },
  { name: "富山県", ruby: "とやまけん" },
  { name: "石川県", ruby: "いしかわけん" },
  { name: "福井県", ruby: "ふくいけん" },
  { name: "山梨県", ruby: "やまなしけん" },
  { name: "長野県", ruby: "ながのけん" },
  { name: "岐阜県", ruby: "ぎふけん" },
  { name: "静岡県", ruby: "しずおかけん" },
  { name: "愛知県", ruby: "あいちけん" },
  { name: "三重県", ruby: "みえけん" },
  { name: "滋賀県", ruby: "しがけん" },
  { name: "京都府", ruby: "きょうとふ" },
  { name: "大阪府", ruby: "おおさかふ" },
  { name: "兵庫県", ruby: "ひょうごけん" },
  { name: "奈良県", ruby: "ならけん" },
  { name: "和歌山県", ruby: "わかやまけん" },
  { name: "鳥取県", ruby: "とっとりけん" },
  { name: "島根県", ruby: "しまねけん" },
  { name: "岡山県", ruby: "おかやまけん" },
  { name: "広島県", ruby: "ひろしまけん" },
  { name: "山口県", ruby: "やまぐちけん" },
  { name: "徳島県", ruby: "とくしまけん" },
  { name: "香川県", ruby: "かがわけん" },
  { name: "愛媛県", ruby: "えひめけん" },
  { name: "高知県", ruby: "こうちけん" },
  { name: "福岡県", ruby: "ふくおかけん" },
  { name: "佐賀県", ruby: "さがけん" },
  { name: "長崎県", ruby: "ながさきけん" },
  { name: "熊本県", ruby: "くまもとけん" },
  { name: "大分県", ruby: "おおいたけん" },
  { name: "宮崎県", ruby: "みやざきけん" },
  { name: "鹿児島県", ruby: "かごしまけん" },
  { name: "沖縄県", ruby: "おきなわけん" },
];

// 2. 事前に、都道府県の読み仮名(ruby: ひらがな) を基準に あいうえお順 で Sort する
proviceItems.sort((a, b) => a.ruby.localeCompare(b.ruby), "ja");
console.log("proviceItems", proviceItems);

/** 3. 並び替えたい 対象の DataSet (送付先リスト) */
const addressList = [
  {
    user_id: "1000020339",
    city: "渋谷区",
    full_name: "ロボ ロボたま",
    address_line1: "",
    address_line2: null,
    building: "",
    district: "ハチ公前",
    first_name: "ロボたま",
    last_name: "ロボ",
    input_type: 2,
    post_code: "111-0078",
    phone_number: "1111111111",
    user_address_id: 1000020357,
    province: "東京都",
    create_time: "2024-01-24T08:00:33.472Z",
    update_time: null,
    default: false,
  },
  {
    user_id: "1000020339",
    city: "桐生市",
    full_name: "白桃 さん",
    address_line1: "メゾン白桃",
    address_line2: null,
    building: "",
    district: "広沢町",
    first_name: "さん",
    last_name: "白桃",
    input_type: 2,
    post_code: "111-0075",
    phone_number: "1111111111",
    user_address_id: 1000020358,
    province: "群馬県",
    create_time: "2024-01-24T08:07:23.560Z",
    update_time: null,
    default: true,
  },
  {
    user_id: "1000020339",
    city: "名古屋市",
    full_name: "もも たん",
    address_line1: "桃玉ハウス",
    address_line2: null,
    building: "",
    district: "中央区",
    first_name: "たん",
    last_name: "もも",
    input_type: 2,
    post_code: "111-0077",
    phone_number: "1111111111",
    user_address_id: 1000020359,
    province: "愛知県",
    create_time: "2024-01-26T08:07:23.560Z",
    update_time: null,
    default: true,
  },
  {
    user_id: "1000020339",
    city: "福岡市",
    full_name: "ぴゅぴゅ丸",
    address_line1: "ぴゅぴゅ丸ハウス",
    address_line2: null,
    building: "",
    district: "ぴゅぴゅ丸",
    first_name: "丸",
    last_name: "ぴゅぴゅ",
    input_type: 2,
    post_code: "111-0077",
    phone_number: "1111111111",
    user_address_id: 1000020360,
    province: "福岡県",
    create_time: "2024-01-26T08:12:23.560Z",
    update_time: null,
    default: true,
  },
  {
    user_id: "1000020339",
    city: "さいたま市",
    full_name: "ぷる たま",
    address_line1: "",
    address_line2: null,
    building: "",
    district: "東大宮",
    first_name: "たま",
    last_name: "ぷる",
    input_type: 2,
    post_code: "111-0088",
    phone_number: "1111111111",
    user_address_id: 1000020365,
    province: "埼玉県",
    create_time: "2024-01-25T09:30:47.730Z",
    update_time: null,
    default: false,
  },
];

// 都道府県 を基準に あいうえお順 で Sort する
addressList.sort((addressA, addressB) => {
  /** 都道府県名 A */
  const provinceA = addressA.province;
  console.log("都道府県 Part A", provinceA);
  /** 都道府県名 B */
  const provinceB = addressB.province;
  console.log("都道府県 Part B", provinceB);

  /** 都道府県名 A の index(あいうえお順で並んでいる番号) */
  const orderindexA = proviceItems.findIndex(
    (provice) => provice.name === provinceA
  );
  /** 都道府県名 B の index(あいうえお順で並んでいる番号) */
  const orderindexB = proviceItems.findIndex(
    (provice) => provice.name === provinceB
  );
  console.log("あいうえお順で並んだ際の順序(番号) Part A", orderindexA);
  console.log("あいうえお順で並んだ際の順序(番号) Part B", orderindexB);

  // 昇順ソート(あいうえお順)
  return orderindexA - orderindexB;
});

console.log("addressList", addressList);
