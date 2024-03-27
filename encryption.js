
let randNumber = '88a20052c25d990de1567f4296886ce1';
let traitType = "6";
let traitValue = "14";


const { Console } = require('console');
// GENERATING KEY

const crypto = require('crypto');
require("dotenv").config();


const encryption = crypto.createECDH('secp256k1');
encryption.generateKeys();

const decryption = crypto.createECDH('secp256k1');
decryption.generateKeys();

const Encryption_key = encryption.getPublicKey().toString('base64');
const Decryption_key = decryption.getPublicKey().toString('base64');

const Enc_Shared_Key = encryption.computeSecret(Decryption_key, 'base64', 'hex');
const Dec_Shared_Key = decryption.computeSecret(Encryption_key, 'base64', 'hex');

console.log(Enc_Shared_Key === Dec_Shared_Key);
//Shared key in hex
console.log('encryption shared Key: ', Enc_Shared_Key);
//Shared key in hex
console.log('decryption shared Key: ', Dec_Shared_Key);
//Shared key length in bits (=256 bits)
console.log(
  'Shared Key length of encryption(same as decryption): ',
  Enc_Shared_Key.length * 4
);
console.log(
  'Shared Key length of decryption(same as encryption): ',
  Dec_Shared_Key.length * 4
)
// crypto module
// const crypto = require("crypto");

const algorithm = "aes-256-cbc";
console.log("🚀 ~ file: encryption.js ~ line 11 ~ algorithm", algorithm)

// generate 16 bytes of random data
// const initVector = crypto.randomBytes(16);
var responseData = Buffer.from(randNumber, 'utf8');

crypto.randomBytes(16, (err, buf) => {
    //console.log(buf.toString('hex'));
});

let initVector = crypto.randomBytes(16);

// const initVector = responseData;
console.log("🚀 ~ file: encryption.js ~ line 15 ~ initVector", initVector.toString('hex'))

//generate hash
// let hash = crypto
//     .createHash('shal')
//     .update('your massage')
//     .digest('hex');


// console.log(hash);

// return


// protected data
const message = "This is a secret message";
console.log("🚀 ~ file: encryption.js ~ line 19 ~ message", message)
  
// secret key generate 32 bytes of random data
const Securitykey = crypto.randomBytes(32);
console.log("🚀 ~ file: encryption.js ~ line 23 ~ Securitykey", Securitykey)

// the cipher function
console.log(`${process.env.ENCRYPTION_KEY}`,"secrate key")
const cipher = crypto.createCipheriv(algorithm, Buffer.from(`${process.env.ENCRYPTION_KEY}`, 'hex'), initVector);
console.log("🚀 ~ file: encryption.js ~ line 27 ~ cipher", cipher)

// encrypt the message
// input encoding
// output encoding
let encryptedData = cipher.update(`${randNumber}${traitType}${traitValue}`, "utf-8", "hex");
console.log("🚀 ~ file: encryption.js ~ line 33 ~ encryptedData", encryptedData)
console.log("🚀 ~ file: encryption.js ~ line 899999 ~ encryptedData", encryptedData)

encryptedData += cipher.final("hex");

console.log("Encrypted message: " + encryptedData);

// the decipher function
const decipher = crypto.createDecipheriv(algorithm, Buffer.from(`daa3babc2ec2d750b6afc747b3a0ec624f8c9109e49f262dfd411677886ca850`,'hex'),initVector);
console.log("🚀 ~ file: encryption.js ~ line 41 ~ decipher", decipher)

let decryptedData = decipher.update(encryptedData, "hex", "utf-8");
console.log("🚀 ~ file: encryption.js ~ line 44 ~ decryptedData", decryptedData)

decryptedData += decipher.final("utf8");

console.log("Decrypted message: " + decryptedData);
