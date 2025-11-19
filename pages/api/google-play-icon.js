import gplay from 'google-play-scraper';

export default async function handler(req, res) {
  const { package: packageId } = req.query;

  if (!packageId) {
    res.status(400).json({ error: 'Missing package parameter' });
    return;
  }

  try {
    const appData = await gplay.app({ appId: packageId });
    const iconUrl = appData.icon;

    if (!iconUrl) {
      res.status(404).json({ error: 'Icon not found on Google Play page' });
      return;
    }

    // Cache the result for 24 hours to avoid hitting limits
    res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate=43200');
    res.status(200).json({ iconUrl });
  } catch (error) {
    console.error('Error fetching Google Play icon:', error);
    res.status(500).json({ error: 'Unexpected error fetching Google Play icon' });
  }
}
