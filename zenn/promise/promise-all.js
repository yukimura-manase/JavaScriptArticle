/**
 * const promiseFunc1: () => Promise<string>
 */
const promiseFunc1 = async () => {
  // ここに、非同期処理を書く
  return "promise1";
};

/**
 * const promiseFunc2: () => Promise<string>
 */
const promiseFunc2 = async () => {
  // ここに、非同期処理を書く
  return "promise2";
};

// 並列・非同期処理
await Promise.all([promiseFunc1(), promiseFunc2()]);
