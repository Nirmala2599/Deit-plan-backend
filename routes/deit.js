const express =require('express');

const deitAction = require("../controllers/deit");

const router =express.Router();

router.post('/', deitAction.createDeit);

router.get('/', deitAction.getDeits);

router.get("/:_id", deitAction.getSpecificDeit);

router.put("/:_id", deitAction.updateDeit);

router.delete("/_id", deitAction.deleteDeit);

module.exports =router;