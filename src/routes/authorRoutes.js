const express=require('express');
const authorRouter=express.Router();
var authors=[
    {
        "name":"Chinua Achebe",
        "country" : "USA"
    } , 
    {
        "name":"Hans Christian Andersen",
        "country" : "USA"
    } ,
    {
        "name":"Hans Christian Andersen",
        "country" : "USA"
    } ,
    {
        "name" : "Dante Alighieri" ,
        "country" : "USA"
    } ,
    {
        "name" : "Jane Austen",
        "country" : "USA"
    }
];
function route(nav)
{
    authorRouter.route('/').get((req,res)=>{
        res.render("authors",{
            nav,
            title : "Authors" ,
            authors
        });
    });
    authorRouter.route('/:id').get((req,res)=>{
        id=req.params.id;
        res.render("author",{
            nav,
            title : authors[id].name,
            author:authors[id]
        });
    })
    return authorRouter;
}
module.exports=route;