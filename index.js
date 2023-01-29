const express = require('express');
const jwt = require('jsonwebtoken');
const session =require('express-session');

const customer_routes=require('./routes/auth_users.js');
const genl_routes=require('./routes/general.js');

const app=express();

app.use(express.json());

//middleware

const PORT=process.env.PORT||5000;
app.use("/customer",customer_routes);
app.use("/",genl_routes);

app.listen(`Server is running on http://localhost:${PORT}`);