const request = require("request");
const fetchBreedDescription = (breedName, callback) => {
  request(
    `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`,
    (error, response, body) => {
      if (error) {
        callback(error);
      }
      // else if (response && response.statusCode === 200) {
      //   const data = JSON.parse(body);
      //   console.log(data[0].description);
      // } else {
      //   console.log("Breed not found");
      // }
      else {
        const data = JSON.parse(body);
        if (data.length > 0) {
          callback(error, data[0].description);
        } else {
          callback(error, "Breed not found");
        }
      }
    }
  );
};
module.exports = { fetchBreedDescription };
