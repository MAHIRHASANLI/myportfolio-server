const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors');
const bodyParser = require('body-parser');
const about_router = require('./routes/about.routes');
const skills_router = require('./routes/skills.routes');
const home_router = require('./routes/home.routes');
const services_router = require('./routes/services.routes');
const myproject_router = require('./routes/project.routes');
const contact_router = require('./routes/contact.routes');
const message_router = require('./routes/message.routes');
const admin_router = require('./routes/admin.routes');
const adminLogin_router = require('./routes/adminLogin.routes');
require('dotenv').config()
const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/login', admin_router);

app.use('/adminlogin', adminLogin_router);


//Home
app.use('/home', home_router);

// About
app.use('/about', about_router);

//Skills
app.use('/skills', skills_router);

//Services
app.use('/services', services_router);

//My_Project
app.use('/project', myproject_router)

//My Contact
app.use('/mycontact', contact_router);

//My Message
app.use('/message', message_router);

// mongoose.connect(process.env.MY_CONNECT.toString(),{useNewUrlParser:true, useUnifiedTopology:true}).then(()=>app.listen(process.env.PORT,()=>{
//     console.log(`Connected PORT: ${process.env.PORT}`);
// }))

app.listen(process.env.PORT, () => {
    console.log(`Connected PORT: ${process.env.PORT}`);
})

mongoose.connect(process.env.MY_CONNECT).then(() => {
    console.log("MongoDB Connected");
})