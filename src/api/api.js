// eslint-disable-next-line max-len
const BASE_URL = 'https://mate-academy.github.io/react_phone-catalog/api/products.json';

export function getPhone() {
  return fetch(BASE_URL)
    .then(response => response.json())
    .then(data => data);
}

// export function getLikePhone(likeId) {
//   return fetch(BASE_URL)
//     .then(response => response.json())
//     .then(data => data.find(item => item.id === likeId));
// }
