const fetch = require("node-fetch");

const getPeople = async fetch => {
  const res = await fetch("https://swapi.co/api/people");
  const data = await res.json();
  console.log(data);
  return { count: data.count, results: data.results };
};

module.exports = { getPeople };
