'use strict'
/**
 * First of two blockchains. Here we will store basic details of our
 * patients. For detailed info see: /docs/blockchain/PATIENTDETAILSBLOCKCHAIN.md
 * 
 * This file is a part of the medical-records-dlt project. 
 * 
 * @author AshHeart <ash.snaray@gmail.com>
 * @copyright (c) 2018 Ashweyth Sunil
 */

const SHA256 = require('crypto-js/sha256')

const Block = require('./block')
const AddNewPatient = require('../transactions/addNewPatient')

/**
 * @class Stores general details about a patient in our hospital
 */
class PatientDetailsBlockchain
{
    /**
     * Creates our blockchin and adds the genesis block to the chain
     * 
     * @constructor
     * @param {Block} genesisBlock 
     */
    constructor(genesisBlock)
    {
        this.blocks = []
        this.addBlock(genesisBlock)
    }

    /**
     * Adds a newly created block onto the blockchain
     * 
     * @param {Block} block 
     */
    addBlock(block)
    {
        if(this.blocks.length == 0) {
            block.previousHash = "0000000000000000000000000000000000000000000000000000000000000000",
            block.hash = this.generatehash(block)
        }

        this.blocks.push(block)
    }

    getPreviousBlock()
    {
        return this.blocks[this.blocks.length - 1]
    }

    /**
     * Sets up the next new block to be pushed onto the blockchain
     * 
     * @param {AddNewPatient} transactions 
     */
    getNextBlock(transactions)
    {
        let block = new Block()

        transactions.forEach(transaction =>
            block.addTransaction(transaction)
        )

        block.index = this.blocks.length
        block.previousHash = this.getPreviousBlock().hash
        block.hash = this.generatehash(block)

        return block
    }

    /**
     * Calculates the hash of a new block using the SHA265 algorithm
     * using the details stored on the block as the key for the algorithm
     * 
     * @param {Block} block 
     */
    generatehash(block)
    {
        let hash = SHA256(block.key)

        //Not needed here but we'll keep it
        while(!hash.startsWith("0000")) {
            block.nonce++
            hash = SHA256(block.key).toString()
        }

        return hash
    }
}

module.exports = PatientDetailsBlockchain
