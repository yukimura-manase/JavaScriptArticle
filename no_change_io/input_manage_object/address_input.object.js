// 同じ商品を 2つ以上のアドレス(送付先)に分ける場合

/** 登録済みの送付先(住所) Info */
const existingAddress = [
  {
    user_id: "1000020339",
    city: "江東区",
    full_name: "ロボ ロボ玉",
    address_line1: "",
    address_line2: null,
    building: "",
    district: "大島",
    first_name: "ロボ玉",
    last_name: "ロボ",
    input_type: 2,
    post_code: "136-0072",
    phone_number: "09018463179",
    user_address_id: 1000020357,
    province: "東京都",
    create_time: "2024-01-24T08:00:33.472Z",
    update_time: null,
    default: true,
  },
  {
    user_id: "1000020339",
    city: "桐生市",
    full_name: "グンマー ロボたま",
    address_line1: "",
    address_line2: null,
    building: "",
    district: "ロボたま",
    first_name: "ロボたま",
    last_name: "グンマー",
    input_type: 2,
    post_code: "136-0072",
    phone_number: "1111111111",
    user_address_id: 1000020366,
    province: "群馬県",
    create_time: "2024-01-26T00:31:32.702Z",
    update_time: null,
    default: false,
  },
  {
    user_id: "1000020339",
    city: "上尾市",
    full_name: "ピュピュ まる",
    address_line1: "",
    address_line2: null,
    building: "ピュピュ丸ハイツ",
    district: "ピュピュ丸",
    first_name: "まる",
    last_name: "ピュピュ",
    input_type: 2,
    post_code: "121-0072",
    phone_number: "2222222222",
    user_address_id: 1000020367,
    province: "埼玉県",
    create_time: "2024-01-26T00:32:54.610Z",
    update_time: null,
    default: false,
  },
];
console.log("登録済みの送付先(住所) Info", existingAddress);

