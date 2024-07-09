let express = require('express')
let fs = require('fs')
let app = express()

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    let values = fs.readFileSync('card-detail/json/data.json')
    const jsonData = JSON.parse(values);
    console.log(jsonData);
    res.render('index', { values: jsonData })
})


app.get('/product', (req, res) => {
    let values = fs.readFileSync('card-detail/json/data.json')

    console.log(req.query.id)

    let id = req.query.id

    const jsonData = JSON.parse(values);
    console.log(jsonData[id].productPrise);
    console.log(jsonData)
    res.render('product', { values: jsonData[id] })
})

app.listen(8080)