const express = require('express');
const PORT = process.env.PORT || 5100;
const path = require('path');
const app = express();

app.use('/', express.static(path.join(__dirname, '/app/build')));
// this * route is to serve project on different page routes except root `/`
app.get(/.*/, function (req, res) {
    res.sendFile(path.join(__dirname, '/app/build/index.html'))
})

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
