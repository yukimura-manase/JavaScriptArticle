// 要件・仕様的な知識をコメントに記載する

/**
 * Update Button の Enable / Disabled 制御フラグ
 * - Default: false (Disabled・グレー で Button は押せない)
 * - true: 最新のData生成から 6ヶ月以上経過している場合は、Update 可能で、Button は押せる(Enabled・青色)
 * - false: 最新のData生成から 6ヶ月以内の場合は、Button は押せない (Disabled・グレー)
 */
const isEnableUpdate = false;
