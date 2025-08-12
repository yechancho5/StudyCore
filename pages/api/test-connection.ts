import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    console.log('Testing basic connection...');
    console.log('DATABASE_URL exists:', !!process.env.DATABASE_URL);
    console.log('DATABASE_URL starts with:', process.env.DATABASE_URL?.substring(0, 20));
    
    // Test if we can parse the connection string
    const url = process.env.DATABASE_URL;
    if (!url) {
      return res.status(500).json({ error: 'DATABASE_URL not set' });
    }
    
    // Basic validation
    if (!url.startsWith('postgresql://')) {
      return res.status(500).json({ error: 'Invalid DATABASE_URL format' });
    }
    
    return res.status(200).json({ 
      success: true, 
      message: 'Environment variable looks correct',
      hasUrl: !!url,
      urlPrefix: url.substring(0, 30) + '...'
    });
  } catch (error: any) {
    console.error('Test failed:', error);
    return res.status(500).json({ 
      success: false, 
      error: error.message
    });
  }
}
