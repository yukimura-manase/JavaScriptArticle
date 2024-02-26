/** プロファイリング Model */
export interface Profiling {
  id: number;
  create_time: string;
  /**
   * NOTE: 更新日時
   * 1. 初回生成時は、create_time と update_time は同じ日付が入る
   * 2. 2回目以降は update_time だけが更新される
   */
  update_time: string;
  deleted: 1 | 0;
  /** プロファイリング本文 */
  text: string;
}

const profiling: Profiling = {
  id: 1,
  create_time: "2024/01/01 00:00:00",
  update_time: "2024/01/01 00:00:00",
  deleted: 1,
  text: "text",
};

const update_time = profiling.update_time;
