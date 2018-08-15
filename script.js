const dataBase = [
  "www.abc.com",
  "www.bcd.com",
  "www.cat.com",
  "www.catlovers.com",
  "www.catme.com",
  "www.catu.com",
  "www.dog.com",
  "www.doglovers.com"
];

const search = (searchInput, data) => {
  const searchResult = data.filter(el => {
    return el.includes(searchInput);
  });
  return searchResult.slice(0, 3);
};

module.exports = search;
