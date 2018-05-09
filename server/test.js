var fs = require('fs');
const tmpPath = `C:\\Users\\liu_bo\\Desktop\\data.json`;


fs.writeFile('tmpPath', "JSON.stringify(bodyPartJson.relations),", (err) => {
    if (err) throw err;
    console.log('It\'s saved!');
});