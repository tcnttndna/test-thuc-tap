exports.router = (app)=>{
    
    app.get("/",(req,res)=>{
        res.render("index");
    });

}