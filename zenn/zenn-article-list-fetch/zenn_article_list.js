/**
 * NOTE: Zenn の 記事一覧を取得して、CSVファイルを作成 & Download する Script
 * 1. Zenn の 記事一覧を取得する
 * 2. Zenn の 記事一覧を CSVファイルに変換する
 * 3. CSVファイルを Download する
 */

/** Zenn の API Base URL */
const zennBaseUrl = "https://zenn.dev";

/** 記事一覧を取得したい User の userName */
const userName = "manase";

/**
 * NOTE: Zenn の ページ番号
 * Zenn の記事一覧取得 API は PageNation を実装しているため Page番号で、順に一覧取得をする
 */
let pageNumber = 1;

/** Zennの記事一覧を取得するAPIのURL */
let userArticleListURL = `${zennBaseUrl}/api/articles?username=${userName}&order=latest&page=${pageNumber}`;
console.log("Zenn API Call URL:", userArticleListURL);

/** Zenn API からの レスポンス */
const response = await fetch(userArticleListURL);

/** Zennの記事一覧リスト */
const zennArticleList = [];

if (response.ok) {
  console.log("正常です");

  const jsonData = await response.json();
  console.log("response.json():", jsonData);

  const next_page = jsonData.next_page;
  console.log("next_page:", next_page);

  jsonData.articles.forEach((element) => {
    zennArticleList.push({
      title: element.title,
      url: `${zennBaseUrl}${element.path}`,
      publishedAt: element.published_at,
      likesCount: element.liked_count,
    });
  });
}

console.log("zennArticleList:", zennArticleList);

/**
 * NOTE: Zennの記事一覧のリストを作成する関数
 * @param {string} userName - 記事一覧を取得したい User の userName
 * @param {number} pageNumber - Zenn の ページ番号
 * @return {array} Zennの記事一覧のリスト
 */
const createZennArticleList = async (userName, pageNumber) => {
  /** Zennの記事一覧を取得するAPIのURL */
  let userArticleListURL = `${zennBaseUrl}/api/articles?username=${userName}&order=latest&page=${pageNumber}`;

  /** Zenn API からの レスポンス */
  const response = await fetch(userArticleListURL);

  /** Zennの記事一覧リスト */
  const zennArticleList = [];

  if (response.ok) {
    console.log("正常です");

    const jsonData = await response.json();
    console.log("response.json():", jsonData);

    jsonData.forEach((element) => {
      zennArticleList.push({
        title: element.title,
        url: `${zennBaseUrl}${element.path}`,
        publishedAt: element.published_at,
        likesCount: element.liked_count,
      });
    });
  }
  return zennArticleList;
};

// 調査した内容をまとめたZennスクラップ: https://zenn.dev/manase/scraps/489f556f7ff15b
