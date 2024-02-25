const data = {
  data: '[{\n    "name": "東京ディズニーランド",\n    "description": "東京ディズニーランドは、日本の千葉県浦安市舞浜にあるディズニーパークである。",\n    "address": "千葉県浦安市舞浜1-1",\n    "recommended_points": "ディズニーキャラクターとの写真撮影",\n    "latitude": 35.6329,\n    "longitude": 139.8804\n},\n{\n    "name": "上野動物園",\n    "description": "上野動物園は、東京都台東区上野公園にある動物園である。",\n    "address": "東京都台東区上野公園9-83",\n    "recommended_points": "多種多様な動物たちとの触れ合い",\n    "latitude": 35.7167,\n    "longitude": 139.7717\n},\n{\n    "name": "お台場",\n    "description": "お台場は、東京湾に浮かぶ人工島であり、観光地として人気がある。",\n    "address": "東京都港区台場",\n    "recommended_points": "レインボーブリッジの夜景",\n    "latitude": 35.6296,\n    "longitude": 139.7786\n},\n{\n    "name": "東京ディズニーシー",\n    "description": "東京ディズニーシーは、日本の千葉県浦安市舞浜にあるディズニーパークである。",\n    "address": "千葉県浦安市舞浜1-1",\n    "recommended_points": "シーの世界観を楽しむ",\n    "latitude": 35.6261,\n    "longitude": 139.8894\n},\n{\n    "name": "東京タワー",\n    "description": "東京タワーは、東京都港区芝公園にある観光タワーである。",\n    "address": "東京都港区芝公園4-2-8",\n    "recommended_points": "展望台からのパノラマビュー",\n    "latitude": 35.6586,\n    "longitude": 139.7454\n}]',
  status: 200,
};
const json = JSON.parse(data.data);
console.log(json);

const json_data_str =
  '{"M.13-17":1,"M.18-24":25,"M.25-34":30,"M.35-44":12,"M.45-54":11,"M.55-64":5,"M.65+":3,"F.13-17":0,"F.18-24":3,"F.25-34":5,"F.35-44":3,"F.45-54":1,"F.55-64":1,"F.65+":0}';

const json_data = JSON.parse(json_data_str);
console.log(json_data);

const result = {
  "M.13-17": 1,
  "M.18-24": 25,
  "M.25-34": 30,
  "M.35-44": 12,
  "M.45-54": 11,
  "M.55-64": 5,
  "M.65+": 3,
  "F.13-17": 0,
  "F.18-24": 3,
  "F.25-34": 5,
  "F.35-44": 3,
  "F.45-54": 1,
  "F.55-64": 1,
  "F.65+": 0,
};
