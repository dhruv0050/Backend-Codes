const fs = require('fs'); //To fetch operations of filesystem

fs.writeFile("Hey.txt","Hello",function(err){
    if(err) console.log(err);
    else console.log("Done")
})

// renaming
fs.rename("Hey.txt", "Changed.txt", function (err) {
    if (err) console.log(err);
    else console.log("Done");
})

fs.copyFile("backend1.txt", "./new/new.txt",function(err){
    if(err) console.log(err);
    else console.log("copied")
})

//removing folder

fs.rm("./delete", {recursive:true} ,function (err) {
    if (err) console.log(err);
    else console.log("Removed");
})



