// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

let fs = require('fs');

let FileCleaner = (filename)=>{
    fs.readFile(filename, 'utf-8', (err, data)=>{
        if(err){
            console.log(err);
        }
        else{
            let dataArr = data.split(' ');
            let newData = dataArr.filter((item)=>{
                return item !== '';
            })
            let newStr = newData.join(' ');
            fs.writeFile(filename, newStr, (err)=>{
                if(err){
                    console.log(err);
                }
                else{
                    console.log('File cleaned successfully');
                }
            })
        }
    })
}

FileCleaner('file.txt');