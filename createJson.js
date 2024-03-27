// const { utils } = require("ethers");
const keccak256 = require("keccak256");
const { default: MerkleTree } = require("merkletreejs");
const fs = require('fs');
 var sourcePath = "ProofJson/"
const address = [
  "0xE2127e81688D61d360741A1bC0b26FDD1db3Dfd7",
  "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
  "0x70997970C51812dc3A010C7d01b50e0d17dc79C8",
  "0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC",
  "0x90F79bf6EB2c4f870365E785982E1f101E93b906",
  "0x15d34AAf54267DB7D7c367839AAf71A00a2C6A65",
  "0x9965507D1a55bcC2695C58ba16FB37d819B0A4dc",
  "0x976EA74026E726554dB657fA54763abd0C3a0aa9",
  "0x14dC79964da2C08b23698B3D3cc7Ca32193d9955",
  "0x23618e81E3f5cdF7f54C3d65f7FBc0aBf5B21E8f",
  "0xa0Ee7A142d267C1f36714E4a8F75612F20a79720",
  "0xBcd4042DE499D14e55001CcbB24a551F3b954096",
  "0x71bE63f3384f5fb98995898A86B02Fb2426c5788",
  "0xFABB0ac9d68B0B445fB7357272Ff202C5651694a",
  "0x1CBd3b2770909D4e10f157cABC84C7264073C9Ec",
  "0xdF3e18d64BC6A983f673Ab319CCaE4f1a57C7097",
  "0xcd3B766CCDd6AE721141F452C550Ca635964ce71",
  "0x2546BcD3c84621e976D8185a91A922aE77ECEc30",
  "0xbDA5747bFD65F08deb54cb465eB87D40e51B197E",
  "0xdD2FD4581271e230360230F9337D5c0430Bf44C0",
  "0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199",
  "0x5B38Da6a701c568545dCfcB03FcB875f56beddC4",
  "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
  "0xBd0aDEFb7360889f410d12F6B9AC507DD4d4643B", //G
  "0xA0c013589fBb55d79510e055A391892732216F79"  //Y
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
let whiteList = {
    "whiteList":data
}
const metadata = JSON.stringify(whiteList, null, 2);

fs.writeFile(`${sourcePath}whiteList.json`, metadata, (err) => {
    if (err) {
        throw err;
    }
    // console.log("After Write");
});

module.exports = {
  rootHash: buf2Hex(tree.getRoot()),
};