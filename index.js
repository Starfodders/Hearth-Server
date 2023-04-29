const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

// const https = require('https')
// const fs = require('fs')

//self-assigning key for now, ran openSSL cmd
// const options = {
//     key: fs.readFileSync('./key.pem'),
//     cert: fs.readFileSync('./cert.pem')
//   };

const PORT = process.env.PORT;
const CLIENT_URL = process.env.CLIENT_URL;

const userRoutes = require('./routes/userRoute')
const chapterRoutes = require('./routes/chapterRoute')
const unitRoutes = require('./routes/unitRoute')
const collectionRoutes = require('./routes/collectionRoute')
const meditateRoutes = require('./routes/meditateRoute')


app.use(cors(
    { origin: CLIENT_URL }
));
app.use(express.json())
app.use(express.static('public'))

app.use('/users', userRoutes)
app.use('/chapters', chapterRoutes)
app.use('/units', unitRoutes)
app.use('/collections', collectionRoutes)
app.use('/meditate', meditateRoutes)


// const server = https.createServer(options, app)

// server.listen(PORT, () => {
//     console.log(`Listening on ${PORT}`);
// })

app.listen(PORT, () => {
    console.log('Listening on ' + PORT);
})