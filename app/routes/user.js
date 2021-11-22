const express = require("express");
const router = express.Router();
const controller = require("../controllers/user");

router.get("/users", controller.getData);
router.get("/user/:id", controller.getDataById);
router.post("/user", controller.postData);
// router.put("/user/:id", controller.editData);
router.patch("/user/:id", controller.editData);
router.delete("/user/:id", controller.deleteData);

module.exports = router;
