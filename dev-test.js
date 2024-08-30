
// Import
const Block = require("./block");

/***  Test der Block-Funktionalität  */
// const block = new Block("aktuelle zeit","hash1","hash2","Blockdaten");
// console.log(block.toString());

// console.log(Block.genesis().toString());

const testBlock = Block.mineBlock(Block.genesis(),"Bank an Kasse 1000,-");
console.log(testBlock.toString());