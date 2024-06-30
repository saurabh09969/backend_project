import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()
app.use(cores({
    origin: process.env.CORES_ORIGIN,
    Credentials:true
}))

app.use(expres.json({limit:"100kb"}))
app.use(express.urlencoded({extended: true,limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser())



export {app}