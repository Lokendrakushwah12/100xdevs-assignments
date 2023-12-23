let fs = require('fs');

let writeToFile = (filename, data) => {
    fs.writeFile(filename, data, (err)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log("data added to file: "+ data);
        }
    })
}

writeToFile('test.txt', 'hello world');