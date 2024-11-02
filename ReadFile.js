var myvar = require('fs');
myvar.readFile('./fs.txt','utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
});

