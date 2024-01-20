// リーチ率 ＝ リーチ数 / フォロワー数 x 100

const reach = 3000;

const followers = 1501;

const reach_per = Math.round(reach / followers, 1) * 100;

// リーチ率＝リーチ数3000 / フォロワー数1501 x 100 = 200%
console.log(reach_per + "%");

const reach_2 = 100;

const followers_2 = 2;

const reach_per2 = Math.round((reach_2 / followers_2) * 1) * 100;
// リーチ率 ＝ リーチ数100 / フォロワー数2 x 100 = 5000%
console.log(reach_per2 + "%");

const reach_3 = 5000;

const followers_3 = 2;

const reach_per3 = Math.round((reach_3 / followers_3) * 1) * 100;
// リーチ率 ＝ リーチ数5000 / フォロワー数2 x 100 = 250000%
console.log(reach_per3 + "%");
