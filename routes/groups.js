import { Router }  from "express";
const router = Router();

import getGroups from "../controllers/getGroupsController.js";
import getPayments from "../controllers/getPaymentsController.js";
import getMembers from "../controllers/getMembersController.js";

//Get Groups in which User is a Member.
router.get("/", getGroups);
//Get Payments of Groups in which User is a participant.
router.get("/:id/payments", getPayments);
//Get Members of a Group.
router.get("/:id/members", getMembers);

/*router.post("/");
router.post("/group/:id");

router.put("/group/:id");
router.delete("/group/:id");*/
//router.delete("/group/:id/leave");


export default router;