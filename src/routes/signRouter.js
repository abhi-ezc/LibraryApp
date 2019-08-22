const express=require('express');
const SignRouter=express.Router();
function route(nav)
{
    SignRouter.route('/signup').get((req,res)=>{
        //var url=req.baseUrl.toLowerCase();
            res.render('registration',{
                nav,
                title:"SignUp"
            });
       
        
        
    });
    SignRouter.route('/signin').get((req,res)=>{
      
            res.render('login',{
                nav ,
                title : "Login"
            });
        
        
    });
    return SignRouter;
}
module.exports=route;