const express = require('express')
const cors = require('cors')
const app = express();

require('dotenv').config();
require('./Models/db');
const cors = require('cors')

const userRoutes = require('./Routes/users');
const authRoutes = require("./Routes/auth");

const TaskRouter = require("./Routes/TaskRouter");
const bodyParser = require('body-parser');




app.get('/', (req, res) => {
    res.send("Hello from server")
})
app.use(cors())
app.use(bodyParser.json());

app.use('/tasks', TaskRouter)

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`Server is running on PORT = ${PORT}`)
})
