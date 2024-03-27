"use strict";

const path = require("path");
const isLocal = typeof process.pkg === "undefined";
// const basePath = isLocal ? process.cwd() : path.dirname(process.execPath);
const basePath = __dirname;

const fs = require("fs");
const { Command } = require("commander");
const program = new Command();
const chalk = require("chalk");

const { startCreating, buildSetup } = require(path.join(
  basePath,
  "/src/main.js"
));
const { execCommand, setLayer } = require("./src/setLayer")

//   const setlayerConfig = async(req , res) =>{
// setLayer(req,)

//   }

let Background;
let Hat;
let Hair;
let Glasses;
let Ear;
let Nose;
let Jacket;
let tokenID;


const setlayerConfig = async (req, res) => {
  console.log("🚀 ~ file: index.js ~ line 35 ~ setlayerConfig ~ req", req.body)
  let results = []
  if (req.body.Background) {
    let value = {
      name: `${req.body.Background}`
    }
    results.push(value)
  }
  if (req.body.Background) {
    let value = {
      name: `Body`
    }
    results.push(value)
  }
  if (req.body.Hat) {
    let value = {
      name: `${req.body.Hat}`
    }
    results.push(value)
  }
  if (req.body.Jacket) {
    let value = {
      name: `${req.body.Jacket}`
    }
    results.push(value)
  }
  if (req.body.Hair) {
    let value = {
      name: `${req.body.Hair}`
    }
    results.push(value)
  }

  if (req.body.Nose) {
    let value = {
      name: `${req.body.Nose}`
    }
    results.push(value)
  }
  if (req.body.Glasses) {
    let value = {
      name: `${req.body.Glasses}`
    }
    results.push(value)
  }
  if (req.body.Ear) {
    let value = {
      name: `${req.body.Ear}`
    }
    results.push(value)
  }


  let layerConfigurations = [
    {
      growEditionSizeTo: 1,
      namePrefix: `Knowlaytes`, // Use to add a name to Metadata `name:`
      layersOrder: results
    },
  ]
  console.log("🚀 ~ file: index.js ~ line 77 ~ //setLayer ~ layerConfigurations", layerConfigurations[0].layersOrder)
  execCommand(req, res);
  program
    .name("generate")

    .option("-c, --continue <dna>", "Continues generatino using a _dna.json file")
    .action(async(options) => {
      console.log(chalk.green("generator started"), options.continue);
      // options.continue
      //   ? console.log(
      //     chalk.bgCyanBright("\n continuing generation using _dna.json file \n")
      //   )
      //   : null;
      buildSetup(results.tokenID);
      let dna = null;
      if (options.continue) {
        const storedGenomes = JSON.parse(fs.readFileSync(options.continue));
        dna = new Set(storedGenomes);
        console.log({ dna });
      }

    await  startCreating(dna, layerConfigurations, req.body.tokenID);

    });

  program.parse();
  console.log("🚀 ~ file: index.js ~ line 122 ~ .action ~ ex")

}
module.exports = {
  setlayerConfig
};