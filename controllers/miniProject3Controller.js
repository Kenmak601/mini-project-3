let DBServices = require('../services/miniProject3DBServices') // use services.js file

var miniProject3API = require('../middleware/miniProject3API') // use middleware.js file // populate db


    //This function below does three things
    //1st step is to fetch api via middleware
    //2nd step is to insert data from api fetch via DBservices
    //3rd step is to send a response
const getAndLoadData = async (req, res) => {

    //1st step fetch api done
    let data = await miniProject3API.fetchAllPostsData() // fetchAllPostsData from middleware api file

    //2nd step load into db
    DBServices.loadData(data)
    // let data = await DBServices.getAllStudents(res)
    console.log(data)
    res.send("DB Populated!")

}

const retrieveAll = async (req, res) => { // import , used in routes.js

    //this function RetriveAll goes to our dbservices function that gets all the data we need

    let data = await DBServices.getAllDataFromDB(req,res)  // getAllDataFromDB from services js file
    console.log(data)
    res.send(data)

}

const retrieveUserId = async (req, res) => { // import , used in routes.js

    let data = await DBServices.getuserIdFromDB(req,res)  // getAllDataFromDB from services js file
    console.log(data)
    res.send(data)

}

const deleteId = async (req, res) => { // import , used in routes.js

    let data = await DBServices.deleteIdFromDB(req,res)  // getAllDataFromDB from services js file
    console.log(data)
    res.send(data)

}

const updateDetailsById = async (req, res) => { // import , used in routes.js

    let data = await DBServices.updateDetailsFromDB(req,res)  // getAllDataFromDB from services js file
    console.log(data)
    res.send(data)

}

const createUser = async (req, res) => { // import , used in routes.js

    let data = await DBServices.createUserFromDB(req,res)  // getAllDataFromDB from services js file
    console.log(data)
    res.send(data)

}

const searchEntryByTitle = async (req, res) => { // import , used in routes.js

    let data = await DBServices.searchEntryFromDB(req,res)  // getAllDataFromDB from services js file
    console.log(data)
    res.send(data)

}

const totalUserPosts = async (req, res) => { // import , used in routes.js

    let data = await DBServices.showTotalPostsFromDB(req,res)  // getAllDataFromDB from services js file
    console.log(data)
    res.send(data)

}

const showUsersList = async (req, res) => { // import , used in routes.js

    let data = await DBServices.showUsersFromDB(req,res)  // getAllDataFromDB from services js file
    console.log(data)
    res.send(data)

}

module.exports = {getAndLoadData, retrieveAll, retrieveUserId, deleteId, updateDetailsById, createUser, searchEntryByTitle,totalUserPosts,showUsersList} // export