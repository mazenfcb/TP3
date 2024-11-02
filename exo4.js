const fs = require('fs');


const dest = process.argv[2];
const text = process.argv[3];

fs.writeFile( dest, text, (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('saved!');
});
fs.readFile(dest, 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
});


