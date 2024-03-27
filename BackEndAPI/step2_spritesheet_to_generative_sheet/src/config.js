"use strict";

const path = require("path");
const isLocal = typeof process.pkg === "undefined";
// const basePath = isLocal ? process.cwd() : path.dirname(process.execPath);
const basePath = __dirname;
console.log("🚀 ~ file: config.js ~ line 6 ~ basePath", process.cwd())
// const { MODE } = require(path.join(basePath, "./step2_spritesheet_to_generative_sheet/src/blendMode.js"));

const layersDir = path.join(process.cwd(), "/step1_layers_to_spritesheet/output"); // Input is read from previous step
console.log("🚀 ~ file: config.js ~ line 11 ~ layersDir", layersDir)
const outputDir = path.join(basePath, "../output"); // Images are written to output folder
console.log("🚀 ~ file: config.js ~ line 13 ~ outputDir", outputDir)
const buildDir = path.join(process.cwd(), "/build"); // JSON are written to json folder
console.log("🚀 ~ file: config.js ~ line 15 ~ buildDir", buildDir)
const { numFramesPerBatch, numberOfFrames, useBatches, description, baseUri, height, width, startIndex, debug, totalSupply, layersFolder } = require(path.join(
  basePath,
  "../../global_config.json"
));
// console.log("🚀 ~ file: config.js ~ line 25 ~ Hat", Hat)
const {execCommand,setLayer} = require("./setLayer.js")
  
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

let layerConfigurations = [
  {
    growEditionSizeTo: totalSupply,
    namePrefix: `Knowlaytes`, // Use to add a name to Metadata `name:`
    layersOrder: [
      { name: `${Background}` },
      {
        name: "Body",
      },
      {
        name: `${Hat}`,
      },
      { name: `${Hair}` },
      { name: `${Glasses}` },
      { name: `${Ear}` },
      { name: `${Nose}` },
      { name: `${Jacket}t` },
    ],
  },
]

  const setlayerConfig = async (req, res) => {

     setLayer(req, (err, results) => {
        if (err) {
            console.log(err);
            return;
        }

        Background = results.Background;
        Hat = results.Hat;
        Hair = results.Hair;
        Glasses = results.Glasses;
        Ear = results.Ear;
        Nose = results.Nose;
        Jacket = results.Jacket;
        tokenID = results.tokenID;

        layerConfigurations[0].layersOrder[0].name = Background;
        layerConfigurations[0].layersOrder[2].name = Hat;
        layerConfigurations[0].layersOrder[3].name = Hair;
        layerConfigurations[0].layersOrder[4].name = Glasses;
        layerConfigurations[0].layersOrder[5].name = Ear;
        layerConfigurations[0].layersOrder[6].name = Nose;
        layerConfigurations[0].layersOrder[7].name = Jacket;

        console.log('layerConfigurations',JSON.stringify(layerConfigurations));
        
        execCommand();
    });
}

// const getLayerConfig = () => {
//   return layerConfigurations;
// }
// const { exec } = require("child_process");

// var Background
// var Hat
// var Hair
// var Glasses
// var Ear
// var Nose
// var Jacket
// var tokenID

// const setLayer = async (req, res) => {

//   Background = req.body.Background
//   Hat = req.body.Hat;
//   Hair = req.body.Hair;
//   Glasses = req.body.Glasses;
//   Ear = req.body.Ear;
//   Nose = req.body.Nose;
//   Jacket = req.body.Jacket;
//   tokenID = req.body.tokenID

//   console.log("🚀 ~ file: config.js ~ line 13 ~ setLayer ~ req", req.body)

//   exec("make all", (error, stdout, stderr) => {
//     if (error) {
//       console.log(`error: ${error.message}`);
//       return;
//     }
//     if (stderr) {
//       console.log(`stderr: ${stderr}`);
//       return;
//     }
//     console.log(`stdout: ${stdout}`);
//   });
// }

/*********************
 * General Generator Options
 ***********************/



/* ONLY VARIABLE THAT YOU NEED TO EDIT IS HERE */
// console.log("🚀 ~ file: config.js ~ line 63 ~ tokenID", tokenID)

const format = {
  width: useBatches ? (width * numFramesPerBatch) : (width * numberOfFrames),
  height,
  smoothing: true, // set to false when up-scaling pixel art.
};

const background = {
  generate: false,
  brightness: "80%",
};


const layerConfigurationsZIndex = [
  {
    growEditionSizeTo: totalSupply,
    namePrefix: "Bouncing Ball Z-Index Example:",
    layersOrder: [
      { name: "Background" },
      { name: "Landscape" },
      { name: "Ball" },
    ],
  },
]

