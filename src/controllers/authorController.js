const authorModel = require("../models/authorModel")

const createAuthor = async function (req, res) {
    try {
        let data = req.body;
        let savedata = await authorModel.create(data);
        res.status(201).send({ status: true, msg: savedata })
    }
    catch (err) {
        res.status(500).send({ status: false, msg: err.message })
    }
}


module.exports.createAuthor = createAuthor;