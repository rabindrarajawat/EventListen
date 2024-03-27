const { ethers, BigNumber } = require("ethers");
const { ContractAbi, ContractAddress } = require('./contract')
require("dotenv").config();

const {
    updateFreezeValue
} = require('./src/currentMetadata.service')

const provider = new ethers.providers.WebSocketProvider(process.env.INFURA_API);
console.log("🚀 ~ file: mint.js ~ line 9 ~ process.env.PRIVATE_KEY", process.env.PRIVATE_KEY)

const signer = new ethers.Wallet(process.env.PRIVATE_KEY, provider);


const contract = new ethers.Contract(ContractAddress, ContractAbi, signer);
// console.log("🚀 ~ file: mint.js ~ line 16 ~ contract", contract)
// console.log("🚀 ~ file: mint.js ~ line 8 ~ contract", contract)
async function getCounter() {
    const counter = await contract.tokenIdCounter();
    console.log("🚀 ~ file: mint.js ~ line 20 ~ getCounter ~ counter", parseInt(counter))
}
getCounter()
async function mintNFT() {
    // var symbol = await contract.symbol();
    // console.log("🚀 ~ file: mint.js ~ line 16 ~ mintNFT ~ symbol", symbol)
    for (let i = 1; i <= 1; i++) {
        console.log("🚀 ~ file: mint.js ~ line 18 ~ mintNFT ~ i", i)
        try {
            const mint = await contract.mintKnowlytes({ value: 500000000000 });
            console.log("🚀 ~ file: mint.js ~ line 19 ~ mintNFT ~ mint", mint)
        } catch (error) {
            console.log("🚀 ~ file: mint.js ~ line 23 ~ mintNFT ~ error", error)

        }

    }


}

mintNFT()

const rHat = [];
const rJacket = [];
const rHair = [];
const rNose = [];
const rGlass = [];
const rEar = [];

async function rareValues() {
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
    console.log(rHat);
    console.log(rJacket);
    console.log(rHair);
    console.log(rNose);
    console.log(rGlass);
    console.log(rEar);

    let data = Object()
    data.Hat = rHat;
    data.Hair = rHair;
    data.Jacket = rJacket;
    data.Ear = rEar;
    data.Nose = rNose;
    data.Glass = rGlass;

    updateFreezeValue(data)

}

// rareValues();
