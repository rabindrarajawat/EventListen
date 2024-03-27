const {
    setlayerConfig
} = require("../step2_spritesheet_to_generative_sheet/index");

const router = require("express").Router();


router.post("/gif",setlayerConfig);



module.exports = router;
