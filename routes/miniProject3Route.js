var express = require('express'); //lets us use the express library imports express library
var router = express.Router(); //lets us use the router functinalitis of express

var miniProject3Controller = require('../controllers/miniProject3Controller')    //grabs the controller
		
router.post('/load',(req,res)=>{ // load all data from external api into mysql db
    console.log("router here")
    miniProject3Controller.getAndLoadData(req,res)
})

router.get('/retrieveAll',(req,res)=>{ // retrieve all data from mysql table
    console.log("router here")
    miniProject3Controller.retrieveAll(req,res)
})

router.get('/filterByUserId',(req,res)=>{ // filter by user ID
    console.log("router here")
    miniProject3Controller.retrieveUserId(req,res)
})

router.delete('/deleteById',(req,res)=>{ // delete by id
    console.log("router here")
    miniProject3Controller.deleteId(req,res)
})

router.put('/updateDetailsById',(req,res)=>{ // update by ID
    console.log("router here")
    miniProject3Controller.updateDetailsById(req,res)
})

router.post('/createEntry',(req,res)=>{ // create entry
    console.log("router here")
    miniProject3Controller.createUser(req,res)
})

router.get('/searchEntryByTitle',(req,res)=>{ // search entry by title
    console.log("router here")
    miniProject3Controller.searchEntryByTitle(req,res)
})

router.get('/totalUserPosts',(req,res)=>{ // show total posts by user
    console.log("router here")
    miniProject3Controller.totalUserPosts(req,res)
})

router.get('/showUsersList',(req,res)=>{ // show all users 
    console.log("router here")
    miniProject3Controller.showUsersList(req,res)
})







module.exports = router;