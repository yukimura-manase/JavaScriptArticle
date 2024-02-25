/** プロファイリングサマリー Model */
export interface ProfilingSummary {
  id: number;
  insta_user_id: string;
  text_s3_url: string;
  create_time: string;
  /**
   * NOTE: 更新日時
   * 1. 初回生成時は、create_time と update_time は同じ日付が入る
   * 2. 2回目以降は update_time だけが更新される
   */
  update_time: string;
  deleted: 1 | 0;
  /** プロファイリング・サマリー本文 */
  text?: string;
}

const profilingSummary: ProfilingSummary = {
  id: 1,
  insta_user_id: "1234567890",
  text_s3_url: "https://s3.amazonaws.com/bucket_name/key_name",
  create_time: "2024/01/01 00:00:00",
  update_time: "2024/01/01 00:00:00",
  deleted: 1,
  text: "text",
};

const update_time = profilingSummary.update_time;
