const express = require("express");
const router = express.Router();

//Get Groups in which User is a Member.
router.get("/", require("../controllers/getGroupsController.js"));
//Get Payments of Groups in which User is a participant.
router.get("/:id/payments", require("../controllers/getPaymentsController.js"));
//Get Members of a Group.
router.get("/:id/members", require("../controllers/getMembersController.js"));

/*router.post("/");
router.post("/group/:id");

router.put("/group/:id");

router.delete("/group/:id");
router.delete("/group/:id/leave");*/


module.exports = router;