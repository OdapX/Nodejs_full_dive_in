const axios = require("axios");
const levels = { aya: 1, adam: 2 };

const anew = { ...levels, adam: 3 };
var API_KEY = "25692877-09657375b21b135b913d0923b";
var URL =
  "https://pixabay.com/api/?key=25692877-09657375b21b135b913d0923b&category=heath&image_type=photo";
const fe = async () => {
  const res = await axios({
    method: "GET",
    url: URL,
  }).catch((error) => {
    console.log(error);
  });

  console.log(res.data.hits[0].webformatURL);
};

fe();
