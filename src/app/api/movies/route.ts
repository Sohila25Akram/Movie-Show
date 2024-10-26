import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server';

const prisma = new PrismaClient()

export async function GET(){
    try{
        const movies = await prisma.movie.findMany({
            include: {
              watchingTimes: true
            },
          })
          return NextResponse.json(movies);
    }catch (error){
        console.error('Error fetching movies:', error);
        return NextResponse.json({ error: 'Failed to fetch movies' }, { status: 500 });
    }
}