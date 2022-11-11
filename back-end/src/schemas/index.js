const { Schema } = require("mongoose");

const companySchema = new Schema({
  name: String,
  url: String,
});

const adsSchema = new Schema({
  companyId: String,
  primaryText: String,
  description: String,
  cta: String,
  imgUrl: String,
  headline: String,
});

module.exports = {
  companySchema,
  adsSchema,
};
