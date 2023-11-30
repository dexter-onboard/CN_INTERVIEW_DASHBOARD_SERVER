const express = require('express')
const cors = require('cors')
const mongoDB = require('./config/mongoose')
const Admin = require('./model/admin')
const app = express()
const PORT = 8000

app.use(cors())
app.use(express.json())



app.post('/', async (req, res) => {

    console.log(req.body)

    const admin = await Admin.create(req.body)

    return res.status(200).json({
        user: admin
    })

})


mongoDB.then( () => {
    app.listen(PORT, (err) => {
        console.log("Server running on PORT: ", PORT)
    })
})