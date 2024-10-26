import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server';

const prisma = new PrismaClient()

export async function Post(request: Request, {params}: {params: {id: string}}){
    const {id} = params;
    const { userName, email, description } = await request.json();

    if (!userName || !email || !description) {
        return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    try{
        const movie = await prisma.movie.findUnique({
            where: {id}
        })

        if (!movie) {
            return NextResponse.json({ error: 'Movie not found' }, { status: 404 });
        }

        const newComment = await prisma.comment.create({
            data: {
                userName,
                email,
                description,
                movie: {connect: {id}}
            }
        })

        return NextResponse.json(newComment, { status: 201 });
    }catch (error) {
        console.error('Error creating comment:', error);
        return NextResponse.json({ error: 'Failed to create comment' }, { status: 500 });
    }
}
