//init server
import express from 'express'
const app = express()

//static file middleware
import path from 'path'
const __dirname = path.resolve()
app.use(express.static(path.join(__dirname, 'src/public')))

//HTTP logger
import morgan from 'morgan'
// app.use(morgan('combined'))

//template engine
import { engine } from 'express-handlebars'
app.engine('handlebars', engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.set('views', path.join(__dirname, 'src/resources/views'))

//post midlelware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//apply route module
import route from './routes/index.js'
route(app);

//start app
const port = 3000
app.listen(port, () => console.log('App run'))