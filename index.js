let express = require('express')
var spawn = require('child_process').spawn
let app = express()

app.get("/", (req, res) => {
    let jV = spawn("java -v")
    jv.stdout.on('data', function (data) {
        console.log('stdout: ' + data.toString());
      });
      
      jV.stderr.on('data', function (data) {
        console.log('stderr: ' + data.toString());
      });
      
      jV.on('exit', function (code) {
        console.log('child process exited with code ' + code.toString());
      });
    res.send("<h1>Hi</h1>")
})

app.listen(process.env.PORT || 8080)