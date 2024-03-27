// const { utils } = require("ethers");
const keccak256 = require("keccak256");
const { default: MerkleTree } = require("merkletreejs");
const fs = require('fs');
 var sourcePath = "ProofJson/"
const address = [
    "0xE2127e81688D61d360741A1bC0b26FDD1db3Dfd7",
    "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
    "0x70997970C51812dc3A010C7d01b50e0d17dc79C8",
    "0x35fe8514cAe07F3321E952B6E5c8c7fFb3EAD482", //Rohit
    "0xBa1aCc30dD00f985df4197a81CDBc3B72508f73E"  //Aayush
  ];
let data =[]
const leaves = address.map((leaf) => keccak256(leaf)); //  Hashing All Leaf Indivdual
const tree = new MerkleTree(leaves, keccak256, {
  sortPairs: true,
}); // Constructing Merkle Tree
const buf2Hex = (x) => "0x" + x.toString("hex"); //  Utility Function to Convert From Buffer to Hex

console.log(`Here is Root Hash: ${buf2Hex(tree.getRoot())}`); // Get Root of Merkle Tree
address.forEach(address => {
    // console.log("🚀 ~ file: createJson.js ~ line 41 ~ element", address)
    
const leaf = keccak256(address);
// console.log(`My Leaf`, buf2Hex(leaf));

if (!fs.existsSync(sourcePath)) {
    fs.mkdirSync(sourcePath, { recursive: true });
}

const proof = tree.getProof(leaf);
let tempData = []
proof.map((x) => 
// console.log("🚀 ~ file: createJson.js ~ line 53 ~ data", )
tempData.push(buf2Hex(x.data))
);
data.push({
    "address":address,
    "leaf":buf2Hex(leaf),
    "proof":tempData
})
// console.log("🚀 ~ file: createJson.js ~ line 50 ~ tempData", tempData)
});
console.log("🚀 ~ file: createJson.js ~ line 50 ~ data", data)
let Freemint = {
    "FreeMint":data
}
const metadata = JSON.stringify(Freemint, null, 2);

fs.writeFile(`${sourcePath}FreeMint.json`, metadata, (err) => {
    if (err) {
        throw err;
    }
    // console.log("After Write");
});

module.exports = {
  rootHash: buf2Hex(tree.getRoot()),
};