/** 商品情報 */
const orderProductList = [
  {
    product_id: "101985",
    pku: "1706074562",
    name: "Test Size Pricing",
    description:
      "豊富なカラバリとサイズ展開！\n定番のクルーネックスウェットをオリジナルで。\nせっかくなら誰も持っていない、あなただけのオリジナルスウェットを作ってみませんか？\nチームのお揃いスウェットとしてはもちろん、豊富なカラーバリエーションとサイズ展開なので、クリエイターさんやデザイナーさんの物販商品やスタッフ用ユニフォームとしてもご利用いただけます。",
    visible: true,
    regular_price: 4188,
    original_price: 1800,
    color: {
      color_list: [
        {
          color_id: 1,
          color_name: "ブラック",
          color_value: "#1E1E1E",
          methodIdArr: ["46", "67"],
        },
      ],
      color_count: 1,
    },
    size: {
      size_list: [
        {
          size_id: 3,
          size_name: "S",
          item_price: 2420,
          size_value: "S",
          original_price: 2200,
        },
        {
          size_id: 4,
          size_name: "M",
          item_price: 1980,
          size_value: "M",
          original_price: 1800,
        },
        {
          size_id: 5,
          size_name: "L",
          item_price: 1980,
          size_value: "L",
          original_price: 1800,
        },
      ],
      size_count: 3,
    },
    images: {
      images: [],
      image_count: 0,
    },
    rprice_history: null,
    oprice_history: null,
    user_id: "1000020339",
    parent_id: "101850",
    division_id: 1,
    create_time: "2024-01-24T05:35:02.000Z",
    update_time: null,
    create_by: "1000020339",
    update_by: null,
    kind_id: "3",
    producer_id: "2",
    subsidiary: {
      tagFees: [
        {
          size: "",
          kind_id: 3,
          fee_type: {
            feeType_id: 3,
            feeType_name: "下げ札なし",
            feeType_table: [
              {
                cost: 0,
                orderNumber: "1~",
              },
            ],
          },
          material: "",
          kind_name: "下げ札なし",
        },
      ],
      nameTagFees: [
        {
          size: "",
          kind_id: 1,
          fee_type: {
            feeType_id: 1,
            feeType_name: "デザインせずそのまま",
            feeType_table: [
              {
                cost: 0,
                orderNumber: "1~",
              },
            ],
          },
          material: "ポリエステル",
          kind_name: "デザインせずそのまま",
        },
      ],
      subsidiaryPriceWithoutTax: 0,
      subsidiaryPrice: 0,
    },
    promotion_flag: 1,
    admin_userid: null,
    status: 1,
    print_info: {
      area_kind: [
        {
          angle: 0,
          kind_id: 56,
          works_id: "230",
          kind_name: "襟下",
          printFees: [
            {
              cost: 1510,
              orderNumber: "1~20",
            },
            {
              cost: 1050,
              orderNumber: "21~40",
            },
            {
              cost: 1000,
              orderNumber: "41~60",
            },
            {
              cost: 950,
              orderNumber: "61~80",
            },
            {
              cost: 900,
              orderNumber: "81~100",
            },
            {
              cost: 850,
              orderNumber: "101~",
            },
          ],
          feeType_id: "67",
          print_flag: true,
        },
        {
          angle: "0",
          kind_id: 53,
          works_id: "238",
          kind_name: "胸中央",
          feeType_id: "67A",
          print_flag: false,
        },
        {
          kind_id: 52,
          works_id: "239",
          kind_name: "背中中央",
          feeType_id: "67A",
          print_flag: false,
        },
        {
          kind_id: 51,
          works_id: "228",
          kind_name: "右胸",
          feeType_id: "67",
          print_flag: false,
        },
        {
          kind_id: 50,
          works_id: "229",
          kind_name: "左胸",
          feeType_id: "67",
          print_flag: false,
        },
        {
          kind_id: 55,
          works_id: "235",
          kind_name: "右袖",
          feeType_id: "67",
          print_flag: false,
        },
        {
          kind_id: 54,
          works_id: "234",
          kind_name: "左袖",
          feeType_id: "67",
          print_flag: false,
        },
      ],
      method_id: "67",
      method_name: "オンデマンド転写（DTTS）",
      method_display_name: "オンデマンド転写",
      printPriceWithoutTax: 1510,
      printPrice: 1661,
    },
    delete_flag: 0,
    new_name: "Test Size Pricing",
    item_price: 2634,
    item_ratio: 10,
    print_fee: [
      {
        kind_id: 56,
        fee_type: {
          feeType_id: "67",
          feeType_name: "B_オンデマンド転写（DTTS）",
          feeType_table: [
            {
              cost: 1510,
              orderNumber: "1~20",
            },
            {
              cost: 1050,
              orderNumber: "21~40",
            },
            {
              cost: 1000,
              orderNumber: "41~60",
            },
            {
              cost: 950,
              orderNumber: "61~80",
            },
            {
              cost: 900,
              orderNumber: "81~100",
            },
            {
              cost: 850,
              orderNumber: "101~",
            },
          ],
        },
        kind_name: "襟下",
        print_flag: true,
      },
      {
        kind_id: 53,
        fee_type: {
          feeType_id: "67A",
          feeType_name: "A_オンデマンド転写（DTTS）",
          feeType_table: [
            {
              cost: 1610,
              orderNumber: "1~20",
            },
            {
              cost: 1200,
              orderNumber: "21~40",
            },
            {
              cost: 1150,
              orderNumber: "41~60",
            },
            {
              cost: 1100,
              orderNumber: "61~80",
            },
            {
              cost: 1050,
              orderNumber: "81~100",
            },
            {
              cost: 1000,
              orderNumber: "101~",
            },
          ],
        },
        kind_name: "胸中央",
        print_flag: false,
      },
      {
        kind_id: 52,
        fee_type: {
          feeType_id: "67A",
          feeType_name: "A_オンデマンド転写（DTTS）",
          feeType_table: [
            {
              cost: 1610,
              orderNumber: "1~20",
            },
            {
              cost: 1200,
              orderNumber: "21~40",
            },
            {
              cost: 1150,
              orderNumber: "41~60",
            },
            {
              cost: 1100,
              orderNumber: "61~80",
            },
            {
              cost: 1050,
              orderNumber: "81~100",
            },
            {
              cost: 1000,
              orderNumber: "101~",
            },
          ],
        },
        kind_name: "背中中央",
        print_flag: false,
      },
      {
        kind_id: 51,
        fee_type: {
          feeType_id: "67",
          feeType_name: "B_オンデマンド転写（DTTS）",
          feeType_table: [
            {
              cost: 1510,
              orderNumber: "1~20",
            },
            {
              cost: 1050,
              orderNumber: "21~40",
            },
            {
              cost: 1000,
              orderNumber: "41~60",
            },
            {
              cost: 950,
              orderNumber: "61~80",
            },
            {
              cost: 900,
              orderNumber: "81~100",
            },
            {
              cost: 850,
              orderNumber: "101~",
            },
          ],
        },
        kind_name: "右胸",
        print_flag: false,
      },
      {
        kind_id: 50,
        fee_type: {
          feeType_id: "67",
          feeType_name: "B_オンデマンド転写（DTTS）",
          feeType_table: [
            {
              cost: 1510,
              orderNumber: "1~20",
            },
            {
              cost: 1050,
              orderNumber: "21~40",
            },
            {
              cost: 1000,
              orderNumber: "41~60",
            },
            {
              cost: 950,
              orderNumber: "61~80",
            },
            {
              cost: 900,
              orderNumber: "81~100",
            },
            {
              cost: 850,
              orderNumber: "101~",
            },
          ],
        },
        kind_name: "左胸",
        print_flag: false,
      },
      {
        kind_id: 55,
        fee_type: {
          feeType_id: "67",
          feeType_name: "B_オンデマンド転写（DTTS）",
          feeType_table: [
            {
              cost: 1510,
              orderNumber: "1~20",
            },
            {
              cost: 1050,
              orderNumber: "21~40",
            },
            {
              cost: 1000,
              orderNumber: "41~60",
            },
            {
              cost: 950,
              orderNumber: "61~80",
            },
            {
              cost: 900,
              orderNumber: "81~100",
            },
            {
              cost: 850,
              orderNumber: "101~",
            },
          ],
        },
        kind_name: "右袖",
        print_flag: false,
      },
      {
        kind_id: 54,
        fee_type: {
          feeType_id: "67",
          feeType_name: "B_オンデマンド転写（DTTS）",
          feeType_table: [
            {
              cost: 1510,
              orderNumber: "1~20",
            },
            {
              cost: 1050,
              orderNumber: "21~40",
            },
            {
              cost: 1000,
              orderNumber: "41~60",
            },
            {
              cost: 950,
              orderNumber: "61~80",
            },
            {
              cost: 900,
              orderNumber: "81~100",
            },
            {
              cost: 850,
              orderNumber: "101~",
            },
          ],
        },
        kind_name: "左袖",
        print_flag: false,
      },
    ],
    print_images: [],
    order_accepted: 0,
    expire_time: "2024-01-31T05:35:55.000Z",
    im_json: [
      {
        size_id: "3",
        step_id: "1",
        imItemId: 12646,
        image_url: [
          "https://org21.test.makertown.jp/tmp/21/product_indiv_image/image/fc/96/fc960394cba3e3228d6d033c6561610adf2a9056.png",
          "https://org21.test.makertown.jp/tmp/21/product_indiv_image/image/fe/bd/febd13ffebcc1b736a619eb979bbda6f515a2b81.png",
        ],
        update_time: "2024-01-24T05:35:57.364Z",
      },
    ],
    production_period: 10,
    full_stock_available: false,
    parent_visible: true,
    parent_delete_flag: 0,
    sku_info: [
      {
        sku: "4527078160116",
        size_id: 3,
        color_id: 1,
      },
      {
        sku: "4527078160123",
        size_id: 4,
        color_id: 1,
      },
      {
        sku: "4527078160130",
        size_id: 5,
        color_id: 1,
      },
      {
        sku: "4527078161366",
        size_id: 3,
        color_id: 2,
      },
      {
        sku: "4527078161373",
        size_id: 4,
        color_id: 2,
      },
      {
        sku: "4527078161380",
        size_id: 5,
        color_id: 2,
      },
      {
        sku: "4527078161861",
        size_id: 3,
        color_id: 3,
      },
      {
        sku: "4527078161878",
        size_id: 4,
        color_id: 3,
      },
      {
        sku: "4527078161885",
        size_id: 5,
        color_id: 3,
      },
      {
        sku: "4527078162042",
        size_id: 3,
        color_id: 4,
      },
      {
        sku: "4527078162059",
        size_id: 4,
        color_id: 4,
      },
      {
        sku: "4527078162066",
        size_id: 5,
        color_id: 4,
      },
      {
        sku: "4527078376135",
        size_id: 3,
        color_id: 5,
      },
      {
        sku: "4527078376142",
        size_id: 4,
        color_id: 5,
      },
      {
        sku: "4527078376159",
        size_id: 5,
        color_id: 5,
      },
      {
        sku: "4527078165364",
        size_id: 3,
        color_id: 6,
      },
      {
        sku: "4527078165371",
        size_id: 4,
        color_id: 6,
      },
      {
        sku: "4527078165388",
        size_id: 5,
        color_id: 6,
      },
      {
        sku: "4527078161762",
        size_id: 3,
        color_id: 8,
      },
      {
        sku: "4527078161779",
        size_id: 4,
        color_id: 8,
      },
      {
        sku: "4527078161786",
        size_id: 5,
        color_id: 8,
      },
      {
        sku: "4527078376081",
        size_id: 3,
        color_id: 9,
      },
      {
        sku: "4527078376098",
        size_id: 4,
        color_id: 9,
      },
      {
        sku: "4527078376104",
        size_id: 5,
        color_id: 9,
      },
      {
        sku: "4527078376036",
        size_id: 3,
        color_id: 10,
      },
      {
        sku: "4527078376043",
        size_id: 4,
        color_id: 10,
      },
      {
        sku: "4527078376050",
        size_id: 5,
        color_id: 10,
      },
    ],
    parent_buy_min: null,
    parent_buy_max: 100,
    stock_num: [
      {
        num: 0,
        size_name: "S",
        size_id: 3,
        buzzu_num: 1060,
        parent_sku: "4527078160116",
      },
      {
        num: 0,
        size_name: "M",
        size_id: 4,
        buzzu_num: 4354,
        parent_sku: "4527078160123",
      },
      {
        num: 0,
        size_name: "L",
        size_id: 5,
        buzzu_num: 8159,
        parent_sku: "4527078160130",
      },
    ],
    total_stock: 13573,
    shortest_delivery_time: "02/15 (木)",
    sizeArray: [
      {
        size_id: 3,
        size_name: "S",
        item_price: 2420,
        size_value: "S",
        original_price: 2200,
      },
      {
        size_id: 4,
        size_name: "M",
        item_price: 1980,
        size_value: "M",
        original_price: 1800,
      },
      {
        size_id: 5,
        size_name: "L",
        item_price: 1980,
        size_value: "L",
        original_price: 1800,
      },
    ],
    orderNum: {
      3: 1,
      4: 1,
      5: 0,
    },
    usedEachNum: {},
    discount: 0,
    sizePrices: [
      {
        size_id: 3,
        size_name: "S",
        item_price: 2420,
        size_value: "S",
        original_price: 2200,
        productPrice: 4323,
        taxed_item_price: 2662,
      },
      {
        size_id: 4,
        size_name: "M",
        item_price: 1980,
        size_value: "M",
        original_price: 1800,
        productPrice: 3839,
        taxed_item_price: 2178,
      },
      {
        size_id: 5,
        size_name: "L",
        item_price: 1980,
        size_value: "L",
        original_price: 1800,
        productPrice: 3839,
        taxed_item_price: 2178,
      },
    ],
    discountSubtotal: 8162,
    discounts: {
      3: 0,
      4: 0,
      5: 0,
    },
    orderPrices: {
      3: 4323,
      4: 3839,
      5: 3839,
    },
    addNumTotal: 2,
  },
];

