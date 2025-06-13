const express = require('express');
const router = express.Router();
const { exec } = require('child_process');

router.get('/', (req, res) => {
  const url = req.query.url;
  if (!url) return res.status(400).json({ error: 'URL is required' });

  exec(`yt-dlp -j "${url}"`, (err, stdout, stderr) => {
    if (err) return res.status(500).json({ error: 'Download failed', details: stderr });
    try {
      const info = JSON.parse(stdout);
      res.json({
        title: info.title,
        thumbnail: info.thumbnail,
        url: info.url || info.webpage_url,
        formats: info.formats
      });
    } catch (e) {
      res.status(500).json({ error: 'Failed to parse video info' });
    }
  });
});

module.exports = router;
