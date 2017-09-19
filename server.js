const express = require('express');
const hbs = require('hbs');
const port = process.env.PORT || 3000;

var app = express();

hbs.registerPartials(__dirname+'/views/partials');
app.set("view engine", "hbs");
app.use(express.static(__dirname+'/public'));
app.use((req, res, next) => {
    var now = new Date().toString();
    console.log(`${now}: ${req.method} ${req.url}`);
    next();
});
//app.use((req, res, next) => {
//    res.render('maintenance.hbs');
//});
hbs.registerHelper('getCurrentYear', ()=>{
    return new Date().getFullYear();
});
hbs.registerHelper('screamIt', (text)=>{
    return text.toUpperCase();
});

app.get('/', (req, res)=>{
   // res.send('<h1>hello express dfhd</h1>');
   /*res.send({
       name: 'fh',
       likes: ['a', 'b']
   });*/
   res.render('home.hbs', {
    pageTitle: "home page"
   // currentYear: new Date().getFullYear()
});
});

app.get('/about', (req, res)=>{
  //res.send('about page');
  res.render('about.hbs', {
      pageTitle: "about page"
      //currentYear: new Date().getFullYear()
  });
});

app.get('/projects', (req, res)=>{
    //res.send('about page');
    res.render('projects.hbs', {
        pageTitle: "project page"
        //currentYear: new Date().getFullYear()
    });
  });

app.get('/bad', (req, res)=>{
    res.send({
        error: 'some error occured'
    });
});

app.listen(port, () => {
    console.log(`server is up at ${port}`);
});