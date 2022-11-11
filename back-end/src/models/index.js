const mongoose = require("mongoose");
const schema = require("../schemas");

const Companies = mongoose.model("companies", schema.companySchema);

const Ads = mongoose.model("ads", schema.adsSchema);

module.exports = {
  Companies,
  Ads,
};
