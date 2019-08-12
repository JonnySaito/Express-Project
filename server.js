// console.log('js has loaded buddy');
const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.use(function(req, res, next){
    console.log(`${req.method} request for ${req.url}`);
    next();
});

// This line does tons of stuff that we previously had to use tons of if statements to do:
app.use(express.static('./public'));

app.use('/bootstrap', express.static(path.join(__dirname, 'node_modules/bootstrap/dist')));
app.use('/jquery', express.static(path.join(__dirname, 'node_modules/jquery/dist')));
app.use('/popper.js', express.static(path.join(__dirname, 'node_modules/popper.js/dist')));

// app.get('/', (req, res) => res.send('Hello world'));
//Also can use app.post();
// Below we add /about etc to url IN BROWSER and the response is generated
// app.get('/about', (req, res) => res.send('Hello from about page'));
// app.get('/contact', (req, res) => res.send('Hello from contact page'));
// app.get('/about/me', (req, res) => res.send('Hello from about me page'));
// app.get('/about/us', (req, res) => res.send('Hello from about us page'));

app.listen(port, () => console.log(`application is running on port ${port}`));
