// app/api/login/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '../../src/generated/prisma/client'; // Adjust the import path as necessary
import bcrypt from 'bcryptjs'; // Use this only if passwords are hashed

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { username, password } = body;

  const user = await prisma.client.findUnique({
    where: { username },
  });

  if (!user || user.password !== password) {
    return NextResponse.json({ success: false, message: 'Invalid credentials' }, { status: 401 });
  }

  // You can optionally return client-specific data here
  return NextResponse.json({ success: true, clientId: user.id });
}
