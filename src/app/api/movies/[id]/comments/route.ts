import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server';

const prisma = new PrismaClient()

export async function POST(request: Request, { params }: { params: { id: string } }) {
  const movieId = params.id;

  try {
    const { userName, email, description } = await request.json();
    
    if (!userName || !email || !description) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const comment = await prisma.comment.create({
      data: {
        userName,
        email,
        description,
        movie: { connect: { id: movieId } },
      },
    });

    return NextResponse.json(comment, { status: 201 });
  } catch (error) {
    console.error('Error creating comment:', error);
    return NextResponse.json({ error: 'Error creating comment' }, { status: 500 });
  }
}
