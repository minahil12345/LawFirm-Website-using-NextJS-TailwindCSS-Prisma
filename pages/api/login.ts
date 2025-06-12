import { PrismaClient } from '../../src/generated/prisma';
import bcrypt from 'bcryptjs';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method Not Allowed' });
    }
    const { username, password } = req.body;
   // validate inputs
   if (!username || !password) {
    return res.status(400).json({ error: 'Missing email or password' });
  }
  const user = await prisma.client.findUnique({
    where: { username },
  });
  // if (!user || !(await bcrypt.compare(password, user.password))) {
  if (!user || user.password !== password) {
    return res.status(401).json({ success: false });
  }

    return res.status(200).json({ success: true, clientId: user.id });
  } catch (error) {
    console.error('API login error:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
