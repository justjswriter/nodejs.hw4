const exp = require('express');
const app = exp()
const bp = require('body-parser');

app.use(bp.json());
app.use(bp.urlencoded({ extended: false }));

app.set('view engine', 'handlebars');

app.post('/page', (req,res) => {
    let car = JSON.parse(JSON.stringify(req.body))
    let info = {
        model: car.model,
        year: car.year
    }
    res.render('contacts.hbs', info)
    console.log(car)
});


app.get('/page', (req,res) => {
    let car = {
        "model": "LX570",
        "year": 2022
    }
    let info = {
        model: car.model,
        year: car.year,
        imgSrc: car.imgSrc
    }
    res.render('contacts.hbs', info)
    console.log(car)
});

app.listen(8080);

