const express = require('express')
const port = process.env.port || 3000;


const libRouter = require('./Routes/Lib-route')
const userRouter = require('./Routes/User-route')
const loginRouter = require('./Routes/login-route')
const addRouter = require('./Routes/add-routes')

const app = express();

app.use(express.json());

app.use('/api/libros', libRouter)
app.use('/user', userRouter)
app.use('/user/add', addRouter)
app.use('/user/login', loginRouter)

app.listen(port, ()=> console.log("running on port " + port));
