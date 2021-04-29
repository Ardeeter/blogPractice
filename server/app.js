const express = require('express');
const app = express();

app.use(require('./routes'));

app.listen(3005, () => {
    console.log("Listening on Port 3005");
})
