export default async function handler(req, res) {
  const { package: packageId } = req.query;

  if (!packageId) {
    res.status(400).json({ error: 'Missing package parameter' });
    return;
  }

  const targetUrl = `https://play.google.com/store/apps/details?id=${encodeURIComponent(
    packageId
  )}&hl=en&gl=US`;

  try {
    const response = await fetch(targetUrl, {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept-Language': 'en-US,en;q=0.9',
      },
    });

    if (!response.ok) {
      res.status(response.status).json({ error: 'Failed to fetch Google Play page' });
      return;
    }

    const html = await response.text();

    const ogImageMatch = html.match(/<meta\s+property="og:image"\s+content="([^"]+)"/i);
    const itemPropImageMatch = html.match(/<meta\s+itemprop="image"\s+content="([^"]+)"/i);

    const iconUrl = ogImageMatch?.[1] || itemPropImageMatch?.[1] || null;

    if (!iconUrl) {
      res.status(404).json({ error: 'Icon not found on Google Play page' });
      return;
    }

    res.status(200).json({ iconUrl });
  } catch (error) {
    console.error('Error fetching Google Play icon:', error);
    res.status(500).json({ error: 'Unexpected error fetching Google Play icon' });
  }
}
