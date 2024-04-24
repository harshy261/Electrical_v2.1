import express from 'express'
import web from './routes/web.js'
const app = express()


const port = process.env.PORT || '5500'



// SET TEMPLATE ENGINE
app.set('view engine', 'ejs')



// STATIC FILES
app.use(express.static('public'))




// LOAD ROUTES
app.use('/', web)



// SERVER LISTENING
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
})

