const express = require("express");
const cors = require("cors");
const app = express();
const models = require("./models");

const mongoose = require("mongoose");
async function main() {
  await mongoose.connect(
    "mongodb+srv://saiyam:saiyam123@cluster-ads.1we9sp7.mongodb.net/ads-db?retryWrites=true&w=majority"
  );
}
main().catch((err) => console.log(err));

const port = 4000;

app.use(cors());

app.get("/ads", async (req, res) => {

  const data = await models.Ads.aggregate([
    {
      $lookup: {
        from: "companies",
        localField: "companyId",
        foreignField: "_id",
        as: "company",
      },
    },
    {
      $unwind: "$company",
    },
    {
      $match: {
        $or: [
          { primaryText: { $regex: req.query.searchText, $options: "i" } },
          { description: { $regex: req.query.searchText, $options: "i" } },
          { cta: { $regex: req.query.searchText, $options: "i" } },
          { headline: { $regex: req.query.searchText, $options: "i" } },
          { "company.name": { $regex: req.query.searchText, $options: "i" } },
        ],
      },
    },
  ]);
  res.send(data);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
