/** ユーザーの送付先(住所)リスト */
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

/** 検索・文字列 */
const searchQuery = "東";
// const searchQuery = "たま";

/**
 * NOTE: フリー検索 Box の検索処理
 * - 配送先(住所)リスト 内を フリー検索できる
 * - 検索条件に部分一致する 配送先リストだけを表示する
 * - アドレス (住所・文字列) との部分一致
 * - フルネームとの部分一致
 * - 電話番号との部分一致
 * @param {Array} addressList 送付先(住所)リスト
 * @param {String} searchQuery 検索・文字列
 * @return {Array} 部分一致する 送付先(住所)リスト
 */
const searchFunction = (addressList, searchQuery) => {
  /** 検索に部分一致する 送付先(住所)リスト */
  const matchAddressList = [];

  /** 部分一致パターン・正規表現 */
  let searchQueryRegExp = new RegExp(searchQuery);
  console.log("searchQueryRegExp", searchQueryRegExp);

  // 送付先(住所) を 1つずつ検索する
  addressList.forEach((address) => {
    /** 送付先(住所) */
    const addressStr = `${address.province}${address.city}${address.district} ${address.building} ${address.address_line1}`;
    /** フルネーム */
    const fullName = address.full_name;
    /** 電話番号 */
    const telNumber = address.phone_number;

    // 検索文字列が 送付先(住所)・フルネーム・電話番号 の文字列と、部分一致するかどうかを判定する
    const isMatch =
      searchQueryRegExp.test(addressStr) ||
      searchQueryRegExp.test(fullName) ||
      searchQueryRegExp.test(telNumber);

    // 部分一致する 送付先(住所)リスト を追加する
    if (isMatch) {
      matchAddressList.push(address);
    }
  });

  return matchAddressList;
};

const matchAddressList = searchFunction(addressList, searchQuery);

console.log("検索結果のリスト", matchAddressList);