/**
 * 複数配送の 入力管理 Object
 * - 入力(Input)管理の Object から 値が 1 以上の Input Object だけの Object
 */
const filterdMultidDliveryAddressInput = {
  1000020357: {
    101985: {
      3: 1,
      4: 0,
      5: 0,
    },
  },
  1000020366: {
    101985: {
      3: 0,
      4: 1,
      5: 0,
    },
  },
};
console.log("複数配送の 入力管理 Object", filterdMultidDliveryAddressInput);

/** 送付先の情報などを追加した注文情報リスト */
const orderProductListIncludesAddress = [];

/**
 * NOTE: 1つ1つの注文 Item Data を取得して、注文情報を作成する Ver. 複数配送 Mode
 * 1. 注文 Item Data に、送付先の住所情報(receiver_address Object)を追加する
 * 2. 注文 Item Data に、注文数(stock Object)を管理する 入力(Input)管理 Object を追加する
 */
orderProductList.forEach((orderProduct) => {
  console.log("Cart に入っている 1つの注文 Item Data", orderProduct);

  /** 商品 id */
  const oneProductId = orderProduct.product_id;

  // 複数配送の 入力管理 Object から addressId と 入力(Input)管理・Object を取得する
  for (const addressId in filterdMultidDliveryAddressInput) {
    console.log(
      "------------------------------- Stage 1 -------------------------------"
    );
    console.log("住所・id", addressId);

    /** 送付先(住所)に紐づいている 入力(Input)管理 Object */
    const inputAddressManage = filterdMultidDliveryAddressInput[addressId];
    console.log("inputAddressManage", inputAddressManage);

    // 注文 Item Data の product_id と 複数配送の 入力管理 Object の product_id が一致するかどうかの判定
    for (const productId in inputAddressManage) {
      // Deep Copy: 1つのアイテムが、複数の送付先に配送される場合があるため、Deep Copy する
      const copyOrderProduct = JSON.parse(JSON.stringify(orderProduct));

      console.log("---------------------- Stage 2 ----------------------");
      if (oneProductId === productId) {
        console.log("一致する");
        console.log("住所・id 2", addressId);
        console.log("注文 Item Data の product_id", productId);
        console.log("複数配送の 入力管理 Object の product_id", oneProductId);

        // 入力(Input)管理 Object
        const targetInput = inputAddressManage[productId];

        // 送付先の住所情報(receiver_address Object)を取得する
        const targetAddressInfo = existingAddress.find(
          (address) => address.user_address_id === Number(addressId)
        );
        console.log("送付先の住所情報", targetAddressInfo);

        // 1. 注文 Item Data に、送付先の住所情報(receiver_address Object)を追加する
        copyOrderProduct.receiver_address = targetAddressInfo;

        // 2. 注文 Item Data に、注文数(stock Object)を管理する 入力(Input)管理 Object を追加する
        copyOrderProduct.stock = targetInput;

        console.log("Debug 1", copyOrderProduct);

        // 注文情報リストに追加する
        orderProductListIncludesAddress.push(copyOrderProduct);
      }

      console.log(
        "------------------------ Stage 2 End --------------------------"
      );
    }

    console.log(
      "------------------------------- Stage 1 End -------------------------------"
    );
  }
});

console.log("注文リスト Update後 Ver.2", orderProductListIncludesAddress);
