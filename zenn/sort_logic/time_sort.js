/** 1. 並び替えたい 対象の DataSet (送付先リスト) */
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

/** 最新登録順(降順)で、Sortされた配列 */
const timeSortListAsc = [];

// 2. addressList の create_time を基準に「最新登録順(降順)」で Sort して timeSortList に pushする
addressList
  .sort((a, b) => {
    return a.create_time > b.create_time ? -1 : 1;
  })
  .forEach((address) => {
    timeSortListAsc.push(address);
  });
console.log("最新登録順(降順・desc)", timeSortListAsc);

console.log("--------------------------");

/** 古い順(昇順) で、Sortされた配列 */
const timeSortListDesc = [];

// 3. 古い順(昇順): addressList の create_time を基準に「古い順(昇順)」で Sort して timeSortList に pushする
addressList
  .sort((a, b) => {
    return a.create_time < b.create_time ? -1 : 1;
  })
  .forEach((address) => {
    timeSortListDesc.push(address);
  });
console.log("古い順(昇順・asc)", timeSortListDesc);
