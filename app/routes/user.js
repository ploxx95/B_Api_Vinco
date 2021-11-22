const express = require("express");
const router = express.Router();
const controller = require("../controllers/user");

router.get("/users", controller.getData);
router.get("/user/:id", (req, res) => {
  res.send({ data: "pedro papel" });
});
router.post("/user", controller.postData);

router.put("/user/:id", (req, res) => {
  res.send({ data: "edit" });
});
router.delete("/user", (req, res) => {
  res.send({ data: "delete" });
});

module.exports = router;
