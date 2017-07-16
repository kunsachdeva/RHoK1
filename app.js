// Load app dependencies
var http = require('http'),
    path = require('path'),
    express = require('express'),
    twilio = require('twilio');

// Load configuration information from system environment variables.
var TWILIO_ACCOUNT_SID = "AC4a4cbf635eabb9cc67f374a9ed272aa3",
    TWILIO_AUTH_TOKEN = "08928bc9f82a7bf81fd1512863ca8d27",
    TWILIO_NUMBER = "+13607270718";

// Create an authenticated client to access the Twilio REST API
var client = twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

// Create an Express web application with some basic configuration
var app = express();

app.configure(function(){
    app.set('port', process.env.PORT || 3000);
    app.set('views', __dirname + '/views');
    app.set('view engine', 'ejs');
    app.use(express.favicon());
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
    app.use(express.errorHandler());
});

// render our home page
app.get('/', function(request, response) {
    response.render('index');
});

// handle a POST request to send a text message.  This is sent via ajax on our
// home page
app.post('/message', function(request, response) {
    // Use the REST client to send a text message
    client.sendSms({
        to: request.param('to'),
        from: TWILIO_NUMBER,
        body: 'Good luck on your Twilio quest!'
    }, function(err, data) {
        // When we get a response from Twilio, respond to the HTTP POST request
        response.send('Message is inbound!');
    });
});

// handle a POST request to make an outbound call.  This is sent via ajax on our
// home page
app.post('/call', function(request, response) {
    // Use the REST client to send a text message
    client.makeCall({
        to: request.param('to'),
        from: TWILIO_NUMBER,
        url: 'https://kunsachdeva.github.io/dipper/twilio.xml',
        method: "GET"
    }, function(err, data) {
        //console.log(err)
        console.log("data")
        // When we get a response from Twilio, respond to the HTTP POST request
        //response.send('Call incoming!');
    });
});

// Create a TwiML document to provide instructions for an outbound call
app.get('/hello', function(request, response) {
    // Create a TwiML generator
    var twiml = new twilio.TwimlResponse();
    twiml.say('Hello there! You have successfully configured a web hook.');
    twiml.say('Good luck on your Twilio quest!', { 
        voice:'woman' 
    });

    // Return an XML response to this request
    response.set('Content-Type','text/xml');
    response.send(twiml.toString());
});

// Start our express app, by default on port 3000
http.createServer(app).listen(app.get('port'), function(){
    console.log("Express server listening on port " + app.get('port'));
});