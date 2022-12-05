const axios = require('axios');


const fetchAllPostsData = async () => {
    const options = {
        method: 'GET',
        url: 'https://jsonplaceholder.typicode.com/posts',
        headers: {
          accept: 'application/json',
          "Accept-Encoding":'*' //  this line is to fix the issue with api random characters
        }
      };
    const response = await axios.request(options)
    .then((json) => {
        console.log(json)
        return (json.data)
    })
    return response
    }



module.exports = {fetchAllPostsData};