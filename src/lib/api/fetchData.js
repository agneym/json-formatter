function fetchData(url, data) {
  return fetch(url, data).then(res => res.json());
}

export default fetchData;
