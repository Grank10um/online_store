require('dotenv').config()
const models = require('./models/models')
const express = require('express')
const sequelize = require('./db')
const fileUpload = require('express-fileupload')
const cors = require('cors')
const router = require('./routes/indexRouter')
const errorHandler = require('./error/middleware/ErrorHandlingMiddleWare')
const path = require('path')

const PORT = process.env.PORT || 5000

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))
app.use('/api', router)

//обработчик ошибок всегда в последнюю очередь
app.use(errorHandler)

// app.get('/', (req, res)=> {
//     res.status(200).json({message: "Ok!"})
// })

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, ()=> console.log(`Server started on port: ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()