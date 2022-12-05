const sql = require("../index") // module export from index sql connects to here


let loadData = async (data)=>  // load all data into MYSQL //CRUD - create
{ 
    new Promise((resolve, reject) =>  // deletes all data before inserting data into table again
    { 
        let sqlQuery = `TRUNCATE TABLE allData`

        sql.query(sqlQuery, (err, result, field)=> 
        {
            if(err) return reject(err);
            resolve(Object.values(("sql table truncate successful")));
        })
        console.log("in first promise of loadData")
    }).then
    (
        result =>  // after truncate table, below is to insert the data into mysql
        {
            var dataInsert = []; // new empty array created to insert data
            
            for (let i  = 0; i < data.length; i++) // for loop to go through all the data
            {
                let userId = data[i].userId
                let id = data[i].id
                let title = data[i].title
                let body = data[i].body

                dataInsert.push([userId, id, title, body]) // populate the dataInsert array, 100 entries will be 100 arrays
            }
            console.log("data pushed to dataInsert array")

            new Promise((resolve, reject) => 
            {
                sql.query(
                {sql: 'INSERT INTO allData(userId, id, title, body) VALUES?', values: [dataInsert]}, // for the 100 arrays created above, insert each array into the database
                (err, result, field) => 
                {
                    if(err) return reject(err);
                    resolve(Object.values(result));
                })
            }).then
            (
                result => 
                {
                    console.log("inside .then for promise, in result before resolve")
                }
            )
        },
        error => {console.log("error")}
    )
    return ("completed loading") // load the data into mysql columns, this will show in postman
    
   
}

let getAllDataFromDB = async (req, res)=>{ // CRUD - retrieve
    console.log("db services all data here")

    return new Promise((resolve, reject) => {
        let sqlQuery = `SELECT * FROM allData`;
        
        sql.query(sqlQuery, (err, result, field) => {
            if(err) return reject(err);
            resolve(Object.values(result));
        });
    });
}

let getuserIdFromDB = async (req, res)=>{ // CRUD - retrieve
    
    let userID = req.query.userID

    return new Promise((resolve, reject) => {
        let sqlQuery = `SELECT * FROM allData WHERE userID = ${userID}`;
        //let sqlQuery = `SELECT * FROM allData WHERE userID = 7`;
        
        sql.query(sqlQuery, (err, result, field) => {
            if(err) return reject(err);
            resolve(Object.values(result));
        });
    });
}

let deleteIdFromDB = async (req, res)=>{ // CRUD - delete
    
    let blogID = req.query.blogID

    return new Promise((resolve, reject) => {
        let sqlQuery = `DELETE FROM allData WHERE id = ${blogID}`;
        
        sql.query(sqlQuery, (err, result, field) => {
            if(err) return reject(err);
            resolve(Object.values(result));
        });
    });
}

let updateDetailsFromDB = async (req, res)=>{ // update mysql db // CRUD - update
    
    let title = req.query.title
    let body = req.query.body
    let blogID = req.query.blogID

    return new Promise((resolve, reject) => {
        let sqlQuery = `UPDATE alldata SET title="${title}", body="${body}" WHERE id="${blogID}"`; // body and title needs "" since it is string
        //let sqlQuery = `UPDATE alldata SET title= "Title changed 12", body = "Body Changed 12" WHERE id=12`;
        
        sql.query(sqlQuery, (err, result, field) => {
            if(err) return reject(err);
            resolve(Object.values(result));
        });
    });
}

let createUserFromDB = async (req, res)=>{ // create entry mysql db // CRUD - create
 
    return new Promise((resolve, reject) => {

        let userID = req.query.userID
        let title = req.query.title
        let body = req.query.body
        let blogID = req.query.blogID
        let sqlQuery = `INSERT INTO alldata (userID, id, title, body) VALUES ("${userID}","${blogID}", "${title}", "${body}")`;

        sql.query(sqlQuery, (err, result, field) => {
            if(err) return reject(err);
            resolve(Object.values(result));
        });
    });
}

let searchEntryFromDB = async (req, res)=>{ // search keywords from title
   
    return new Promise((resolve, reject) => {

        
        let searchInput = req.query.searchInput
        let sqlQuery = `SELECT * FROM alldata WHERE title LIKE "%${searchInput}%"`;
        
        sql.query(sqlQuery, (err, result, field) => {
            if(err) return reject(err);
            resolve(Object.values(result));
        });
    });
}

let showTotalPostsFromDB = async (req, res)=>{ // show total posts from user
 
    return new Promise((resolve, reject) => {

        let userID = req.query.userID
        let sqlQuery = `SELECT COUNT(userID) FROM alldata WHERE userID = "${userID}"`;
 
        sql.query(sqlQuery, (err, result, field) => {
            if(err) return reject(err);
            resolve(Object.values(result));
        });
    });
}

let showUsersFromDB = async (req, res)=>{ // show all users
 
    return new Promise((resolve, reject) => {

        let sqlQuery = `SELECT DISTINCT userID FROM alldata; `;
 
        sql.query(sqlQuery, (err, result, field) => {
            if(err) return reject(err);
            resolve(Object.values(result));
        });
    });
}





module.exports = {loadData, getAllDataFromDB, getuserIdFromDB,deleteIdFromDB, updateDetailsFromDB, createUserFromDB, searchEntryFromDB,showTotalPostsFromDB,showUsersFromDB}