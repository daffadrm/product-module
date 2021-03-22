import express from 'express'
import path from 'path'
import cookieParser from 'cookie-parser'
import compress from 'compression'
import cors from 'cors'

// #1. add this script to import model dan routes
import models from './models/IndexModel';
import routes from './routes/IndexRoute';


//comment script dibawah before building for production
import devBundle from './devBundle'

const CURRENT_WORKING_DIR = process.cwd()
const app = express()

//comment script dibawah before building for production
devBundle.compile(app)

// parse body params and attache them to req.body
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
// secure apps by setting various HTTP headers
app.use(compress())
// enable CORS - Cross Origin Resource Sharing
app.use(cors());

// #middleware
app.use(async (req, res, next) => {
  req.context = {models};
  next();
});

app.use('/dist', express.static(path.join(CURRENT_WORKING_DIR, 'dist')))




// #2 add this script when you add other route
app.use('/api/account', routes.account)
app.use('/api/brand', routes.brand)
app.use('/api/category', routes.category)
app.use('/api/categoryImg', routes.categoryImg)
app.use('/api/condition', routes.condition)
app.use('/api/product', routes.product)
app.use('/api/productImages', routes.productImages)
app.use('/api/productVariant', routes.productVariant)
app.use('/api/status', routes.status)
app.use('/api/v1', routes.uploadDownload)


// Catch unauthorised errors
app.use((err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    res.status(401).json({"error" : err.name + ": " + err.message})
  }else if (err) {
    res.status(400).json({"error" : err.name + ": " + err.message})
    console.log(err)
  }
})

export default app
