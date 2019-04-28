const express = require('express');

const app = express();
const port = 3000;

app.listen(port, () => console.log(`LISTING TO ANDRE PORT ${port}`));

app.use('/movies', express.static('public/dist'));
