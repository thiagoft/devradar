const Dev = require("../models/Dev");
const parseStringAsArray = require("../utils/parseStringAsArray");

module.exports = {
  async index(request, response) {
    const { latitude, longitude, techs } = request.query;

    const techsArray = parseStringAsArray(techs);

    console.log(latitude, longitude, techsArray);

    const devs = await Dev.find({
      techs: {
        $in: techsArray //$in returns devs within techs' array
      },
      location: {
        $near: {
          $geometry: {
            type: "Point",
            coordinates: [longitude, latitude]
          },
          $maxDistance: 10000 //10km
        }
      }
    });

    return response.json({ devs });
  }
};
