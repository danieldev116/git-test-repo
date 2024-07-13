const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

const bodyPaser = require('body-parser');

app.use(bodyPaser.urlencoded({extended: false}));
app.use(bodyPaser.json());

const port = 5003
app.listen(port, () => console.log(`Server runing on port ${port}`));

