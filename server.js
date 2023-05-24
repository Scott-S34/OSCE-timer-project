const express = require ('express');
const app = express();
const path = require('path');

//const hostname = '127.0.0.1';
const port = 8080;

//set view engine to ejs
app.set('view engine', 'ejs');

//specify the viewers directory
app.set('views', path.join(__dirname, 'views'));

//serve static files from public folder
app.use(express.static(path.join(__dirname, 'public')));

//---------------------------------------- DEFINE ROUTES ---------------------------------------- //
//define a route for the home page
app.get('/', (req, res) => {
    res.render('index', {title: 'Home', 
    stations: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
    timePerStation: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 
      16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
  });
});

//define a route for the room1 page
app.get('/room1', (req, res) => {
    res.render('room1', {title: 'room1', capacity: 12});
});

//define a route for the room2 page
app.get('/room2', (req, res) => {
  res.render('room2', {title: 'room2', capacity: 64  });
});



app.listen(port, () => {
  console.log('Server running at http:// ' + port)
});
