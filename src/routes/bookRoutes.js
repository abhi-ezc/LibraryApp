const express=require('express');
BooksRouter=express.Router();
var books=[
    {
      "author": "Chinua Achebe",
      "title": "Things Fall Apart",
      "genre" : "Historical Fiction" ,
      "img" : "book1.jpg"
    },
    {
      "author": "Hans Christian Andersen",
      "title": "Fairy tales",
      "genre" : "A Fairy Tale" ,
      "img" : "book2.jpg"
    },
    {
      "author": "Dante Alighieri",
      "title": "The Divine Comedy",
      "genre" : "Epic Poetry" ,
      "img" : "book3.jpg"
 
    },
    {
      "author": "Jane Austen",
      "title": "Pride and Prejudice",
      "genre" : "Novel" ,
      "img" : "book4.jpg"
    }
];
function route(nav)
{
BooksRouter.route('/').get((req,res)=>{
    res.render(
        'books' ,
        {
            nav,
            title:'Books',
            books
        });

});

BooksRouter.route('/:id').get((req,res)=>{
    const id=req.params.id;
    res.render(
        'book' ,
        {
            nav,
            title:books[id].title,
            book:books[id]
        });
})
return BooksRouter;
}
module.exports=route;

