import axios from 'axios';

// the reason this is in here is bc i need to securely send the api key,
//   and api is not bundled with the client so the full url wont be available on the client side

export default async function handler(req, res) {
  console.log("calling /api/transactions/[address]")

  const { address } = req.query;

  try {
    const URL = `https://api.helius.xyz/v0/addresses/${address}/transactions?&api-key=${process.env.HELIUS_API_KEY}`;
    const response = await axios.get(URL);

    res.status(200).json(response.data)
  } catch (err) {
    res.status(500).json({ error: 'failed to load data' })
  }
}
