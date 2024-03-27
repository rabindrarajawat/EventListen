
const {
    getAllCurentMetadata,
    getAllSelectedMetadata,
    updateCurrentMetadataByTokenId,
    updateFreezeValue
} = require('./src/currentMetadata.service')

const fs = require('fs');
const path = require('path');

const { ethers, BigNumber } = require("ethers");
const { ContractAbi, ContractAddress } = require('./contract');
require("dotenv").config();

const provider = new ethers.providers.WebSocketProvider(process.env.INFURA_API);

const signer = new ethers.Wallet(process.env.PRIVATE_KEY, provider);


const contract = new ethers.Contract(ContractAddress, ContractAbi, signer);
// console.log("🚀 ~ file: mergeMetadata.js ~ line 14 ~          contract", contract)


let Hats = ['Hat1', 'Hat2', 'Hat3', 'Hat4', 'Hat5', 'Hat6', 'Hat7', 'Hat8', 'Hat9', 'Hat10', 'Hat11', 'Hat12', 'Hat13', 'Hat14'];

let Hairs = [`Hair1`, 'Hair2', 'Hair3', `Hair4`, `Hair5`, 'Hair6', `Hair7`, `Hair8`, `Hair9`, `Hair10`, `Hair11`, `Hair12`, `Hair13`];

let Glasses = [`Glass1`, 'Glass2', `Glass3`, `Glass4`, `Glass5`, 'Glass6', `Glass7`, `Glass8`];

let Ears = [`Ear1`, 'Ear2', `Ear3`, `Ear4`, `Ear5`, 'Ear6', `Ear7`, `Ear8`];

let Nose = [`Nose1`, 'Nose2', `Nose3`, `Nose4`, `Nose5`, 'Nose6', `Nose7`, `Nose8`];

let Jackets = [`Jacket1`, 'Jacket2', `Jacket3`, `Jacket4`, `Jacket5`, 'Jacket6', `Jacket7`, `Jacket8`, `Jacket9`, `Jacket10`, `Jacket11`, `Jacket12`, `Jacket13`, `Jacket14`];





let selectedMetadata = [];


let changeTokenId = []
let changeTraitType = []
let changeTraitValue = []

let freezeValues = [];
let FreezTokenId = [];

let hatFreezedTokenId = [];
let hairFreezedTokenId = [];
let jacketFreezedTokenId = [];
let glassFreezedTokenId = [];
let earFreezedTokenId = [];
let noseFreezedTokenId = [];

let hatFreezed = [];
let hairFreezed = [];
let glassFreezed = [];
let jacketFreezed = [];
let earFreezed = [];
let noseFreezed = [];



const rHat = [];
const rJacket = [];
const rHair = [];
const rNose = [];
const rGlass = [];
const rEar = [];

const crypto = require('crypto');
require("dotenv").config();


