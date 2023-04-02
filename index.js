const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

const PORT = process.env.PORT;
const CLIENT_URL = process.env.CLIENT_URL;

const userRoutes = require('./routes/userRoute')
const chapterRoutes = require('./routes/chapterRoute')
const unitRoutes = require('./routes/unitRoute')


app.use(cors(
    { origin: CLIENT_URL }
));
app.use(express.json())
app.use(express.static('public'))

app.use('/users', userRoutes)
app.use('/chapters', chapterRoutes)
app.use('/units', unitRoutes)


app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
})