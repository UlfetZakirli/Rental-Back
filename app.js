const express = require('express')
const app = express()
app.set('view engine', 'ejs');

app.use(express.static(__dirname + "/public"))
app.use('/', require("./routers/indexRouter"))

const start = async () =>{
    app.listen(8080, '0.0.0.0', ()=>console.log(`Server is running on http://localhost:${8080}`))
}
start()