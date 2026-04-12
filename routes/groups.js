import { Router }  from "express";
const router = Router();

import authMiddleware from "../middleware/authMiddleware.js";

import getGroups from "../controllers/getGroupsController.js";
import getPayments from "../controllers/getPaymentsController.js";
import getMembers from "../controllers/getMembersController.js";
import addMember from "../controllers/addMemberController.js";
import addPayment from "../controllers/addPaymentController.js";
import createGroup from "../controllers/createGroupController.js";
import deleteGroup from "../controllers/deleteGroupController.js";

router.use(authMiddleware);

//Get Groups in which User is a Member.
router.get("/", getGroups);
//Get Payments of Groups in which User is a participant.
router.get("/:id/payments", getPayments);
//Get Members of a Group.
router.get("/:id/members", getMembers);
//Create a group
router.post("/", createGroup);
//Create a Payment
router.post("/:id", addPayment);
//Add members
router.put("/:id", addMember);
//Delete the Group
router.delete("/:id", deleteGroup);
//Leave the Group
router.delete("/:id/leave");
//Delete a Payment
//router.delete("/payment/:id")


export default router;