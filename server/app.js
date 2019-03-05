const express= require('express');
const app = express();
const morgan = require('morgan');
const  {mongoose} = require('./database');
const router = require('./routes/task.route');
const cors = require('cors');
const path = require('path');



//setting 
app.set('views', path.join(__dirname, './dist/frontend'));
app.set('port', process.env.PORT || 8080 );
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');


//middleware
app.use(express.json());
app.use(morgan('dev'));

//staticFile
app.use(express.static(path.join(__dirname, './dist/frontend')));

app.use(express.urlencoded({extended: false }));

app.use(cors());
//routes
app.use(router);

//listen
app.listen(app.get('port'), ()=>{
    console.log('at conecction');
})