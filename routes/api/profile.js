const express = require('express');
const router = express.Router();

//@route GET api/PROFILE
//@desc Test route
//@access Public
router.get('/', (req, res) => res.send('PROFILE route'));


module.exports = router;