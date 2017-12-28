var express = require('express');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var path = require('path');

var app = express(); // The express server

// console.log(path.join(__dirname, 'public'));

// Setup the view engine
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Setup body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Setup which files are available to the front end
app.use(express.static(path.join(__dirname, 'public')));

// mysite.com//

// Route -- Visit the homepage, fire this function
// app.get('/', function(request, response) {
// 	var fruits_data = ['apple', 'orange', 'grape'];
// 	var person = {
// 		name: 'JD',
// 		age: 38
// 	};

// 	var people_data = [
// 		{
// 			name: 'JD',
// 			age: 38
// 		},
// 		{
// 			name: 'Bob',
// 			age: 99
// 		}
// 	];


// 	response.render('index', {
// 		people: people_data
// 	});
// 	// response.render('index', {
// 	// 	title: 'Our Application',
// 	// 	fruits: fruits_data,
// 	// 	data: person,
// 	// 	people: people
// 	// });
// });

var note_data = [];

app.get('/', function(req, res) {
	res.render('index', {notes: note_data});
});

app.get('/notes', function(req, res) {
	res.render('notes');
});

app.post('/notes', function(req, res) {
	// req.body = {title: 'some title', details: 'some details about the note'}
	note_data.push(req.body);

	res.redirect('/');
});


app.listen(5000, function() {
	console.log('Listening on port 5000');
});



// var arr = [55, 'Some string', ['one', 'two', 'three'], {name: 'JD', age: 38}]




