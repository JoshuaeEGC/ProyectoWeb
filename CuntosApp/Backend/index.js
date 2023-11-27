const dotenv = require('dotenv');
dotenv.config();

const express = require('express')

const passport = require('passport');
const session = require('express-session');

const port = process.env.port || 3000;


const StoryRouter = require('./Routes/Story-route.js')
const userRouter = require('./Routes/User-route')
const loginRouter = require('./Routes/login-route')

const google = require('./Routes/google.js')

const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:4200'); // Reemplaza con el origen de tu aplicación Angular
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});
  
// Configuración de sesión
app.use(session({ secret: 'Timmy Turner', resave: true, saveUninitialized: true }));

// Inicialización de Passport
app.use(passport.initialize());
app.use(passport.session());

app.use(express.json());

app.use('/api/Stories', StoryRouter)
app.use('/user', userRouter)
app.use('/user/login', loginRouter)

app.use('/auth', google)

app.listen(port, ()=> console.log("running on port " + port));
