
const ContractAbi =[
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_helper",
				"type": "address"
			},
			{
				"internalType": "address payable",
				"name": "_community",
				"type": "address"
			},
			{
				"internalType": "address payable",
				"name": "_dev",
				"type": "address"
			},
			{
				"internalType": "bytes32",
				"name": "_rootHash",
				"type": "bytes32"
			},
			{
				"internalType": "bytes32",
				"name": "_freeRoot",
				"type": "bytes32"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "approved",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "ApprovalForAll",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "bytes32",
				"name": "data",
				"type": "bytes32"
			}
		],
		"name": "ChangeTrait",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"internalType": "bytes32",
				"name": "data",
				"type": "bytes32"
			}
		],
		"name": "changeTraits",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256[][6]",
				"name": "min",
				"type": "uint256[][6]"
			},
			{
				"internalType": "uint256[][6]",
				"name": "totalId",
				"type": "uint256[][6]"
			}
		],
		"name": "freezeValues",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32[]",
				"name": "proof1",
				"type": "bytes32[]"
			},
			{
				"internalType": "bytes32[]",
				"name": "proof2",
				"type": "bytes32[]"
			}
		],
		"name": "mintKnowlytes",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "bg",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "hat",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "jacket",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "hair",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "nose",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "glass",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "ear",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "name",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "genre",
				"type": "uint256"
			}
		],
		"name": "MintKnowlytes",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"internalType": "bytes",
				"name": "data",
				"type": "bytes"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "addressNum",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "_newAddress",
				"type": "address"
			}
		],
		"name": "setAddress",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "setApprovalForAll",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_newURI",
				"type": "string"
			}
		],
		"name": "setBaseURI",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "rootNum",
				"type": "uint256"
			},
			{
				"internalType": "bytes32",
				"name": "_newRoot",
				"type": "bytes32"
			}
		],
		"name": "setHashroot",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "priceNum",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_newgetPrice",
				"type": "uint256"
			}
		],
		"name": "setPrice",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "supply",
				"type": "uint256"
			}
		],
		"name": "setSupply",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "trait",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "values",
				"type": "string"
			}
		],
		"name": "setTraitvalues",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "toggleFreeMinting",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "toggleMinting",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "genre",
				"type": "uint256"
			}
		],
		"name": "toggleReveal",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "toggleWhiteListMinting",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256[]",
				"name": "tId",
				"type": "uint256[]"
			},
			{
				"internalType": "uint256[]",
				"name": "t",
				"type": "uint256[]"
			},
			{
				"internalType": "uint256[]",
				"name": "value",
				"type": "uint256[]"
			}
		],
		"name": "updateBatchTraitTypes",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "getApproved",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_type",
				"type": "uint256"
			}
		],
		"name": "getBackgroundValue",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getChangePrice",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_type",
				"type": "uint256"
			}
		],
		"name": "getEarValue",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_type",
				"type": "uint256"
			}
		],
		"name": "getGlassValue",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_type",
				"type": "uint256"
			}
		],
		"name": "getHairValue",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_type",
				"type": "uint256"
			}
		],
		"name": "getHatValue",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_type",
				"type": "uint256"
			}
		],
		"name": "getJacketValue",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getManager",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_type",
				"type": "uint256"
			}
		],
		"name": "getNameValue",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "getNFTDetails",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "changedMonth",
				"type": "uint256"
			},
			{
				"internalType": "bytes32",
				"name": "hashedProof",
				"type": "bytes32"
			},
			{
				"components": [
					{
						"components": [
							{
								"internalType": "uint256",
								"name": "value",
								"type": "uint256"
							},
							{
								"internalType": "bool",
								"name": "isFreezed",
								"type": "bool"
							}
						],
						"internalType": "struct StorageV2.TraitValue",
						"name": "Hat",
						"type": "tuple"
					},
					{
						"components": [
							{
								"internalType": "uint256",
								"name": "value",
								"type": "uint256"
							},
							{
								"internalType": "bool",
								"name": "isFreezed",
								"type": "bool"
							}
						],
						"internalType": "struct StorageV2.TraitValue",
						"name": "Jacket",
						"type": "tuple"
					},
					{
						"components": [
							{
								"internalType": "uint256",
								"name": "value",
								"type": "uint256"
							},
							{
								"internalType": "bool",
								"name": "isFreezed",
								"type": "bool"
							}
						],
						"internalType": "struct StorageV2.TraitValue",
						"name": "Hair",
						"type": "tuple"
					},
					{
						"components": [
							{
								"internalType": "uint256",
								"name": "value",
								"type": "uint256"
							},
							{
								"internalType": "bool",
								"name": "isFreezed",
								"type": "bool"
							}
						],
						"internalType": "struct StorageV2.TraitValue",
						"name": "Nose",
						"type": "tuple"
					},
					{
						"components": [
							{
								"internalType": "uint256",
								"name": "value",
								"type": "uint256"
							},
							{
								"internalType": "bool",
								"name": "isFreezed",
								"type": "bool"
							}
						],
						"internalType": "struct StorageV2.TraitValue",
						"name": "Glass",
						"type": "tuple"
					},
					{
						"components": [
							{
								"internalType": "uint256",
								"name": "value",
								"type": "uint256"
							},
							{
								"internalType": "bool",
								"name": "isFreezed",
								"type": "bool"
							}
						],
						"internalType": "struct StorageV2.TraitValue",
						"name": "Ear",
						"type": "tuple"
					},
					{
						"components": [
							{
								"internalType": "uint256",
								"name": "value",
								"type": "uint256"
							},
							{
								"internalType": "bool",
								"name": "isFreezed",
								"type": "bool"
							}
						],
						"internalType": "struct StorageV2.TraitValue",
						"name": "Background",
						"type": "tuple"
					},
					{
						"internalType": "uint256",
						"name": "Name",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "Generation",
						"type": "uint256"
					}
				],
				"internalType": "struct StorageV2.Traits",
				"name": "currentDetails",
				"type": "tuple"
			},
			{
				"internalType": "bool",
				"name": "haveChanged",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_type",
				"type": "uint256"
			}
		],
		"name": "getNoseValue",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getPrice",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			}
		],
		"name": "isApprovedForAll",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_type",
				"type": "uint256"
			}
		],
		"name": "isEarFreezed",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "isFreeMintingPaused",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_type",
				"type": "uint256"
			}
		],
		"name": "isGlassFreezed",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_type",
				"type": "uint256"
			}
		],
		"name": "isHairFreezed",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_type",
				"type": "uint256"
			}
		],
		"name": "isHatFreezed",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_type",
				"type": "uint256"
			}
		],
		"name": "isJacketFreezed",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "isMintingPause",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_type",
				"type": "uint256"
			}
		],
		"name": "isNoseFreezed",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "isRevealed",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "isWhitelistMintingPause",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "maxSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "ownerOf",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes4",
				"name": "interfaceId",
				"type": "bytes4"
			}
		],
		"name": "supportsInterface",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "tokenIdCounter",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "tokenURI",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

const ContractAddress = "0x438d96aa6d6D56B83FD1808A826E8B8028C0dEfE";

module.exports = {
    ContractAbi,
    ContractAddress
} 