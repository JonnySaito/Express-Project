// console.log('js has loaded buddy');
const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

const data = require('./MOCK_DATA');

app.use(function(req, res, next){
    console.log(`${req.method} request for ${req.url}`);
    next();
});

// This line does tons of stuff that we previously had to use tons of if statements to do:
app.use(express.static('./public'));

app.get('/aboutProject', function(req, res){
  res.sendFile(path.join(__dirname + '/public/about.html'));
});



app.use('/bootstrap', express.static(path.join(__dirname, 'node_modules/bootstrap/dist')));
app.use('/jquery', express.static(path.join(__dirname, 'node_modules/jquery/dist')));
app.use('/popper.js', express.static(path.join(__dirname, 'node_modules/popper.js/dist')));


app.get('/people', function(req, res){
    res.json(data);
});

app.get('/gender/g=:gender', function(req, res){
    const genderParam = req.params.gender;
    if ((genderParam == 'male') || (genderParam == 'female')) {
        let filteredData = [];
        for (var i = 0; i < data.length; i++) {
            if(genderParam === data[i].gender.toLowerCase()){
                filteredData.push(data[i]);
            }
        }
        res.send(filteredData);
    } else {
        res.send('Invalid parameter!!')
    }
});
// In express, a colon plus a word is a parameter


// app.get('/', (req, res) => res.send('Hello world'));
//Also can use app.post();
// Below we add /about etc to url IN BROWSER and the response is generated
// app.get('/about', (req, res) => res.send('Hello from about page'));
// app.get('/contact', (req, res) => res.send('Hello from contact page'));
// app.get('/about/me', (req, res) => res.send('Hello from about me page'));
// app.get('/about/us', (req, res) => res.send('Hello from about us page'));

app.listen(port, () => console.log(`application is running on port ${port}`));
