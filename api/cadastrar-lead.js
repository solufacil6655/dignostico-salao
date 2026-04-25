export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { email, scores } = req.body;

    if (!email || !email.includes('@')) {
      return res.status(400).json({ error: 'Email inválido' });
    }

    const response = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': process.env.BREVO_API_KEY
      },
      body: JSON.stringify({
        email,
        listIds: [2],
        updateEnabled: true,
        attributes: scores || {}
      })
    });

    // Trata resposta vazia do Brevo
    const text = await response.text();
    const data = text ? JSON.parse(text) : {};
    
    console.log('Brevo status:', response.status);
    console.log('Brevo response:', text);

    return res.status(200).json({ success: true, data });

  } catch (error) {
    console.log('Erro:', error.message);
    return res.status(500).json({ error: error.message });
  }
}
