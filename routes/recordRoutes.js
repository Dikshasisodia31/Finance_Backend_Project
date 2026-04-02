const express = require("express");
const router = express.Router();

const {
    createRecord,updateRecord,deleteRecord
} = require("../controllers/recordController");

const authMiddleware = require("../middlewares/authmiddleware");

router.post("/",authMiddleware,createRecord);
router.put("/:id",authMiddleware,updateRecord);
router.delete("/:id",authMiddleware,deleteRecord);

module.exports = router;