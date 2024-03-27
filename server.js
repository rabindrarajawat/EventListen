const axios = require("axios");
const express = require("express");
const app = express();
const cors = require("cors");
const { ethers, BigNumber } = require("ethers");
// const usdtABI = require("../abis/usdt.json");
const { ContractAbi, ContractAddress } = require("./contract");
const { insertCurrentMetadata, tokenIdOwner } = require("./src/currentMetadata.service");
require("dotenv").config();


app.use(cors());
app.options("*", cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// require("dotenv").config();

// let Hats = [
//     "Hat1",
//     "Hat2",
//     "Hat3",
//     "Hat4",
//     "Hat5",
//     "Hat6",
//     "Hat7",
//     "Hat8",
//     "Hat9",
//     "Hat10",
//     "Hat11",
//     "Hat12",
//     "Hat13",
//     "Hat14",
// ];


// let Hairs = [
//     `Hair1`,
//     "Hair2",
//     "Hair3",
//     `Hair4`,
//     `Hair5`,
//     "Hair6",
//     `Hair7`,
//     `Hair8`,
//     `Hair9`,
//     `Hair10`,
//     `Hair11`,
//     `Hair12`,
//     `Hair13`,
// ];

// let Glasses = [
//     `Glass1`,
//     "Glass2",
//     `Glass3`,
//     `Glass4`,
//     `Glass5`,
//     "Glass6",
//     `Glass7`,
//     `Glass8`,
// ];

// let Ears = [`Ear1`, "Ear2", `Ear3`, `Ear4`, `Ear5`, "Ear6", `Ear7`, `Ear8`];

// let Nose = [
//     `Nose1`,
//     "Nose2",
//     `Nose3`,
//     `Nose4`,
//     `Nose5`,
//     "Nose6",
//     `Nose7`,
//     `Nose8`,
// ];

// let Jackets = [
//     `Jacket1`,
//     "Jacket2",
//     `Jacket3`,
//     `Jacket4`,
//     `Jacket5`,
//     "Jacket6",
//     `Jacket7`,
//     `Jacket8`,
//     `Jacket9`,
//     `Jacket10`,
//     `Jacket11`,
//     `Jacket12`,
//     `Jacket13`,
//     `Jacket14`,
// ];

// let Background = [
//     "Blue",
//     "Confrence",
//     "Construction",
//     "Hospital",
//     "Restaurant",
//     "Yellow",
//     "Green",
// ];

let Hats = [
    "Bowler",
    "Wizard",
    "Detective",
    "Chef",
    "Woolhat",
    "Sombrero",
    "Reggae",
    "Witch",
    "Fedor",
    "Drill Instructor",
    "Troops Mask",
    "Troops Mask2",
    "Journalist",
    "Top Hat",
];

let Hairs = [
    "Bibical Beard",
    "Midnight Lincoln",
    "Sensi",
    "Small Goatie",
    "Pirat",
    "Guru",
    "Full Beard",
    "Wlrus",
    "Fu'manchu",
    "Horseshoe",
    "Zappa",
    "Hungarian",
    "Politician",
];

let Glasses = [
    "Pilot",
    "Agent",
    "Anarchist",
    "Journalist glass",
    "Le Professeur",
    "Con Man",
    "80's",
    "Presidential",
];

let Ears = [
    "Squar Ear",
    "Pointer Ear",
    "Narrow Ear",
    "Sticking Out",
    "Free Lobe",
    "Attached Lobe",
    "Broad Lobe",
    "Symetrical Ear",
];

let Nose = [
    "Snub",
    "Pointed",
    "Grecian",
    "Droopy",
    "Flat",
    "Bulbous",
    "Roman",
    "Snub2",
];

let Jackets = [
    "Winter Jacket",
    "Futura",
    "Bathrobe",
    "Suit",
    "Lather Jacket",
    "Rain Coat",
    "Concierge",
    "Coat",
    "Apprentice",
    "Casual Jacket",
    "Casual Jacket2",
    "Lab Jacket",
    "Jonny",
    "Lincoin",
];

let Background = [
    "Blue",
    "Confrence",
    "Construction",
    "Hospital",
    "Restaurant",
    "Yellow",
    "Green",
];

// const provider = new ethers.providers.WebSocketProvider(
//     `wss://goerli.infura.io/ws/v3/968baff88e0c4875b9aa87c687b0e84b`
// );

const provider = new ethers.providers.JsonRpcProvider('https://data-seed-prebsc-1-s1.binance.org:8545/', { name: 'binance', chainId: 97 })
console.log("provider : ",provider);
const contract = new ethers.Contract(ContractAddress, ContractAbi, provider);

async function main() {
    //   const usdtAddress = "0xdAC17F958D2ee523a2206206994597C13D831ec7";

    // console.log("🚀 ~ file: cron-ping.js ~ line 148 ~ main ~ contract",contract)
    contract.on(
        "MintKnowlytes",
        (tokenId, background, hat, jacket, hair, nose, glass, ear) => {
            let info = {
                tokenId: tokenId,
                background: background,
                hat: hat,
                jacket: jacket,
                hair: hair,
                nose: nose,
                glass: glass,
                ear: ear,
                // data: event,
            };
            console.log(JSON.stringify(info, null, 4));
            const tokenID = ethers.BigNumber.from(info.tokenId._hex).toNumber();
            // BigNumber.from(info.tokenId._hex)
            // BigInt(info.tokenId._hex)
            console.log(
                "🚀 ~ file: cron-ping.js ~ line 163 ~ contract.on ~ tokenID",
                tokenID
            );
            var data = Object();
            data.Background = Background[info.background - 1];
            data.Hat = Hats[info.hat - 1];
            data.Hair = Hairs[info.hair - 1];
            data.Glasses = Glasses[info.glass - 1];
            data.Ear = Ears[info.ear - 1];
            data.Nose = Nose[info.nose - 1];
            data.Jacket = Jackets[info.jacket - 1];
            data.tokenID = tokenID;

            console.log(
                "🚀 ~ file: cron-ping.js ~ line 167 ~ contract.on ~ data",
                data
            );

            var config = {
                method: "post",
                // url: `https://stg.knowlytes.com/eventapi/generate/gif`,
                url: `https://stg.knowlytes.com/eventapi/generate/gif`,
                data: data,
            };
            insertCurrentMetadata(data);
            axios(config)
                .then(function (response) {
                    console.log("🚀 ~ file: cron-ping.js ~ line 185 ~ response", response.data)
                    //   console.log(JSON.stringify(response.data));

                })
                .catch(function (error) {
                    console.log(error);
                })
        }
    );


}
async function changeTraits() {
    contract.on("ChangeTrait", (tokenId, hash) => {
        let info = {
            tokenId: tokenId,
            hash: hash,
            // data: event,
        };
        console.log(JSON.stringify(info, null, 4));
        const tokenID = ethers.BigNumber.from(info.tokenId._hex).toNumber();
        // BigNumber.from(info.tokenId._hex)
        // BigInt(info.tokenId._hex)
        console.log(
            "🚀 ~ file: cron-ping.js ~ line 163 ~ contract.on ~ tokenID",
            tokenID
        );
        var data = Object();
        data.tokenID = tokenID;

        console.log(
            "🚀 ~ file: cron-ping.js ~ line 167 ~ contract.on ~ data",
            data
        );

        var config = {
            method: "post",
            url: `https://stg.knowlytes.com/api/api/changeimage`,
            data: data,
        };

        axios(config)
            .then(function (response) {
                console.log(
                    "🚀 ~ file: cron-ping.js ~ line 185 ~ response",
                    response.data
                );
                //   console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });
    });
}

async function transfer() {
    contract.on("Transfer", (from, to, tokenId) => {
        let info = {
            from: from,
            to: to,
            tokenId: tokenId,
        };

        console.log(JSON.stringify(info, null, 4));
        // const tokenId = ethers.BigNumber.from(info.tokenId._hex).toNumber();
        const sender = info.from;
        const receiver = info.to;

        let data = Object()
        data.tokenId = ethers.BigNumber.from(info.tokenId._hex).toNumber();
        data.owner = info.to.toLowerCase()

        tokenIdOwner(data)
    });
}

transfer()
main();
changeTraits();

app.get("/", (req, res) => {
    res.send("Server is Running!");
});

app.listen(8000, "0.0.0.0", () => {
    console.log("Server is running.", 8000);
});
