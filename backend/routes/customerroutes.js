const express = require("express");
const router = express.Router();

// Employee Model
let customerSchema = require("../model/customer");

// CREATE customers
router.route("/create-customer").post(async (req, res, next) => { await customerSchema
    .create(req.body)
    .then((result) => {
        res.json({
        data: result,
        message: "Data successfully added!", status: 200,
    });
    }).catch((err) => {
        return next(err);
    });
});
    
//get the data from collection

router.route("/").get(async (req, res, next) => { await customerSchema
    .find()
    .then((result) => { res.json({
        data: result,
        message: "All items successfully fetched.", status: 200,
    });
    }).catch((err) => {
        return next(err);
    });
});

//delete the record from collection

router.route("/delete-customer/:id").delete(async (req, res, next) => { await customerSchema
    .findByIdAndDelete(req.params.id)
    .then(() => {
        res.json({
        msg: "Data successfully updated.",
    });
    }).catch((err) => {
        console.log(err);
    });
});

//get the particular data based on id

router.route("/get-customer/:id").get(async (req, res, next) => { await customerSchema
    .findById(req.params.id)
    .then((result) => {
        res.json({
        data: result,
        message: "Data successfully fetched.", status: 200,
    });
    }).catch((err) => {
        return next(err);
    });
});

//update the record in collection

router.route("/update-customer/:id").put(async (req, res, next) => { await customerSchema
    .findByIdAndUpdate(
        req.params.id, {
        $set: req.body,
    }).then((result) => {
        res.json({
        data: result,
        msg: "Data successfully updated.",
    });
    }).catch((err) => {
        console.log(err);
    });
});


module.exports = router;
