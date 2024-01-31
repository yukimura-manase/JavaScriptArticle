/** 配送先ごとの入力管理 (Input) Object */
const targetInput = {
  101984: {
    3: 0,
    4: 1,
    5: 0,
  },
  101985: {
    3: 0,
    4: 0,
    5: 0,
  },
};

// targetInput から value が 1 以上のものを抽出
const targetInputFilter = Object.keys(targetInput).filter((key) => {
  return Object.values(targetInput[key]).some((value) => value >= 1);
});
console.log(targetInputFilter); // [ '101984' ]

// ------------------------------------------------------------------------

// targetItemStockInput の 入力値(1以上)の value を 0 にする処理

const productId = "101985";

const targetItemStockInput = {
  101985: {
    3: 0,
    4: 1,
    5: 0,
  },
};

const target = targetItemStockInput[productId];
console.log("target", target); // { '3': 0, '4': 1, '5': 0 }

const targetKeys = Object.keys(target);

targetKeys.forEach((key) => {
  console.log("key", key); // 3, 4, 5
  console.log("target[key]", target[key]); // 0, 1, 0
  // 入力値(Input数) が 1 以上の場合は 0 にする
  if (target[key] >= 1) {
    target[key] = 0;
  }
});

console.log("target", target); // { '3': 0, '4': 0, '5': 0 }

// ------------------------------------------------------------------------

// 入力(Input)管理の Object から 値が 1 以上の Input Object だけの Object を作成する

/** 入力(Input)管理の Object */
const inputManageObject = {
  1000020357: {
    101984: {
      3: 1,
      4: 0,
      5: 0,
    },
    101985: {
      3: 0,
      4: 1,
      5: 0,
    },
  },
  1000020366: {
    101984: {
      3: 1,
      4: 0,
      5: 0,
    },
    101985: {
      3: 0,
      4: 0,
      5: 0,
    },
  },
  1000020367: {
    101984: {
      3: 0,
      4: 0,
      5: 0,
    },
    101985: {
      3: 0,
      4: 0,
      5: 0,
    },
  },
};

/** 入力(Input)管理の Object から 値が 1 以上の Input Object だけを抽出した Object  */
const filterdInputManageObject = {};

// 入力(Input)管理の Object から 値が 1 以上の Input Object だけを抽出する
for (const addressId in inputManageObject) {
  /** 送付先(住所)に紐づいている 入力(Input)管理 Object */
  const inputObject = inputManageObject[addressId];
  console.log(
    "送付先(住所)に紐づいている 入力(Input)管理 Object ",
    inputObject
  );

  /** Item の id List */
  const productIdList = Object.keys(inputObject);
  console.log("Item の id List", productIdList);

  // Item の id List から Item の id を取り出す
  for (const productId of productIdList) {
    /** アイテム(商品)の 入力(Input)管理 Object */
    const itemInput = inputObject[productId];
    console.log("アイテム(商品)の 入力(Input)管理 Object", itemInput);

    /** アイテムの Stock Key List */
    const inputKeyList = Object.keys(itemInput);
    console.log("アイテムの Stock Key List", inputKeyList);
    for (const inputKey of inputKeyList) {
      /** アイテムの Stock Key に紐づいている 入力(Input)数 */
      const inputValue = itemInput[inputKey];
      console.log(
        "アイテムの Stock Key に紐づいている 入力(Input)数",
        inputValue
      );

      // 入力(Input)数が 1 以上の場合は、filterdInputManageObject に追加する
      if (inputValue >= 1) {
        console.log("入力(Input)数が 1 以上");

        console.log(
          "filterdInputManageObject[addressId]",
          filterdInputManageObject[addressId]
        );
        // すでに filterdInputManageObject に addressId が存在する場合は、その中に productId を追加する
        if (filterdInputManageObject[addressId]) {
          filterdInputManageObject[addressId][productId] = itemInput;
        } else {
          // filterdInputManageObject に addressId が存在しない場合は、新規で追加する
          filterdInputManageObject[addressId] = {
            [productId]: itemInput,
          };
        }
      }
    }
  }
}

console.log("filterdInputManageObject", filterdInputManageObject);

// ------------------------------------------------------------------------