async function utility() {

   


    // Getting All the sleceted Data and insrting into array for use

    await getAllSelectedMetadata((err, results) => {
        console.log(results,"frtching encryption data")
        if (err) {
            console.log(err);
        }
        selectedMetadata.push(results)
        // console.log(results);
    });




    //  merge the selected Metadata and current Metadata

    for (let i = 0; i < selectedMetadata[0].length; i++) {

        let encryptedData = selectedMetadata[0][i].encryptedTraitValue;
        console.log(selectedMetadata[0][i].encryptedTraitValue,"encrypted msg coming")
        const algorithm = "aes-256-cbc";
        console.log("🚀 ~ file: encryption.js ~ line 11 ~ algorithm", algorithm)

        crypto.randomBytes(16, (err, buf) => {
            //console.log(buf.toString('hex'));
        });
        
        let initVector = crypto.randomBytes(16);
        
        // the decipher function
        const decipher = crypto.createDecipheriv(algorithm, Buffer.from(`${process.env.ENCRYPTION_KEY}`, 'hex'), initVector);
        console.log("🚀 ~ file: encryption.js ~ line 41 ~ decipher", decipher)
        
        console.log("encryptedData : ",encryptedData);
        let decryptedData = decipher.update(encryptedData, "hex", "utf-8");
        console.log("🚀 ~ file: encryption.js ~ line 44 ~ decryptedData", decryptedData)

        decryptedData += decipher.final("utf8");

        console.log("Decrypted message: " + decryptedData);

        const NFTDetails = await contract.getNFTDetails(selectedMetadata[0][i].tokenId)

        var traitType = parseInt(selectedMetadata[0][i].traitType)
        var traitValue

        if (NFTDetails.hashedProof == selectedMetadata[0][i].hash) {

            if (traitType == 1) {
                traitValue = Hats[selectedMetadata[0][i].traitValue - 1]
            }
            if (traitType == 2) {
                traitValue = Jackets[selectedMetadata[0][i].traitValue - 1]

            }
            if (traitType == 3) {
                traitValue = Hairs[selectedMetadata[0][i].traitValue - 1]

            }
            if (traitType == 4) {
                traitValue = Nose[selectedMetadata[0][i].traitValue - 1]

            }
            if (traitType == 5) {
                traitValue = Glasses[selectedMetadata[0][i].traitValue - 1]

            }
            if (traitType == 6) {
                traitValue = Ears[selectedMetadata[0][i].traitValue - 1]

            }

            let data = Object()

            data.traitType = traitType
            data.traitValue = traitValue
            data.tokenId = selectedMetadata[0][i].tokenId

            console.log("Hash same in smart contract and database");

            changeTokenId.push(selectedMetadata[0][i].tokenId)
            changeTraitType.push(selectedMetadata[0][i].traitType)
            changeTraitValue.push(parseInt(selectedMetadata[0][i].traitValue))

            await updateCurrentMetadataByTokenId(data, (err, results) => {
                if (err) {
                    console.log("updateCurrentMetadataByTokenId err--", err);
                }
                console.log("updateCurrentMetadataByTokenId results --", results);
            });
        }

    }
    


    //  Getting all the rare values and type and inserting into the array

    const totalTokenID = ethers.BigNumber.from(await contract.tokenIdCounter()).toNumber()

    console.log("🚀 ~ file: mergeMetadata.js ~ line 140 ~ utility ~ totalTokenID", totalTokenID)

    await getAllCurentMetadata(totalTokenID, (err, results) => {
        if (err) {
            console.log(err);
        }
        // console.log(results.hatCount[0]);

        for (let i = 0; i < results.FreezhatTokenId.length; i++) {
            hatFreezedTokenId.push(results.FreezhatTokenId[i].tokenId)
        }
        for (let i = 0; i < results.FreezHairTokenId.length; i++) {
            hairFreezedTokenId.push(results.FreezHairTokenId[i].tokenId)
        }
        for (let i = 0; i < results.FreezJacketTokenId.length; i++) {
            jacketFreezedTokenId.push(results.FreezJacketTokenId[i].tokenId)
        }
        for (let i = 0; i < results.FreezGlassTokenId.length; i++) {
            glassFreezedTokenId.push(results.FreezGlassTokenId[i].tokenId)
        }
        for (let i = 0; i < results.FreezEarTokenId.length; i++) {
            earFreezedTokenId.push(results.FreezEarTokenId[i].tokenId)
        }
        for (let i = 0; i < results.FreezNoseTokenId.length; i++) {
            noseFreezedTokenId.push(results.FreezNoseTokenId[i].tokenId)
        }
        // console.log("hatFreezedTokenId",hatFreezedTokenId);
        // console.log("hairFreezedTokenId",hairFreezedTokenId);
        // console.log("jacketFreezedTokenId",jacketFreezedTokenId);
        // console.log("glassFreezedTokenId",glassFreezedTokenId);
        // console.log("earFreezedTokenId",earFreezedTokenId);
        // console.log("noseFreezedTokenId",noseFreezedTokenId);

        // if (hatFreezedTokenId.length != 0) {
        FreezTokenId.push(hatFreezedTokenId)
        // }
        // if (jacketFreezedTokenId.length != 0) {
        FreezTokenId.push(jacketFreezedTokenId)
        // }
        // if (hairFreezedTokenId.length != 0) {
        FreezTokenId.push(hairFreezedTokenId)
        // }
        // if (noseFreezedTokenId.length != 0) {
        FreezTokenId.push(noseFreezedTokenId)
        // }
        // if (glassFreezedTokenId.length != 0) {
        FreezTokenId.push(glassFreezedTokenId)
        // }
        // if (earFreezedTokenId.length != 0) {
        FreezTokenId.push(earFreezedTokenId)
        // }

        console.log("FreezTokenId", FreezTokenId);

        for (let i = 0; i < results.hatCount.length; i++) {
            for (let j = 0; j < Hats.length; j++) {
                if (Hats[j] == results.hatCount[i].hatValue) {
                    hatFreezed.push(j + 1)
                }
            }
        }
        for (let i = 0; i < results.hairCount.length; i++) {
            for (let j = 0; j < Hairs.length; j++) {
                if (Hairs[j] == results.hairCount[i].hairValue) {
                    hairFreezed.push(j + 1)
                }
            }
        }
        for (let i = 0; i < results.jacketCount.length; i++) {
            for (let j = 0; j < Jackets.length; j++) {
                if (Jackets[j] == results.jacketCount[i].jacketValue) {
                    jacketFreezed.push(j + 1)
                }
            }
            // jacketFreezed.push(results.jacketCount[i].jacketValue)
        }
        for (let i = 0; i < results.glassCount.length; i++) {
            for (let j = 0; j < Glasses.length; j++) {
                if (Glasses[j] == results.glassCount[i].glassValue) {
                    glassFreezed.push(j + 1)
                }
            }
            // glassFreezed.push(results.glassCount[i].glassValue)
        }
        for (let i = 0; i < results.earCount.length; i++) {
            for (let j = 0; j < Ears.length; j++) {
                if (Ears[j] == results.earCount[i].earValue) {
                    earFreezed.push(j + 1)
                }
            }
            // earFreezed.push(results.earCount[i].earValue)
        }
        for (let i = 0; i < results.noseCount.length; i++) {
            for (let j = 0; j < Nose.length; j++) {
                if (Nose[j] == results.noseCount[i].noseValue) {
                    noseFreezed.push(j + 1)
                }
            }
            // noseFreezed.push(results.noseCount[i].noseValue)
        }
        // console.log("hatFreezed", hatFreezed);
        // console.log("hairFreezed", hairFreezed);
        // console.log("jacketFreezed", jacketFreezed);
        // console.log("glassFreezed", glassFreezed);
        // console.log("noseFreezed", noseFreezed);
        // console.log("earFreezed", earFreezed);

        // if (hatFreezed.length != 0) {
        freezeValues.push(hatFreezed)
        // }
        // if (jacketFreezed.length != 0) {
        freezeValues.push(jacketFreezed)
        // }
        // if (hairFreezed.length != 0) {
        freezeValues.push(hairFreezed)
        // }
        // if (noseFreezed.length != 0) {
        freezeValues.push(noseFreezed)
        // }
        // if (glassFreezed.length != 0) {
        freezeValues.push(glassFreezed)
        // }
        // if (earFreezed.length != 0) {
        freezeValues.push(earFreezed)
        // }
        console.log("freezeValues", freezeValues);

    });

    console.log("🚀 ~ file: mergeMetadata.js ~ line 43 ~ changeTokenId", changeTokenId)
    console.log("🚀 ~ file: mergeMetadata.js ~ line 44 ~ changeTraitType", changeTraitType)
    console.log("🚀 ~ file: mergeMetadata.js ~ line 45 ~ changeTraitValue", changeTraitValue)



    // Calling freezeValues Function of smart contract

    const freezeValuesAndTokenIds = await contract.freezeValues(freezeValues, FreezTokenId);
    console.log("🚀 ~ file: mergeMetadata.js ~ line 271 ~ //getCurentMetadata ~ freezeValuesAndTokenIds", freezeValuesAndTokenIds)


    // Calling updateBatchTraitType Function of smart contract

    const updateBatchTraitTypeMethod = await contract.updateBatchTraitTypes(changeTokenId, changeTraitType, changeTraitValue)
    console.log("🚀 ~ file: mergeMetadata.js ~ line 284 ~ / ~ updateBatchTraitTypeMethod", updateBatchTraitTypeMethod)


    //Read freeze traits value from the smart contract and  Insert freeze traits value into Database
    for (let i = 1; i <= 14; i++) {
        // console.log(await contract.isEarFreezed(i));
        try {
            if (await contract.isHatFreezed(i) == true) {
                rHat.push(await contract.getHatValue(i))
            }
            if (await contract.isJacketFreezed(i) == true) {
                rJacket.push(await contract.getJacketValue(i))
            }
            if (await contract.isHairFreezed(i) == true && i < 14) {
                rHair.push(await contract.getHairValue(i))
            }
            if (await contract.isNoseFreezed(i) == true && i < 9) {
                rNose.push(await contract.getNoseValue(i))
            }
            if (await contract.isGlassFreezed(i) == true && i < 9) {
                rGlass.push(await contract.getGlassValue(i))
            }
            if (await contract.isEarFreezed(i) == true && i < 9) {
                rEar.push(await contract.getEarValue(i))
            }
        } catch (error) {
            console.log("🚀 ~ file: mint.js ~ line 63 ~ rareValues ~ error", error)

        }

    }

    let data = Object()
    data.Hat = rHat;
    data.Hair = rHair;
    data.Jacket = rJacket;
    data.Ear = rEar;
    data.Nose = rNose;
    data.Glass = rGlass;

    updateFreezeValue(data)


    //joining path of directory 

    // const directoryPath = path.join(process.cwd(), '../RaffeleERC721/backend/build/changeImage');
    // console.log("🚀 ~ file: copyImageOneServerToOther.js ~ line 15 ~ directoryPath", directoryPath)

    //passsing directoryPath and callback function

    // fs.readdir(directoryPath, function (err, files) {
    //     //handling error
    //     if (err) {
    //         return console.log('Unable to scan directory: ' + err);
    //     }
    //     //listing all files using forEach
    //     files.forEach(function (file) {
    //         // Do whatever you want to do with the file
    //         console.log(file);
    //         fs.copyFile(`${directoryPath}/${file}`, `${process.cwd()}/BackEndAPI/build/gif/${file}`, (err) => {
    //             if (err) {
    //                 console.log("error rrrrrrrrrrrrrrr", err);

    //             }
    //             console.log(`was copied to changeImage`);
    //         });
    //     });
    // });
}
utility()