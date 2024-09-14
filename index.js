import express from 'express'
import {connectDB} from './database/dbconn.js'
import {bootstrap} from './bootstrap.js'

const app = express()
app.use(express.json())
bootstrap(app)


app.use('*', (req, res) => {
    res.send(' Not Found ')
})

app.listen(3000, () => {
    console.log('Server is running successfully..........')
})