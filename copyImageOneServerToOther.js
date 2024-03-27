const fs = require('fs');
const path = require('path');

//joining path of directory 
const directoryPath = path.join(process.cwd(), '../RaffeleERC721/backend/build/changeImage');
console.log("🚀 ~ file: copyImageOneServerToOther.js ~ line 15 ~ directoryPath", directoryPath)
//passsing directoryPath and callback function
fs.readdir(directoryPath, function (err, files) {
    //handling error
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    }
    //listing all files using forEach
    files.forEach(function (file) {
        // Do whatever you want to do with the file
        console.log(file);
        fs.copyFile(`${directoryPath}/${file}`, `${process.cwd()}/BackEndAPI/build/gif/${file}`, (err) => {
            if (err) {
                console.log("error rrrrrrrrrrrrrrr", err);

            }
            console.log(`was copied to changeImage`);
        });
    });
});