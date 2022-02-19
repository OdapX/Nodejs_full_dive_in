const axios = require("axios");
const levels = { aya: 1, adam: 2 };

const anew = { ...levels, adam: 3 };

const Images_List = [];

const Get_Images = async (category) => {
  const response = await axios({
    method: "GET",
    url: `https://pixabay.com/api/?key=25692877-09657375b21b135b913d0923b&category=${category}&image_type=photo`,
  }).catch((error) => {
    console.log(error);
  });
  for (let i = 0; i < 10; i++) {
    Images_List.push(response.data.hits[i].webformatURL);
  }
};

Get_Images("food").then(() => {
  console.log(Images_List);
});
