let fs = require('fs');

let readFromFile = (filename) => {
    fs.readFile(filename, 'utf-8', (err, data) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log(data);
        }
    })
}

// expensive operation
let cnt = 0;
for (let i = 0; i < 1000000000; i++) {
    cnt++;
}
// takes some time before the file is read

readFromFile('test.txt');