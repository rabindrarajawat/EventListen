// const { exec } = require("child_process");
const util = require('util');
const exec = util.promisify(require('child_process').exec);






var Background
var Hat
var Hair
var Glasses
var Ear
var Nose
var Jacket
var tokenID

const setLayer = (req, callBack) => {

    Background = req.body.Background
    Hat = req.body.Hat;
    Hair = req.body.Hair;
    Glasses = req.body.Glasses;
    Ear = req.body.Ear;
    Nose = req.body.Nose;
    Jacket = req.body.Jacket;
    tokenID = req.body.tokenID
    // console.log("🚀 ~ file: setLayer.js ~ line 22 ~ setLayer ~ tokenID", tokenID)
    // console.log("🚀 ~ file: setLayer.js ~ line 22 ~ setLayer ~ req", req.body)

    const results = {
        Background,
        Hat,
        Hair,
        Glasses,
        Ear,
        Nose,
        Jacket,
        tokenID,
    }

    callBack(null, results);
}

const execCommand = async (req, res) => {
    try {
        const { stdout, stderr } = await exec('make all');
        console.log('stdout:', stdout);
        console.log('stderr:', stderr);
      } catch (e) {
        console.error(e); // should contain code (exit code) and signal (that caused the termination).
      }
    // const promise = exec('make all');
    // const child = promise.child;
    // child.stdout.on('data', function (data) {
    //     console.log('stdout: ' + data);
    // });
    // child.stderr.on('data', function (data) {
    //     console.log('stderr: ' + data);
    // });
    // // child.on('close', function (code) {
    // //     console.log('closing code: ' + code);
    // // });

    // // i.e. can then await for promisified exec call to complete
    // const { stdout, stderr } = await promise;
    // console.log("🚀 ~ file: setLayer.js ~ line 61 ~ execCommand ~ stderr", stderr)
    // console.log("🚀 ~ file: setLayer.js ~ line 61 ~ execCommand ~ stdout", stdout)
    // var ex = exec("make all", (error, stdout, stderr) => {
    //     if (error) {
    //         console.log(`error: ${error.message}`);
    //         return;
    //     }
    //     if (stderr) {
    //         console.log(`stderr: ${stderr}`);
    //         return;
    //     }
    //     console.log(`stdout -------------: ${stdout}`);
    //     return  req.body.tokenID;
    //     // return res.json({
    //     //     success: 1,
    //     //     message: `GIF Generated Successfully for TokenID ${req.body.tokenID}`,
    //     //     data: req.body.tokenID
    //     // });
    // });
    console.log("Finise----------------------------------------------d");
    return res.json({
        success: 1,
        message: `GIF Generated Successfully for TokenID ${req.body.tokenID}`,
        data: req.body.tokenID
    });

}

module.exports = {
    execCommand,
    setLayer
};