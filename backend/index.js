const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const router = require('./router/index.js');


const app = express();

const PORT = process.env.PORT || 8080;
const CONNECTION_URL = 'mongodb://localhost:27017/theunique';

app.use(bodyParser.json({limit: '40mb', extended: true}))
app.use(bodyParser.urlencoded({limit: '40mb', extended: true}));
app.use(cors());
app.use('/api', router);


mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message))

// mongoose.set('useFindAndModify', false);
