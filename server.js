const express=require('express')
const app = express()



app.use(express.json())
app.use(express.urlencoded({
  extended: true
}))
app.use('/',
  express.static(__dirname + '/dist')
)
const PORT = process.env.PORT || 4444
//const PORT=4444
app.listen(PORT)