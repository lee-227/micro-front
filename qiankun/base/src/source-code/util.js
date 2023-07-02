export const getResource = (url) => {
   return fetch(url).then(res => res.text());
}