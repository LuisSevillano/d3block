#!/usr/bin/env node

var fs = require("fs"),
    argv = require('minimist')(process.argv.slice(2))

var dependencies = {
    "topojson" : '<script src="//d3js.org/topojson.v1.js"></script>',
    "jquery" : '<script src="//code.jquery.com/jquery-3.2.1.min.js"></script>'
}

var deps = '', i = 0
for (; i < argv._.length;i++) {
    if (dependencies[argv._[i]]) {
       deps += dependencies[argv._[i]] + '\n'
    }else {
       console.log("Error: unknown dependency => " + argv._[i]);
    }
}

var template = `<!DOCTYPE html>\n<script src="//d3js.org/d3.v4.min.js"></script>\n${deps}<script>\n\n</script>`,
    config = 'boder: none'
    filesName = [{ fileName: "index.html", data: template},
                 { fileName: ".block", data: config }]

filesName
    .reduce(function(curFile, nextFile){
        return writeData(nextFile).then();
    }, writeData);

function writeData(params){
    return new Promise((resolve, reject) => {
        fs.writeFile(params.fileName, params.data, 'utf8', (err) => {
            if(err) {
                console.log(err, "in file " + params.fileName);
                reject(err);
            } else resolve();
          });
      });
}
