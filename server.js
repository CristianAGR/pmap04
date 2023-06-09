const express = require ('express');
const path = require ('path');

var app = express();

app.use(express.static(path.join(__dirname, 'javascript')));
app.use(express.static(path.join(__dirname, 'styles')));

app.get('/', function(request, response) {
    response.sendFile(path.join(__dirname + '/views/index.html'));
});

app.get('/map01', function(request, response) {
    response.sendFile(path.join(__dirname + '/views/map01.html'));
});

app.get('/map02', function(request, response) {
    response.sendFile(path.join(__dirname + '/views/map02.html'));
});

app.listen(3000);

// const express = require('express');
// const session = require('express-session');
// // acceso a las ubicaciones
// const path = require('path');
// //hacer llamadas asincronas a API's
// const got = require('got');
// var fs = require('fs');
// var https = require('https');
// const API_RESOURCE_BYUSERNAME = 'byusername/';
// const API_PATH = 'http://127.0.0.1:4000/api/users/';

// var app = express();

// var privateKey  = fs.readFileSync('./sslcerts/selfsigned.pkey', 'utf8');
// var certificate = fs.readFileSync('./sslcerts/selfsigned.cer', 'utf8');
// var credentials = {key: privateKey, cert: certificate};

// // your express configuration here
// var httpsServer = https.createServer(credentials, app);
// httpsServer.listen(3001);

// // archivos de recursos
// app.use(session({
//     secret: 'secret',
//     resave: true,
//     saveUninitialized: true
// }));
// //selializar/deserializar con json
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, 'styles')));
// app.use(express.static(path.join(__dirname, 'javascript')));

// app.get('/', function(request, response) {
//     // Render login template
//     response.sendFile(path.join(__dirname + '/views/login.html'));
// });

// // http://localhost:3000/auth
// app.post('/auth', async function(req, res) {
//     // Capture the input fields
//     let username = req.body.username;
//     let password = req.body.password;
//     // Ensure the input fields exists and are not empty
//     if (username && password) {
//         var uuid = await getUserSignedIn(username,password);
//         if(uuid != ''){
//             // Authenticate the user
//             req.session.loggedin = true;
//             req.session.username = username;
//             req.session.username = uuid;
//             // Redirect to userlocation
//             res.redirect('/userlocation?uuid='+uuid);
//         }
//         else{
//             res.send('Incorrect Username and/or Password!');
//             res.end();
//         }
//     } else {
//         res.send('Please enter Username and Password!');
//         res.end();
//     }
// });
// // http://localhost:3000/home
// app.get('/home', function(request, response) {
//     // If the user is loggedin
//     if (request.session.loggedin) {
//         // Output username
//         response.send('Welcome back, ' + request.session.username + '!');
//     } else {
//         // Not logged in
//         response.send('Please login to view this page!');
//     }
//     response.end();
// });

// app.get('/userlocation',function(req,res){
//     res.sendFile(path.join(__dirname + '/views/userlocation.html'));
//   });

// async function getUserSignedIn(username,password) {
//     console.log(API_PATH+API_RESOURCE_BYUSERNAME+username);
//     try{
//         const response = await got(API_PATH+API_RESOURCE_BYUSERNAME+username);
//         const user = JSON.parse(response.body);
//         console.log(user[0]);
//         if(user[0].password == password){
//             return user[0]._id;
//         }
//     }catch(err){
//         console.log('getUserSignedIn error:'+err);
//     }
//     return '';
//   }

// app.listen(3000);