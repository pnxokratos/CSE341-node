const mongodb = require("../db/connect");
const ObjectId = require("mongodb").ObjectId;

const getAll = async (req, res) => {
  const result = await mongodb
    .getDb()
    .db("cse341")
    .collection("contacts")
    .find();
  result.toArray().then((lists) => {
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(lists);
  });
};

const getSingle = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const result = await mongodb
    .getDb()
    .db("cse341")
    .collection("contacts")
    .find({ _id: userId });
  result.toArray().then((lists) => {
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(lists[0]);
  });

  // const result = await mongodb
  //   .getDb()
  //   .db("contacts")
  //   .collection("contacts")
  //   // .find({ _id: userId });
  //   .find({ _id: ObjectId(req.params.id) });
  // res.setHeader("Content-Type", "application/json");
  // res.status(200).json(result);
};

module.exports = { getAll, getSingle };