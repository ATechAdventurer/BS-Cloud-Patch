let express = require('express')

let app = express()

app.get("/", (req, res) => {
    res.send("<h1>Hi</h1>")
})

app.listen(process.env.PORT || 8080)