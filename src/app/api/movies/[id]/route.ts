import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server';

const prisma = new PrismaClient()

export async function GET(request: Request, {params}: {params: {id: string}}){
    const {id} = params;
    try{
        const movie = await prisma.movie.findUnique({
            where : {id},
            include: {
                watchingTimes: true,
            },
        })
        if (!movie) {
            return NextResponse.json({ error: 'Movie not found' }, { status: 404 });
        }

        return NextResponse.json(movie);
    }catch (error){
        console.error('Error fetching movie:', error);
        return NextResponse.json({ error: 'Failed to fetch movie' }, { status: 500 });
    }
}