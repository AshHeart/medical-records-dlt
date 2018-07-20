'use strict'
/**
 * The transaction add new patient will take the patients details and package 
 * them as a transaction which will be later pushed onto the blockchain
 * 
 * This file is a part of the medical-records-dlt project. 
 * 
 * @author AshHeart <ash.snaray@gmail.com>
 * @copyright (c) 2018 Ashweyth Sunil
 */

const SHA3 = require('crypto-js/sha3')

/**
 * @class Defines a transaction to add a new patient's details
 */
class AddNewPatient
{
    /**
     * @constructor
     * 
     * @param {string} name of the patient
     * @param {number} age of the patient
     * @param {string} sex of the patient
     * @param {number} phone of the patient
     * @param {string} address of the patient's home
     * @param {Array} knownAllergies of the patient for diagnosis and prescriptions
     */
    constructor(name, age, sex, phone, address, knownAllergies)
    {
        this.patientID              = this.getPatientID(name, age, sex)
        this.patientName            = name,
        this.patientSex             = sex
        this.patientContact.phone   = phone,
        this.patientContact.address = address,
        this.patientAllergies       = knownAllergies
    }

    /**
     * Generates a patient id for a new patient using SHA3 with their 
     * name, age and sex as the key
     * 
     * @param {string} name Name of the patient
     * @param {number} age of the patient
     * @param {string} sex of the patient
     * 
     * @returns {String}
     */
    getPatientID(name, age, sex)
    {
        let newID = ""
        let newHash = SHA3(name + age + sex).toString()

        newID = "PID_" + newHash

        return newID
    }
}

module.exports = AddNewPatient