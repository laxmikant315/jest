const googleDatabase = [
  "cats.com",
  "souprecipes.com",
  "flower.com",
  "animals.com",
  "catpictures.com",
  "myfavoritecats.com",
  "myfavoritecats2.com",
  "myfavoritecats3.com",
  "myfavoritecats4.com"
];

const googleSearch = (db, serachInput) => {
  const matches = db.filter(x =>
    x.toLowerCase().includes(serachInput.toLowerCase())
  );
  return matches.filter((x, i) => i < 3);
};

module.exports = googleSearch;
