const figlet=require('figlet')

figlet("Henil!",function(err,data){
    if(err){
        console.log("Something Wrong!!")
        console.dir(err)
        return;
    }
    console.log(data)
});