// This will create totalSupply - 1 common balls, and 1 rare ball
// They will be in order but you can shuffleLayerConfigurations
const layerConfigurationsGrouping = [
  {
    growEditionSizeTo: totalSupply - 1,
    namePrefix: "Bouncing Ball Common:",
    layersOrder: [
      { name: "Background" },
      { name: "Landscape" },
      { name: "Common Ball", trait: "Ball" },
      { name: "Common Hat", trait: "Hat" },
    ],
  },
  {
    growEditionSizeTo: totalSupply,
    namePrefix: "Bouncing Ball Rare:",
    layersOrder: [
      { name: "Background" },
      { name: "Landscape" },
      { name: "Rare Ball", trait: "Ball" },
      { name: "Rare Hat", trait: "Hat" },
    ],
  },
]

const layerConfigurationsIfThen = [
  {
    growEditionSizeTo: totalSupply,
    namePrefix: "", // Use to add a name to Metadata `name:`
    layersOrder: [
      { name: "Background" },
      { name: "Landscape" },
      {
        name: "Ball",
      },
    ],
  },
]

const handler = {
  get: function (target, name) {
    return target.hasOwnProperty(name) ? target[name] : layerConfigurations;
  }
};

const layerConfigurationMapping = new Proxy({
  "layers": layerConfigurations,
  "layers_z_index": layerConfigurationsZIndex,
  "layers_grouping": layerConfigurationsGrouping,
  "layers_if_then": layerConfigurationsIfThen,
}, handler);

layerConfigurations = layerConfigurationMapping[layersFolder];

/**
 * Set to true for when using multiple layersOrder configuration
 * and you would like to shuffle all the artwork together
 */
const shuffleLayerConfigurations = false;

const debugLogs = debug;

/*********************
 * Advanced Generator Options
 ***********************/

// if you use an empty/transparent file, set the name here.
const emptyLayerName = "NONE";

/**
 * Incompatible items can be added to this object by a files cleanName
 * This works in layer order, meaning, you need to define the layer that comes
 * first as the Key, and the incompatible items that _may_ come after.
 * The current version requires all layers to have unique names, or you may
 * accidentally set incompatibilities for the _wrong_ item.
 *
 * Try run it with layers_incompatible and see that the Flashing background
 * will not have the flashing ball
 */
const incompatible = {
  // Flashing: ["Multicolor"],
};

/**
 * Require combinations of files when constructing DNA, this bypasses the
 * randomization and weights.
 *
 * The layer order matters here, the key (left side) is an item within
 * the layer that comes first in the stack.
 * the items in the array are "required" items that should be pulled from folders
 * further in the stack
 */
const forcedCombinations = {
  // floral: ["MetallicShades", "Golden Sakura"],
};

/**
 * In the event that a filename cannot be the trait value name, for example when
 * multiple items should have the same value, specify
 * clean-filename: trait-value override pairs. Wrap filenames with spaces in quotes.
 */
const traitValueOverrides = {
  // Helmet: "Space Helmet",
  // "gold chain": "GOLDEN NECKLACE",
};

const extraMetadata = {};

const extraAttributes = () => [
  // Optionally, if you need to overwrite one of your layers attributes.
  // You can include the same name as the layer, here, and it will overwrite
  //
  // {
  // trait_type: "Bottom lid",
  //   value: ` Bottom lid # ${Math.random() * 100}`,
  // },
  // {
  //   display_type: "boost_number",
  //   trait_type: "Aqua Power",
  //   value: Math.random() * 100,
  // },
  // {
  //   display_type: "boost_number",
  //   trait_type: "Health",
  //   value: Math.random() * 100,
  // },
  // {
  //   display_type: "boost_number",
  //   trait_type: "Mana",
  //   value: Math.floor(Math.random() * 100),
  // },
];

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

/**
 * Set to true to always use the root folder as trait_type
 * Set to false to use weighted parent folders as trait_type
 * Default is true.
 */
const useRootTraitType = true;

module.exports = {
  background,
  baseUri,
  buildDir,
  debugLogs,
  description,
  emptyLayerName,
  extraAttributes,
  extraMetadata,
  forcedCombinations,
  format,
  incompatible,
  layerConfigurations,
  // getLayerConfig,
  layersDir,
  outputDir,
  rarityDelimiter,
  shuffleLayerConfigurations,
  startIndex,
  traitValueOverrides,
  uniqueDnaTorrance,
  useRootTraitType,
  // setLayer,
  // setlayerConfig
};
