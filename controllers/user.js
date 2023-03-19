// Create functions and export them

const { response, request } = require("express");

const usersGet = (req = request, res = response) => {
  const { q, name, apikey } = req.query;
  res.json({ msg: "get API - controller", q, name, apikey });
};

const usersPut = (req, res) => {
  const { id } = req.params;
  res.json({ msg: "put API　- controller", id });
};

const usersPost = (req, res) => {
  const { name, age, id } = req.body;
  res.json({ msg: "post API - controller", name, age, id });
};

const usersDelete = (req, res) => {
  res.json({ msg: "delete API - controller" });
};

module.exports = {
  usersGet,
  usersPut,
  usersPost,
  usersDelete,
};
