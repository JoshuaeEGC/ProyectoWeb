const express = require('express')

const passport = require('passport');
const session = require('express-session');

const port = process.env.port || 3000;


const libRouter = require('./Routes/Lib-route')
const userRouter = require('./Routes/User-route')
const loginRouter = require('./Routes/login-route')
const addRouter = require('./Routes/add-routes')

const google = require('./Routes/google.js')
const googleController = require('./DB/google.js')

const app = express();

// Configuración de sesión
app.use(session({ secret: 'Timmy Turner', resave: true, saveUninitialized: true }));

// Inicialización de Passport
app.use(passport.initialize());
app.use(passport.session());

app.use(express.json());

app.use('/api/libros', libRouter)
app.use('/user', userRouter)
app.use('/user/add', addRouter)
app.use('/user/login', loginRouter)

app.use('/auth', google)

app.listen(port, ()=> console.log("running on port " + port));
