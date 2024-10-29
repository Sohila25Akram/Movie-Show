import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server';

const prisma = new PrismaClient()

export async function GET(request: Request, {params}: {params: {slug: string}}){
    const {slug} = params;
    try{
        const post = await prisma.post.findUnique({
            where : {slug},
            include: {
                comments: true,
            }
        })
        if (!post) {
            return NextResponse.json({ error: 'Movie not found' }, { status: 404 });
        }

        return NextResponse.json(post);
    }catch (error){
        console.error('Error fetching post:', error);
        return NextResponse.json({ error: 'Failed to fetch post' }, { status: 500 });
    }
}
