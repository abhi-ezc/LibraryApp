const express = require('express');
const chalk = require('chalk');
const path=require('path');
var app = new express();
var nav = [{
        link:'/books',
        title:'Books'
    } ,
    {
        link :'/authors' ,
        title : 'Authors'
    } ,
    {
        link :'/sign/signup' ,
        title : 'SignUp'
    } ,
    {
        link :'/sign/signin' ,
        title : 'Login'
    } ,
    {
        link : '/admin/addbook' ,
        title:'Add Book'
    }
];
const BooksRouter=require('./src/routes/bookRoutes')(nav);
const AuthorsRouter=require('./src/routes/authorRoutes')(nav);
const SignRouter=require('./src/routes/signRouter')(nav);
const AdminRouter=require('./src/routes/adminRouter')(nav);
app.use('/books',BooksRouter);
app.use('/authors',AuthorsRouter);
app.use('/sign',SignRouter);
app.use('/admin',AdminRouter);
app.set('views', './src/views');
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname,'/public')));
app.all('/', (req, res) => {
    res.render(
        'index' ,
        {
            nav,
            title:'Library'});
});
app.listen(3001, () => {
    console.log(`listening to the port ${chalk.green('3000')}`);
});