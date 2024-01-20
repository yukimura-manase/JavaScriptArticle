// [ Task 状況管理 ]

// 133件中 91件は、完了, In Review, Wont' Fix のいずれかの Status になっているしている
const allTasks = 133;

const clearTasks = 91;

// パーセントを計算する
const percent = (clearTasks / allTasks) * 100;
console.log(percent); // => 68.42105263157895
