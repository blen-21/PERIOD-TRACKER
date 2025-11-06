const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Set the views directory to your 'pages' folder
app.set('views', path.join(__dirname, 'pages'));

// Route to display the calculator
app.get('/', (req, res) => {
    res.render('calculators');
});
app.get('/duedate', (req, res) => {
    res.render('duedate');
});
app.get('/hcg', (req, res) => {
    res.render('hcg');
});
app.get('/implantations', (req, res) => {
    res.render('implantations');
});
app.get('/ivf', (req, res) => {
    res.render('ivf');
});
// Alternative route if you want a specific path
// app.get('/calculators', (req, res) => {
//     res.render('calculators');
// });

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});