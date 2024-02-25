// 自分の位置情報を取得する
// export default
function myGeoLocation() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve(position);
      },
      (error) => {
        reject(error);
      }
    );
  });
}

const position = await myGeoLocation();
console.log(position);

/** 現在地の GeolocationCoordinates:  (位置情報) Object */
const myGio = {
  coords: {
    accuracy: 13.534,
    altitude: null,
    altitudeAccuracy: null,
    heading: null,
    latitude: 35.692642,
    longitude: 139.8424635,
    speed: null,
  },
  timestamp: 1707529595475,
};
