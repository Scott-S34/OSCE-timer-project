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
      timePerStationInMinutes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 
        16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30], 
      warningInMinutes: [1, 2, 3, 4, 5 ,6, 7, 8, 9, 10, 
        11, 12, 13, 14, 15, 16 ,17, 18, 19, 20],
      minutesToRead: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      secondsToSwitchStation: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120],
      
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

//define a route for the reading timer page
app.get('/reading-timer-page', (req, res) => {
  res.render('reading-timer-page', {title: 'Reading Time'});
})

//define a route for the timer page
app.get('/main-timer-page', (req, res) => {
  res.render('main-timer-page', {title: 'The Timer'});
})

//define a route for the switching timer page
app.get('/switching-timer-page', (req, res) => {
  res.render('switching-timer-page', {title: 'Switching Time'});
})


//define a route for the error page
app.get('/error-page', (req, res) =>{
  res.render('error-page', {title: "Error! Wrong Way"});
})


//message that is the displayed in the console once the server has been booted up
app.listen(port, () => {
  console.log('Server running at http:// ' + port)
});
