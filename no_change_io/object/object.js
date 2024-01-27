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
