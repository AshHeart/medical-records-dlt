# The various actors in our network
There are three identified actors as specified in the Overview viz, `Doctors`, `Nurses` and `Admins`. Keep in mind there can multiple doctors and nurses working at the same time and each will be a node on the network with their customised view of the blockchian.  

### The Doctors
Doctors have a update and view permission on the blockchain. They have the following functionality:
* Add a new patient
* Prescribe medicines to a specified patient
* Add a diagnosis for a patient's condition
* Retreive patient details
* Retreive historic details of any patient

So, they have a broad view of the blockchain, they can update the blockchain and retreive data from the blockchain with minimal restrictions. Needless to say, they may only access data about his patients.

### The Nurses
Nurses are given the task of administering the medicine prescribed to a patient that they are currently overseeing. They can:
* Retreive medical records of their patients
* View other details about their patients like listed known allergies

The nurses have a very limited interaction with the blockchain, that too only the data of patients assigned to them, further they can only get data from the blockchain and cannot update any information on the blockchain.

### The Admins
Admins or management of the hospital has the most unrestricted view of the blockchain. They can:
* View any and all data stored on the ledger
* With authorization can update the information on the blockchain

When there is a need to update information about a petient on the blockchain, only the admins are allowed to do so. After proper authentication, they can invalidate prior infomation on the ledger and add updated information about a patient as deemed necessary.
