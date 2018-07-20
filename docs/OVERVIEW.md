# Basic Overview of the project
The aim of this project is to build a blockchain network that can be used to store medical information of patients in a hospital. All patient related data like diagnosis and prescried medicine will be stored on a Distriuted Ledger or Blockchain. As new patients come in their personal data will be stored separately. As pateints come more times, only their new medical data has to be added.   
We use two separate blockchains or ledgers to store the data in this network.
* One blockchain holding various general data about the patient like name, contact etc..
* Another blockchain holding the current diagnosis for a patient and his prescribed medicines.  
This allows for us to be able to store multiple records for a single patient, which makes it possile to access a patients historic data on illness as this can be useful for the doctors to use for say current diagnosis.

### Actors or Nodes
There are three types of nodes that will interact with and make up the network viz,
* The Doctors
* The Nurses
* The Admins
For detailed descriptions and roles of each of them refer the file `ACTORS.md`.

### Data on BlockChains
For detailed information about data stored on the chains refer files inside `docs/blockchain` folder..
