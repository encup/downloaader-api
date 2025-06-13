export default async function handler(req, res) {
  const url = req.query.url;
  if (!url) return res.status(400).json({ error: "URL parameter is required" });

  // contoh hanya cek URL
  res.json({ success: true, url });
}
