const express = require('express')

//express app (invoke fuction)
const app = express()

// listen for requests - method listen  - port number, then fire function
app.listen(4000, ()=> {
    console.log('listening on port 4000')
})
//changes seen in terminal - start and stop 