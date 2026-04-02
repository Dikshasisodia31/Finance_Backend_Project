const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");
 
router.get("/admin",authMiddleware,roleMiddleware("admin"),
   (req,res)=>{
      res.send("Admin access granted");
   }
);

module.exports = router;