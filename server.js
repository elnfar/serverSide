import express from "express";
const app = express()
import dotenv from 'dotenv'
dotenv.config()


//db & auth
import connectDB from "./middleware/db/connect.js";

//routers 
import authRouter from './routes/authRouter.js'




import errorHandlerMiddleware from "./middleware/error-handler.js";
import notFoundMiddleware from './middleware/not-found.js'




//middleware

app.use(express.json())

app.get('/',(req,res) => {
    res.send('Hello2')
})

app.use('api/v1/auth',authRouter)

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 5002



const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL)
        app.listen(port,() => {
            console.log(`running on ${port}`)
        })
    }catch (error) {
        console.log(error);
    }
}
start()