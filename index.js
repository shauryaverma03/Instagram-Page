const express = require('express');
const app = express();
const PORT = 8080;
const path = require('path');
const { v4 : uuidv4 } = require('uuid');
uuidv4();

app.use(express.urlencoded({ extended: true }));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

// app.get('/', (req, res) => {
//     res.render('index');
// });

let data = require('./data/users.json');
app.get("/instagram", (req, res) => {
    res.render('index', { data: data });
});

app.use((req, res) => {
    res.render('error');
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});