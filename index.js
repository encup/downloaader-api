const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const youtube = require('./api/youtube');
const tiktok = require('./api/tiktok');
const instagram = require('./api/instagram');
const facebook = require('./api/facebook');

app.get('/', (req, res) => res.send('Downloader API Ready'));
app.use('/api/youtube', youtube);
app.use('/api/tiktok', tiktok);
app.use('/api/instagram', instagram);
app.use('/api/facebook', facebook);

app.listen(port, () => console.log(`Server running on port ${port}`));
