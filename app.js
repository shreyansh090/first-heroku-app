const express = require('express');

const app = express();

app.listen(process.env.PORT || 5000);

app.set('view engine' , 'ejs');

app.get('/', (req,res) => {
    const blogs = [
        {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
      ];
    res.render('index',{title: "home", blogs:blogs}); 
});

app.get('/about',(req,res)=>{

    res.render('about',{title: "about"});
});
app.get('/create', (req,res) => {
    res.render('create',{title:"create"});
})
app.use((req,res) => {
    res.status(404).render('404',{title:"404"});
})