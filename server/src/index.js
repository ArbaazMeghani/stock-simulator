let express = require('express');

let app = express();

app.get('/', (req, res) => {
    res.send("Hello World");
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log("Running Express Server on Port: " + port));