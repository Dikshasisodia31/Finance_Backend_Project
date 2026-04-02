const Record = require("../models/record");

// creating a new record
exports.createRecord = async (req,res)=>{
    try{
       const {amount,category,type,date,createdBy} = req.body;
       const record = await Record.create({
        amount,
        category,
        type,
        date,
        createdBy:req.user.id,
       });
       res.status(201).json({
        message:"Record created",
        record
       });
    }catch(error){
        console.log(error);
    }
};

//getRecord
exports.getRecords = async (req, res) => {
  try {

    const { type, category, date} = req.query;

    let filter = {
      createdBy: req.user.id
    };

    if (type) filter.type = type;
    if (category) filter.category = category;

    if (date) {
      filter.date = {
        $gte: new Date(startDate),
        $lte: new Date(endDate)
      };
    }

    const records = await Record.find(filter);

    res.json(records);

  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
};

//update records
exports.updateRecord = async(req,res) => {
    try{
      const record = await Record.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
      );

      res.json(record);

    }catch(error){
      console.log(error);
    }
};

//delete records
exports.deleteRecord = async (req, res) => {
  try {

    await Record.findByIdAndDelete(req.params.id);

    res.json({
      message: "Record deleted"
    });

  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
};