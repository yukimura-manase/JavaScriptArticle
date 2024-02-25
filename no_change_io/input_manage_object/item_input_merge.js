const orderList = [
  {
    product_id: "102000",
    orderNum: {
      3: 0,
      4: 20,
      5: 0,
    },
  },
  {
    product_id: "102000",
    orderNum: {
      3: 0,
      4: 5,
      5: 0,
    },
  },
  {
    product_id: "102001",
    orderNum: {
      3: 12,
      4: 0,
      5: 0,
    },
  },
  {
    product_id: "102002",
    orderNum: {
      3: 12,
      4: 5,
      5: 0,
    },
  },
  {
    product_id: "102002",
    orderNum: {
      3: 18,
      4: 20,
      5: 0,
    },
  },
];

// orderList の deepCopy
const deepCopyOrderList = JSON.parse(JSON.stringify(orderList));

// orderList の product_id が一致する場合は、その orderNum を 合計して orderNum を Updateする

const newOrderList = [];

deepCopyOrderList.forEach((order) => {
  // product_id が一致する order が newOrderList に存在するか(同じアイテムが存在するかどうか)を確認
  const index = newOrderList.findIndex(
    (newOrder) => newOrder.product_id === order.product_id
  );
  // 存在しない(重複しない)場合は、newOrderList に追加
  if (index === -1) {
    newOrderList.push(order);
    // 存在する場合は、orderNum を合計して Update
  } else {
    for (const key in order.orderNum) {
      newOrderList[index].orderNum[key] += order.orderNum[key];
    }
  }
});

console.log("orderList", orderList);
console.log("deepCopyOrderList", deepCopyOrderList);
console.log("newOrderList", newOrderList);

// orderList の結果
const orderList_result = [
  {
    product_id: "102000",
    orderNum: {
      3: 0,
      4: 20,
      5: 0,
    },
  },
  {
    product_id: "102000",
    orderNum: {
      3: 0,
      4: 5,
      5: 0,
    },
  },
  {
    product_id: "102001",
    orderNum: {
      3: 12,
      4: 0,
      5: 0,
    },
  },
  {
    product_id: "102002",
    orderNum: {
      3: 12,
      4: 5,
      5: 0,
    },
  },
  {
    product_id: "102002",
    orderNum: {
      3: 18,
      4: 20,
      5: 0,
    },
  },
];

// newOrderList の結果
const newOrderList_result = [
  {
    product_id: "102000",
    orderNum: {
      3: 0,
      4: 25,
      5: 0,
    },
  },
  {
    product_id: "102001",
    orderNum: {
      3: 12,
      4: 0,
      5: 0,
    },
  },
  {
    product_id: "102002",
    orderNum: {
      3: 30,
      4: 25,
      5: 0,
    },
  },
];
