const express = require('express');
const app = express();
const PORT = 5001;

app.get('', (req, res) => {
    res.send('Hello from the get route');
})

app.listen(PORT, () => {
    console.log("Sever started at PORT >>", PORT);
})
