export default async function handler(req, res) {
  const { id } = req.query;

  if (!id) {
    res.status(400).json({ error: 'Missing app id' });
    return;
  }

  try {
    const response = await fetch(`https://itunes.apple.com/lookup?id=${encodeURIComponent(id)}`);

    if (!response.ok) {
      res.status(response.status).json({ error: 'Failed to fetch app data' });
      return;
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching app data:', error);
    res.status(500).json({ error: 'Unexpected error fetching app data' });
  }
}
