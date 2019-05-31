const express = require('express');
const router = express.Router();
const contr = require('../controller/Category');

router.post("/Create", contr.Create);
router.post("/Show", contr.Show);
router.post("/ShowAll", contr.ShowAll);
router.post("/Delete", contr.Delete);
router.post("/Edit", contr.Edit);
router.post("/Search", contr.Search);
router.post("/Tickets", contr.Tickets);

module.exports=router;